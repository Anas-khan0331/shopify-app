/* ── Validation helpers ── */
export const VALIDATORS = {
  email: (v) => {
    if (!v) return "Please Enter Your Email!";
    if (
      !/^([A-Za-z\d._%+-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,8})(\.[A-Za-z]{2,8})?$/.test(
        v,
      )
    )
      return "Please Enter Valid Email";
    if (v.length > 254) return "Email cannot exceed 254 characters";
    return "";
  },
  fname: (v) => {
    if (!v) return "First Name is Required!";
    if (!/^[a-zA-Z\s]+$/.test(v)) return "First Name must contain only letters";
    if (v.length > 50) return "First Name cannot exceed 50 characters";
    return "";
  },
  lname: (v) => {
    if (!v) return "Last Name is Required!";
    if (!/^[a-zA-Z\s]+$/.test(v)) return "Last Name must contain only letters";
    if (v.length > 50) return "Last Name cannot exceed 50 characters";
    return "";
  },
  phone: (v) => {
    if (!v) return "Phone number is required";
    if (!/^\d{10,11}$/.test(v))
      return "Enter a 10 or 11 digit phone number. Without spaces";
    return "";
  },
  addressLineOne: (v) => {
    if (!v) return "Address is Required!";
    return "";
  },
  paymentMethod: (v) => {
    if (!v) return "Payment Method is Required!";
    return "";
  },
  shippingMethod: (v) => {
    if (!v) return "Shipping Method is Required!";
    return "";
  },
  accountTitle: (v, form) => {
    if (form.paymentMethod !== "bank") return "";
    if (!v) return "Account Title is Required!";
    if (!/^[a-zA-Z\s]+$/.test(v))
      return "Account Title must contain only letters and spaces";
    if (v.length > 50) return "Account Title cannot exceed 50 characters";
    return "";
  },
  sortCode: (v, form) => {
    if (form.paymentMethod !== "bank") return "";
    if (!v) return "Sort Code is Required!";
    if (!/^\d{6}$/.test(v.replace(/-/g, "")))
      return "Sort Code must be exactly 6 digits";
    return "";
  },
  accountNumber: (v, form) => {
    if (form.paymentMethod !== "bank") return "";
    if (!v) return "Account Number is Required!";
    if (!/^\d{8}$/.test(v)) return "Account Number must be exactly 8 digits";
    return "";
  },
  paypalEmail: (v, form) => {
    if (form.paymentMethod !== "paypal") return "";
    if (!v) return "Paypal Email is Required!";
    return VALIDATORS.email(v);
  },
  imeiNumber: (v) => {
    if (!v) return ""; // IMEI is optional
    if (!/^\d{15}$/.test(v)) return "IMEI must be exactly 15 digits";
    return "";
  },
};

export const validateAll = (formValues) => {
  const errors = {};
  Object.keys(VALIDATORS).forEach((field) => {
    const error = VALIDATORS[field](formValues[field], formValues);
    if (error) errors[field] = error;
  });
  return errors;
};
