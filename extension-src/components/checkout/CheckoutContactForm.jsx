import PropTypes from "prop-types";

export default function CheckoutContactForm({
  formValues,
  setFormValue,
  saveSession,
  errors,
  clearError,
  handleBlur,
}) {
  return (
    <div id="checkout-section">
      <div id="checkout-section-label">Contact</div>
      <div id="checkout-field">
        <div
          id="checkout-input-wrapper"
          className={`${errors.email ? "has-error" : ""} ${formValues.email ? "has-value" : ""}`}
        >
          <input
            type="email"
            name="email"
            id="checkout-input"
            value={formValues.email}
            onChange={(e) => {
              setFormValue("email", e.target.value);
              if (errors.email) clearError("email");
              saveSession({ name: "email", value: e.target.value });
            }}
            onBlur={handleBlur}
            placeholder=" "
            autoComplete="email"
          />
          <label id="checkout-input-label" htmlFor="checkout-input">
            Email
          </label>
        </div>
        {errors.email && <span id="checkout-error-text">{errors.email}</span>}
      </div>
    </div>
  );
}

CheckoutContactForm.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValue: PropTypes.func.isRequired,
  saveSession: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
