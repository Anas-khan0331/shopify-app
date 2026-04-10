import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { LoadingSpinner } from "./CheckoutIcons";
import { ForwardArrowIcon } from "./Icons";
import { FALLBACK_IMAGE } from "../utils/constants";
import { useProductVariant } from "../hooks/useProductVariant";
import AttributeSwatch from "./AttributeSwatch";
import ProductHeader from "./ProductHeader";

// --- Main Component ---
export default function ProductDetails({ product, onSellDevice }) {
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSelling, setIsSelling] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const isSyncing = useRef(false);

  const { fetchDetails, syncOffer, finalizeSellDevice } =
    useProductVariant(product);

  const [selections, setSelections] = useState({
    storage: (product.storage || "128GB").toLowerCase(),
    network: "unlocked",
    condition: "very good",
  });

  useEffect(() => {
    fetchDetails(selections, setDetailData, setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    syncOffer(detailData, isSyncing);
  }, [detailData, syncOffer]);

  const handleSelect = (name, value) => {
    const next = { ...selections, [name.toLowerCase()]: value.toLowerCase() };
    setSelections(next);
    fetchDetails(next, setDetailData, setLoading);
  };

  const handleSellDevice = () => {
    finalizeSellDevice(setIsSelling, onSellDevice, product, detailData);
  };

  const variant = detailData?.variant || {};
  const attributes = detailData?.attributes || [];
  const displayImage = imgFailed
    ? FALLBACK_IMAGE
    : detailData?.media || product.media || FALLBACK_IMAGE;
  const variantSummary = variant.attributes?.map((a) => a.value).join(" | ");

  if (loading && !detailData)
    return (
      <div id="product-details-loading">
        <LoadingSpinner size={28} />
      </div>
    );

  return (
    <div id="product-details-container">
      <ProductHeader
        image={displayImage}
        imageAlt={detailData?.title || product.title}
        onImageError={() => setImgFailed(true)}
        title={detailData?.title || product.title}
        subtitle={variantSummary}
        price={variant.price || "---"}
        pricePrefix="£"
        imageSize={87}
        contentGap={40}
      />

      {attributes?.map((attr) => (
        <AttributeSwatch
          key={attr.name}
          attribute={attr}
          selectedValue={
            variant.attributes?.find((a) => a.name === attr.name)?.value
          }
          isCondition={attr.name.toLowerCase() === "condition"}
          conditionSummary={variant.conditionSummary}
          onSelect={handleSelect}
        />
      ))}
      <div id="product-details-spacer">&nbsp;</div>
      <div id="product-details-sticky-wrapper">
        <button
          className="sell-now-button"
          style={{ width: "100%" }}
          disabled={isSelling || !variant.price}
          onClick={handleSellDevice}
        >
          {isSelling ? (
            <LoadingSpinner size={18} />
          ) : (
            <>
              Sell My Device <ForwardArrowIcon />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    media: PropTypes.string,
    storage: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  onSellDevice: PropTypes.func,
};

ProductDetails.defaultProps = {
  onSellDevice: undefined,
};
