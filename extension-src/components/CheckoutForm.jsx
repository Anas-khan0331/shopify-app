import { useCallback, useRef, useState } from "react";
import { FALLBACK_IMAGE } from "../utils/constants";
import { removeFalsyKeys, StoreHelper } from "../utils/storeHelper";
import { validateAll } from "../utils/validation";
import CheckoutContactForm from "./checkout/CheckoutContactForm";
import { CheckoutPaymentDetails } from "./checkout/CheckoutPaymentDetails";
import { CheckoutPersonalInfo } from "./checkout/CheckoutPersonalInfo";
import { CheckoutShippingMethod } from "./checkout/CheckoutShippingMethod";
import { LoadingSpinner } from "./Icons";
import ProductHeader from "./ProductHeader";

const BASE_API_URL = "https://staging.mobiledirectonline.co.uk/api";

export default function CheckoutForm({
  offerId,
  sessionToken,
  product,
  variant,
  onSuccess,
}) {
  const [formValues, setFormValues] = useState({
    countryCode: "+44",
    channel: "online",
    email: "",
    fname: "",
    lname: "",
    phone: "",
    addressLineOne: "",
    addressLineTwo: "",
    addressLineThree: "",
    city: "",
    postCode: "",
    imeiNumber: "",
    paymentMethod: "bank",
    accountTitle: "",
    sortCode: "",
    accountNumber: "",
    paypalEmail: "",
    shippingMethod: "royal_mail",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [imageFailed, setImageFailed] = useState(false);

  const USER_FIELDS = [
    "email",
    "fname",
    "lname",
    "phone",
    "addressLineOne",
    "city",
    "postCode",
    "imeiNumber",
    "accountTitle",
    "sortCode",
    "accountNumber",
    "paypalEmail",
  ];

  const hasAnyValue = USER_FIELDS.some((k) => {
    const value = formValues[k];
    return (
      value &&
      value.toString().trim() !== "" &&
      value.toString().trim() !== "bank" &&
      value.toString().trim() !== "royal_mail"
    );
  });
  const formValuesRef = useRef(formValues);
  formValuesRef.current = formValues;

  const setFormValue = useCallback((name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const saveSession = useCallback(
    ({ name, value }) => {
      if (!offerId) return;

      const snapshot = { ...formValuesRef.current, [name]: value };
      const payload = removeFalsyKeys(snapshot);

      const offerPayload = removeFalsyKeys({
        productModel: product?.originalTitle || product?.title,
        productBrand: product?.brandName,
        productType: product?.categoryName,
        media: product?.media,
        priceAtOrder: variant?.price,
      });
      StoreHelper.set(sessionToken, payload);

      fetch(`${BASE_API_URL}/checkout-session/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          offerId,
          data: {
            ...payload,
            offer: offerPayload,
          },
        }),
      }).catch(() => {});
    },
    [offerId, sessionToken, product, variant],
  );
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitError(null);

      const validationErrors = validateAll(formValues);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      try {
        await fetch(`${BASE_API_URL}/offers/${offerId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "accepted" }),
        });
        const payload = {
          email: formValues.email,
          fname: formValues.fname,
          lname: formValues.lname,
          phone: formValues.phone,
          countryCode: formValues.countryCode,
          postCode: formValues.postCode || "",
          city: formValues.city,
          addressLineOne: formValues.addressLineOne,
          ...(formValues.addressLineTwo && {
            addressLineTwo: formValues.addressLineTwo,
          }),
          ...(formValues.addressLineThree && {
            addressLineThree: formValues.addressLineThree,
          }),
          ...(formValues.imeiNumber && { imeiNumber: formValues.imeiNumber }),
          paymentMethod: formValues.paymentMethod,
          shippingMethod: formValues.shippingMethod,
          offerId,
          sessionToken,
          channel: "online",
        };

        if (formValues.paymentMethod === "bank") {
          payload.accountTitle = formValues.accountTitle;
          payload.sortCode = formValues.sortCode.replace(/-/g, "");
          payload.accountNumber = formValues.accountNumber;
        } else if (formValues.paymentMethod === "paypal") {
          payload.paypalEmail = formValues.paypalEmail;
        }

        const res = await fetch(`${BASE_API_URL}/orders/guest`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();

        if (data.success) {
          if (sessionToken) {
            StoreHelper.delete(sessionToken);
          }
          onSuccess?.(data);
        } else {
          setSubmitError(
            data.message || "Something went wrong. Please try again.",
          );
        }
      } catch {
        setSubmitError("Network error. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formValues, offerId, sessionToken, onSuccess],
  );

  const variantSummary =
    variant?.attributes?.map((attribute) => attribute.value).join(" | ") || "";
  const displayPrice = variant?.price || "---";
  const headerImage = imageFailed
    ? FALLBACK_IMAGE
    : product?.media || FALLBACK_IMAGE;
  return (
    <>
      <form id="checkout-form" onSubmit={handleSubmit}>
        <ProductHeader
          image={headerImage}
          imageAlt={product?.title || "Your Device"}
          onImageError={() => setImageFailed(true)}
          title={product?.originalTitle || "Your Device"}
          subtitle={variantSummary}
          price={displayPrice}
          pricePrefix="£"
          imageSize={87}
          contentGap={40}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <CheckoutContactForm
            formValues={formValues}
            setFormValue={setFormValue}
            errors={errors}
            saveSession={saveSession}
          />

          <CheckoutPersonalInfo
            formValues={formValues}
            setFormValue={setFormValue}
            errors={errors}
            saveSession={saveSession}
          />

          <CheckoutPaymentDetails
            formValues={formValues}
            setFormValue={setFormValue}
            errors={errors}
            saveSession={saveSession}
          />

          <CheckoutShippingMethod
            formValues={formValues}
            setFormValue={setFormValue}
            errors={errors}
            saveSession={saveSession}
          />
        </div>

        {submitError && <div id="checkout-submit-error">{submitError}</div>}

        <div id="checkout-validation-separator"></div>

        <div id="checkout-btn-wrapper">
          <button
            type="submit"
            className="sell-now-button"
            disabled={isSubmitting || !hasAnyValue}
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size={18} /> Processing...
              </>
            ) : (
              <>Confirm Order</>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
