import PropTypes from "prop-types";
import { SwatchGroup } from "../SwatchGroup";
import { RoyalMailIcon, DPDIcon } from "../Icons";

const SHIPPING_OPTIONS = [
  {
    value: "royal_mail",
    label: "Royal Mail",
    icon: <RoyalMailIcon width={18} height={16} />,
  },
  {
    value: "dpd",
    label: "DPD",
    icon: <DPDIcon width={18} height={16} />,
  },
];

const COVERAGE_COPY = {
  royal_mail: (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
      <RoyalMailIcon width={16} height={14} />
      <span>
        Royal Mail includes <strong style={{ color: "#000" }}>£100</strong>{" "}
        insurance coverage in case your package is lost.
      </span>
    </div>
  ),
  dpd: (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
      <DPDIcon />
      <span>
        DPD includes <strong style={{ color: "#000" }}>£1000</strong> insurance
        coverage in case your package is lost.
      </span>
    </div>
  ),
};

export const CheckoutShippingMethod = ({
  formValues,
  setFormValue,
  errors,
  saveSession,
}) => {
  const handleSelect = (value) => {
    setFormValue("shippingMethod", value);
    saveSession({ name: "shippingMethod", value });
  };

  const coverageNote = COVERAGE_COPY[formValues.shippingMethod];

  return (
    <div id="checkout-section">
      <div id="checkout-section-label">
        How would you like to send the device to us?
      </div>

      <SwatchGroup
        options={SHIPPING_OPTIONS}
        value={formValues.shippingMethod}
        onChange={handleSelect}
        error={errors.shippingMethod}
      />

      {coverageNote && <div id="checkout-shipping-note">{coverageNote}</div>}
    </div>
  );
};

CheckoutShippingMethod.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  saveSession: PropTypes.func.isRequired,
};
