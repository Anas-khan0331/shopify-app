import PropTypes from "prop-types";

const styles = {
  wrapper: {
    display: "flex",
    gap: 16,
    textAlign: "start",
    alignItems: "center",
  },
  image: {
    objectFit: "contain",
    borderRadius: 8,
    flexShrink: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flex: 1,
  },
  title: {
    color: "#000",
    fontFamily: "Albert Sans",
    fontWeight: 700,
    fontSize: 20,
    margin: 0,
    letterSpacing: 0,
    // lineHeight: "100%",
  },
  subtitle: {
    fontFamily: "Albert Sans",
    fontWeight: 500,
    fontSize: 14,
    color: "#545454",
    margin: 0,
  },
  price: {
    color: "#000",
    fontFamily: "Albert Sans",
    fontWeight: 800,
    fontSize: 24,
    margin: 0,
    lineHeight: 1.2,
  },
};

export default function ProductHeader({
  image,
  imageAlt,
  onImageError,
  title,
  subtitle,
  price,
  pricePrefix,
  imageSize,
  contentGap,
}) {
  return (
    <div style={{ ...styles.wrapper, marginBottom: contentGap }}>
      {image && (
        <img
          src={image}
          alt={imageAlt || title || "Your Device"}
          onError={onImageError}
          style={{ ...styles.image, width: imageSize, height: imageSize }}
        />
      )}

      <div style={styles.content}>
        <h2 style={styles.title}>{title || "Your Device"}</h2>
        {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
        {price !== null && price !== undefined && (
          <p style={styles.price}>
            {pricePrefix}
            {price}
          </p>
        )}
      </div>
    </div>
  );
}

ProductHeader.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  onImageError: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pricePrefix: PropTypes.string,
  imageSize: PropTypes.number,
  contentGap: PropTypes.number,
};

ProductHeader.defaultProps = {
  image: undefined,
  imageAlt: "",
  onImageError: undefined,
  title: "",
  subtitle: "",
  price: undefined,
  pricePrefix: "£",
  imageSize: 80,
  contentGap: 40,
};
