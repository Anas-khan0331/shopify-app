import { CheckoutPostCodeLookup } from "./CheckoutPostCodeLookup";

export const CheckoutPersonalInfo = ({
  formValues,
  setFormValue,
  errors,
  saveSession,
  clearError,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    saveSession({ name, value });
  };

  const handleAddressSelected = (address) => {
    if (address) {
      const addressFields = {
        addressLineOne: address.addressLineOne || "",
        city: address.city || "",
        postCode: address.postCode || "",
        country: "UK",
      };
      Object.entries(addressFields).forEach(([name, value]) => {
        setFormValue(name, value);
        saveSession({ name, value });
      });
    }
  };

  const handleImeiChange = (e) => {
    const value = e.target.value;
    if (!/^\d{0,15}$/.test(value)) return;
    setFormValue("imeiNumber", value);
  };

  return (
    <div id="checkout-section">
      <div id="checkout-section-label">Personal</div>
      <div id="checkout-row">
        <div id="checkout-field">
          <div
            id="checkout-input-wrapper"
            className={`${errors.fname ? "has-error" : ""} ${formValues.fname ? "has-value" : ""}`}
          >
            <input
              type="text"
              name="fname"
              id="checkout-input"
              value={formValues.fname}
              onChange={(e) => {
                setFormValue("fname", e.target.value);
                if (errors.fname) clearError("fname");
                saveSession({ name: "fname", value: e.target.value });
              }}
              onBlur={handleBlur}
              placeholder=" "
              autoComplete="given-name"
            />
            <label id="checkout-input-label" htmlFor="checkout-input">
              First Name
            </label>
          </div>
          {errors.fname && <span id="checkout-error-text">{errors.fname}</span>}
        </div>
        {/* Last Name */}
        <div id="checkout-field">
          <div
            id="checkout-input-wrapper"
            className={`${errors.lname ? "has-error" : ""} ${formValues.lname ? "has-value" : ""}`}
          >
            <input
              type="text"
              name="lname"
              id="checkout-input"
              value={formValues.lname}
              onChange={(e) => {
                setFormValue("lname", e.target.value);
                if (errors.lname) clearError("lname");
                saveSession({ name: "lname", value: e.target.value });
              }}
              onBlur={handleBlur}
              placeholder=" "
              autoComplete="family-name"
            />
            <label id="checkout-input-label" htmlFor="checkout-input">
              Last Name
            </label>
          </div>
          {errors.lname && <span id="checkout-error-text">{errors.lname}</span>}
        </div>
      </div>

      {/* Postcode Lookup */}
      <CheckoutPostCodeLookup
        formValues={formValues}
        onAddressSelected={handleAddressSelected}
        errors={errors}
      />

      {/* Phone */}
      <div id="checkout-field">
        <div
          id="checkout-input-wrapper"
          className={`${errors.phone ? "has-error" : ""} ${formValues.phone ? "has-value" : ""}`}
        >
          <span id="checkout-input-prefix">+44</span>
          <div className="checkout-input-divider">&nbsp;</div>
          <input
            type="text"
            name="phone"
            id="checkout-phone-input"
            value={formValues.phone}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9]/g, "");
              setFormValue("phone", numericValue);
              if (errors.phone) clearError("phone");
              saveSession({ name: "phone", value: numericValue });
            }}
            onBlur={handleBlur}
            placeholder=" "
            className="checkout-phone-input"
            inputMode="numeric"
            maxLength={11}
            autoComplete="tel"
          />
          <label id="checkout-input-label" htmlFor="checkout-phone-input">
            Phone Number
          </label>
        </div>
        {errors.phone && <span id="checkout-error-text">{errors.phone}</span>}
      </div>

      {/* IMEI */}
      <div id="checkout-field">
        <div
          id="checkout-input-wrapper"
          className={`${errors.imeiNumber ? "has-error" : ""} ${formValues.imeiNumber ? "has-value" : ""}`}
        >
          <input
            type="text"
            name="imeiNumber"
            id="checkout-input"
            value={formValues.imeiNumber}
            onChange={handleImeiChange}
            onBlur={handleBlur}
            placeholder=" "
            inputMode="numeric"
            maxLength={15}
          />
          <label id="checkout-input-label" htmlFor="checkout-input">
            IMEI Number
          </label>
        </div>
        {errors.imeiNumber && (
          <span id="checkout-error-text">{errors.imeiNumber}</span>
        )}
      </div>
    </div>
  );
};
