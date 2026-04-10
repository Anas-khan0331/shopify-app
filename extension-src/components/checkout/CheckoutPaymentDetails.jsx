import PropTypes from "prop-types";
import { SwatchGroup } from "../SwatchGroup";
import { BankIcon, PaypalIcon } from "../Icons";

const PAYMENT_OPTIONS = [
  {
    value: "bank",
    label: "Bank",
    icon: <BankIcon width={18} height={18} />,
  },
  {
    value: "paypal",
    label: "PayPal",
    icon: <PaypalIcon width={18} height={18} />,
  },
];

export const CheckoutPaymentDetails = ({
  formValues,
  setFormValue,
  errors,
  saveSession,
  clearError,
}) => {
  const handleBlur = (e) => {
    const { name, value } = e.target;
    saveSession({ name, value });
  };

  const handlePaymentMethod = (value) => {
    setFormValue("paymentMethod", value);
    saveSession({ name: "paymentMethod", value });
  };

  const handleAccountTitleChange = (e) => {
    setFormValue("accountTitle", e.target.value);
    if (errors.accountTitle) clearError("accountTitle");
    saveSession({ name: "accountTitle", value: e.target.value });
  };

  const handleSortCodeChange = (e) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 6);
    if (val.length > 4)
      val = `${val.slice(0, 2)}-${val.slice(2, 4)}-${val.slice(4)}`;
    else if (val.length > 2) val = `${val.slice(0, 2)}-${val.slice(2)}`;
    setFormValue("sortCode", val);
  };

  const handleAccountNumberChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setFormValue("accountNumber", numericValue);
    if (errors.accountNumber) clearError("accountNumber");
    saveSession({ name: "accountNumber", value: numericValue });
  };

  const handlePaypalEmailChange = (e) => {
    setFormValue("paypalEmail", e.target.value);
    if (errors.paypalEmail) clearError("paypalEmail");
    saveSession({ name: "paypalEmail", value: e.target.value });
  };

  const isBank = formValues.paymentMethod === "bank";
  const isPaypal = formValues.paymentMethod === "paypal";

  return (
    <div id="checkout-section">
      <div id="checkout-section-label">Payment Details</div>

      <SwatchGroup
        options={PAYMENT_OPTIONS}
        value={formValues.paymentMethod}
        onChange={handlePaymentMethod}
        error={errors.paymentMethod}
      />

      {/* Bank fields */}
      {isBank && (
        <div id="checkout-bank-fields">
          <div id="checkout-field">
            <div
              id="checkout-input-wrapper"
              className={`${errors.accountTitle ? "has-error" : ""} ${formValues.accountTitle ? "has-value" : ""}`}
            >
              <input
                type="text"
                name="accountTitle"
                id="checkout-input"
                value={formValues.accountTitle}
                onChange={handleAccountTitleChange}
                onBlur={handleBlur}
                placeholder=" "
                autoComplete="name"
              />
              <label id="checkout-input-label" htmlFor="checkout-input">
                Account Name
              </label>
            </div>
            <p>e.g Elon Musk</p>
            {errors.accountTitle && (
              <span id="checkout-error-text">{errors.accountTitle}</span>
            )}
          </div>

          <div id="checkout-bank-full-width">
            <div id="checkout-field">
              <div
                id="checkout-input-wrapper"
                className={`${errors.sortCode ? "has-error" : ""} ${formValues.sortCode ? "has-value" : ""}`}
              >
                <input
                  type="text"
                  name="sortCode"
                  id="checkout-input"
                  value={formValues.sortCode}
                  onChange={handleSortCodeChange}
                  onBlur={handleBlur}
                  placeholder=" "
                  inputMode="numeric"
                  maxLength={8}
                />
                <label id="checkout-input-label" htmlFor="checkout-input">
                  Sort Code
                </label>
              </div>
              <p>Example: 560036</p>
              {errors.sortCode && (
                <span id="checkout-error-text">{errors.sortCode}</span>
              )}
            </div>
            <div id="checkout-field">
              <div
                id="checkout-input-wrapper"
                className={`${errors.accountNumber ? "has-error" : ""} ${formValues.accountNumber ? "has-value" : ""}`}
              >
                <input
                  type="text"
                  name="accountNumber"
                  id="checkout-input"
                  value={formValues.accountNumber}
                  onChange={handleAccountNumberChange}
                  onBlur={handleBlur}
                  placeholder=" "
                  inputMode="numeric"
                  maxLength={8}
                />
                <label id="checkout-input-label" htmlFor="checkout-input">
                  Account Number
                </label>
              </div>
              <p>Example: 12345678</p>
              {errors.accountNumber && (
                <span id="checkout-error-text">{errors.accountNumber}</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PayPal fields */}
      {isPaypal && (
        <div id="checkout-field">
          <div
            id="checkout-input-wrapper"
            className={`${errors.paypalEmail ? "has-error" : ""} ${formValues.paypalEmail ? "has-value" : ""}`}
          >
            <input
              type="email"
              name="paypalEmail"
              id="checkout-input"
              value={formValues.paypalEmail}
              onChange={handlePaypalEmailChange}
              onBlur={handleBlur}
              placeholder=" "
              autoComplete="email"
            />
            <label id="checkout-input-label" htmlFor="checkout-input">
              PayPal Email
            </label>
          </div>
          {errors.paypalEmail && (
            <span id="checkout-error-text">{errors.paypalEmail}</span>
          )}
          <p id="checkout-paypal-note">
            You will receive a PayPal payment within 24 hours after we receive
            and inspect your device.
          </p>
        </div>
      )}
    </div>
  );
};

CheckoutPaymentDetails.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  saveSession: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};
