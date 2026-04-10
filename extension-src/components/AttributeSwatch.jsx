import { sanitizeHtml } from "../utils/sanitizeHtml";

const AttributeDescription = ({ attribute, selectedValue }) => {
  if (!attribute?.values) return null;

  const matchedAttr = attribute.values.find(
    (v) => v.name.toLowerCase() === selectedValue?.toLowerCase(),
  );
  const apiDescription = matchedAttr?.description;

  if (!apiDescription || apiDescription.replace(/<[^>]*>?/gm, "").trim() === "")
    return null;

  return (
    <div id="attribute-description-box">
      <div
        id="attribute-description-content"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(apiDescription) }}
      />
    </div>
  );
};

export function AttributeSwatch({
  attribute,
  selectedValue,
  isCondition,
  conditionSummary,
  onSelect,
}) {
  const { values, selectedValues } = attribute;
  const visibleValues = selectedValues
    ? values.filter((v) => selectedValues.includes(v.name))
    : values;

  return (
    <div id="attribute-swatch">
      <div id="swatch-header">
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <p style={styles.fontLabel}>{attribute.name}:</p>
          <span style={styles.fontValue}>
            <strong>{selectedValue}</strong>
          </span>
        </div>
        {isCondition && conditionSummary && (
          <div style={styles.conditionBadge}>
            <span style={styles.infoIcon}>i</span>
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              {conditionSummary}
            </span>
          </div>
        )}
      </div>

      <div id="swatch-group">
        {visibleValues?.map((val) => (
          <button
            key={val.name}
            className={`swatch-btn ${
              val.name.toLowerCase() === selectedValue?.toLowerCase()
                ? "active"
                : ""
            }`}
            onClick={() => onSelect(attribute.name, val.name)}
          >
            {val.name}
          </button>
        ))}
      </div>

      <AttributeDescription
        attribute={attribute}
        selectedValue={selectedValue}
      />
    </div>
  );
}
export const AttributeSwatchGrid = ({ children }) => {
  return <div style={styles.swatchGridWrapper}>{children}</div>;
};

const styles = {
  swatchGridWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "32px",
    width: "100%",
  },
  swatchHeader: {
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  fontLabel: {
    color: "#000",
    fontFamily: "Albert Sans",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "100%",
    margin: 0,
  },
  fontValue: {
    color: "#000",
    fontFamily: "Albert Sans",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "100%",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  descriptionBox: {
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid #8E8E8E",
    padding: "20px",
    backgroundColor: "#F4F4F4",
    marginTop: "12px",
    marginBottom: "0px",
    maxHeight: "350px !important",
    overflowY: "auto !important",
    overflowWrap: "break-word !important",
  },
  conditionBadge: {
    fontSize: 13,
    color: "#666",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
  },
  infoIcon: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    border: "1px solid #999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
};

export default AttributeSwatch;
