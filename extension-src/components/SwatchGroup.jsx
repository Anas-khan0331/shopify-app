import PropTypes from "prop-types";

export function SwatchGroup({ options, value, onChange, error }) {
  return (
    <>
      <div className="swatch-group">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`swatch ${value === opt.value ? "selected" : ""}`}
            onClick={() => onChange(opt.value)}
            disabled={opt.disabled}
          >
            <div className="swatch-item__body">
              {opt.icon && (
                <span className="swatch-item__icon">{opt.icon}</span>
              )}
              <span className="swatch-item__text">{opt.label}</span>
            </div>
            {opt.description && (
              <span className="swatch-item__sub-text">{opt.description}</span>
            )}
          </button>
        ))}
      </div>
      {error && <span className="checkout-error-text">{error}</span>}
    </>
  );
}

SwatchGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      description: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
