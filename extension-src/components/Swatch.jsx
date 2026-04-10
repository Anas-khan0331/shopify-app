import classNames from "classnames";
import PropTypes from "prop-types";
import React, {
  Children,
  cloneElement,
  createElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import Show from "./Show";
import "./styles/Swatch.css";

function SwatchGroup({ children, ariaLabel, onChange, variant = "default" }) {
  const childArray = Children.toArray(children);

  const defaultSelectedIndex = useCallback(() => {
    return childArray.findIndex((child) => child?.props?.selected);
  }, [childArray]);

  const [openIndex, setOpenIndex] = useState(defaultSelectedIndex);
  const groupId = useId();

  useEffect(() => {
    setOpenIndex(defaultSelectedIndex);
  }, [defaultSelectedIndex]);

  const handleToggle = (index, child) => {
    setOpenIndex(index);
    if (onChange) {
      onChange(child.props.value ?? child.props.label, child.props);
    }
  };

  return (
    <div
      className="swatch-group"
      role="group"
      aria-label={ariaLabel || "Swatch group"}
      data-type={variant}
    >
      {childArray.map((child, index) =>
        cloneElement(child, {
          selected: openIndex === index,
          onToggle: () => handleToggle(index, child),
          groupId,
          variant,
        })
      )}
    </div>
  );
}

function SwatchItem({
  selected,
  onToggle,
  onChange,
  groupId,
  label,
  subLabel,
  icon,
  disabled,
  value,
  variant = "default",
}) {
  const iconProps = useMemo(
    () => ({
      fill: "currentColor",
      height: "100%",
      width: "100%",
    }),
    []
  );

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    }
    if (onChange) {
      onChange(value ?? label);
    }
  };

  return (
    <button
      className={classNames("swatch", { selected })}
      onClick={handleClick}
      aria-expanded={selected}
      disabled={disabled}
      aria-controls={`${groupId}-content`}
      aria-describedby={`${groupId}-content`}
      type="button"
      data-type={variant}
    >
      <Show when={Boolean(subLabel)}>
        <span className="swatch-item__sub-text">{subLabel}</span>
      </Show>

      <span className="swatch-item__body">
        {icon && (
          <span className="swatch-item__icon">
            {typeof icon === "function"
              ? createElement(icon, iconProps)
              : cloneElement(icon, iconProps)}
          </span>
        )}
        <span className="swatch-item__text">{label}</span>
      </span>
    </button>
  );
}

SwatchGroup.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["default", "radio"]),
};

SwatchItem.propTypes = {
  disabled: PropTypes.bool,
  groupId: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
  selected: PropTypes.bool,
  subLabel: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(["default", "radio"]),
};

const Swatch = {
  Group: SwatchGroup,
  Item: SwatchItem,
};

export default Swatch;
