import { useCallback, useMemo } from "react";
import { PRODUCT_VARIANT_API } from "../utils/constants";
import { StoreHelper } from "../utils/storeHelper";
import {
  TRADE_IN_OFFER_KEY,
  OFFER_API,
  VARIANT_OFFER_API,
} from "../utils/constants";

export function useProductVariant(product) {
  const slug = useMemo(() => {
    if (product.slug) return product.slug;
    return product.title?.toLowerCase().replace(/\s+/g, "-") || "";
  }, [product.slug, product.title]);

  const fetchDetails = useCallback(
    async (currentSelections, setDetailData, setLoading) => {
      setLoading(true);
      try {
        const res = await fetch(`${PRODUCT_VARIANT_API}/${slug}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ attributes: currentSelections }),
        });
        const data = await res.json();
        setDetailData(data?.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    },
    [slug],
  );

  const buildOfferPayload = useCallback((detail) => {
    if (!detail?._id || !detail?.variant?._id) return null;
    return {
      productId: detail._id,
      variantId: detail.variant._id,
    };
  }, []);

  const updateOffer = useCallback(async (offerId, payload) => {
    await fetch(`${OFFER_API}/${offerId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }, []);

  const createOffer = useCallback(async (payload) => {
    const res = await fetch(`${VARIANT_OFFER_API}/${payload.productId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result.success ? result.data?._id : null;
  }, []);

  const syncOffer = useCallback(
    async (detailData, isSyncing) => {
      if (!detailData?._id || !detailData?.variant?._id || isSyncing.current)
        return;

      isSyncing.current = true;
      let storedId = StoreHelper.sessionGet(TRADE_IN_OFFER_KEY);
      if (storedId) storedId = storedId.replace(/"/g, "");

      try {
        const payload = buildOfferPayload(detailData);
        if (!payload) return;

        if (storedId) {
          await updateOffer(storedId, payload);
        } else {
          const newId = await createOffer(payload);
          if (newId) StoreHelper.sessionSet(TRADE_IN_OFFER_KEY, newId);
        }
      } catch (err) {
        console.error("Sync Error:", err);
      } finally {
        isSyncing.current = false;
      }
    },
    [buildOfferPayload, createOffer, updateOffer],
  );

  const finalizeSellDevice = useCallback(
    async (setIsSelling, onSellDevice, product, detailData) => {
      let offerId = StoreHelper.sessionGet(TRADE_IN_OFFER_KEY);
      if (!offerId) return;
      offerId = offerId.replace(/"/g, "");

      setIsSelling(true);
      try {
        const res = await fetch(`${OFFER_API}/${offerId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "accepted" }),
        });
        const data = await res.json();
        if (data?.success) {
          StoreHelper.sessionDelete(TRADE_IN_OFFER_KEY);
          const payload = {
            offerId,
            sessionToken: data.data.sessionToken,
            product,
            variant: detailData?.variant,
            detailData,
          };
          if (onSellDevice) {
            onSellDevice(payload);
          } else {
            window.location.replace(`/checkout/cn/${data.data.sessionToken}`);
          }
        }
      } catch (err) {
        console.error("Finalization Error:", err);
      } finally {
        setIsSelling(false);
      }
    },
    [],
  );

  return {
    slug,
    fetchDetails,
    syncOffer,
    finalizeSellDevice,
  };
}
