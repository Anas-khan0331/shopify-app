import { useEffect, useState } from "react";
import {
  ResetDeviceIcon,
  PackageIcon,
  DeliveryIcon,
  PaymentIcon,
  DownloadIcon,
} from "../components/Icons";
import ProductHeader from "../components/ProductHeader";
import useShippingLabel from "../hooks/useShippingLabel";
import { FALLBACK_IMAGE } from "../utils/constants";

const WHATS_NEXT = [
  {
    icon: <ResetDeviceIcon />,
    title: "Reset Your Device",
    desc: "Make sure you're signed out of iCloud or Google, and remove your SIM card.",
  },
  {
    icon: <PackageIcon />,
    title: "Pack and Attach Label",
    desc: "Place your device in secure packaging. Paste the Royal Mail label on the package.",
  },
  {
    icon: <DeliveryIcon />,
    title: "Send via Royal Mail",
    desc: "Drop your package off at any Royal Mail Post Office or Book a Collection with Royal Mail.",
  },
  {
    icon: <PaymentIcon />,
    title: "We Inspect & Pay You",
    desc: "Once we receive and inspect your device, your payment will be processed.",
  },
];

export default function ConfirmationPage({ navigation }) {
  const { order, product, variant } = navigation.params;
  const [imageFailed, setImageFailed] = useState(false);
  const orderId = order?._id || order?.id || "";
  const { downloadShippingLabel, downloadLabel, getUrl, cleanup, isLoading } =
    useShippingLabel();

  useEffect(() => {
    const modalBody = document.getElementById("wishlist-modal-body");
    if (modalBody) modalBody.scrollTop = 0;
  }, []);

  useEffect(() => {
    if (orderId) {
      downloadShippingLabel(orderId);
    }
    return () => cleanup();
  }, [orderId, downloadShippingLabel, cleanup]);
  const variantSummary =
    variant?.attributes?.map((attribute) => attribute.value).join(" | ") || "";
  const displayPrice = variant?.price || order?.offerValue || "---";
  const headerImage = imageFailed
    ? FALLBACK_IMAGE
    : product?.media || FALLBACK_IMAGE;

  return (
    <div id="checkout-confirmation" style={styles.root}>
      {/* ── Product header (matches detail page) ── */}
      <ProductHeader
        image={headerImage}
        imageAlt={"Your Device"}
        onImageError={() => setImageFailed(true)}
        title={product?.originalTitle || "Your Device"}
        subtitle={variantSummary}
        price={displayPrice}
        pricePrefix="£"
        imageSize={87}
        contentGap={32}
      />
      {/* Shipping Label */}
      {orderId && (
        <div id="shipping-label">
          <button
            id="shipping-label-button"
            disabled={isLoading}
            onClick={() => downloadLabel("shipping-label.pdf")}
          >
            {isLoading ? "Loading..." : "Download Shipping Label"}
            <DownloadIcon />
          </button>
        </div>
      )}
      <div
        id="checkout-confirmation-detail"
        style={{
          padding: "20px",
          border: "1px solid #DCDCDC",
          borderRadius: "20px",
          textAlign: "start",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <h2 id="checkout-confirmation-title" style={styles.tradeHeading}>
          Your Trade-in is confirmed
        </h2>
        <p
          id="checkout-confirmation-text"
          style={{
            fontFamily: "Albert Sans",
            fontWeight: 400,
            fontSize: "16px",
            marginTop: "0px",
            marginBottom: "0px",
            color: "#8E8E8E",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          You'll receive a confirmation email with your trade-in number shortly.
        </p>
      </div>

      <div
        style={{
          padding: "20px",
          border: "1px solid #DCDCDC",
          borderRadius: "20px",
          textAlign: "start",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div>
          <h2 id="checkout-confirmation-title" style={styles.tradeHeading}>
            What's Next?
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {WHATS_NEXT.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxWidth: "309px",
              }}
            >
              <div className="swatch-item__icon">{item.icon}</div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <h2
                  id="checkout-confirmation-title"
                  style={styles.tradeHeading2}
                >
                  {item.title}
                </h2>
                <p
                  id="checkout-confirmation-text"
                  style={{
                    fontFamily: "Albert Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: "140%",
                    color: "#8E8E8E",
                    letterSpacing: "0%",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "Albert Sans, 'Albert Sans', sans-serif",
  },
  tradeHeading: {
    color: "#000",
    fontFamily: "Albert Sans",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "100%",
    letterSpacing: "0",
    margin: 0,
  },
  tradeHeading2: {
    color: "#000",
    fontFamily: "Albert Sans",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0",
    margin: 0,
  },
  heading: {
    fontFamily: "Albert Sans",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0",
    margin: 0,
  },
  detailHeading: {
    fontFamily: "Albert Sans",
    fontWeight: 700,
    fontStyle: "Bold",
    fontSize: "16px",
    leadingTrim: "NONE",
    lineHeight: "140%",
    letterSpacing: "0%",
    margin: 0,
  },
};
