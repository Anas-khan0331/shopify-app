import { useCallback, useState, useEffect } from "react";
import { BackArrowIcon, CloseIcon } from "./Icons";

export default function Drawer({
  title,
  canGoBack,
  onBack,
  onClose,
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay adding the class so the CSS transition triggers on mount
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  return (
    <div
      id="wishlist-modal-wrapper"
      className={`${isVisible ? "drawer-open" : "drawer-closing"}`}
      onClick={handleOverlayClick}
    >
      <div id="wishlist-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* ── Header ── */}
        <div id="wishlist-modal-header">
          {canGoBack ? (
            <button
              onClick={onBack}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: 0,
                fontWeight: 500,
                fontFamily: "Albert Sans",
                fontStyle: "Medium",
                fontSize: "16px",
                lineHeight: "100%",
              }}
            >
              <BackArrowIcon />
              <span>Back</span>
            </button>
          ) : (
            <h3>{title}</h3>
          )}

          <button
            id="wishlist-close"
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Close drawer"
          >
            <CloseIcon />
          </button>
        </div>
        <div id="wishlist-modal-body">{children}</div>
      </div>
    </div>
  );
}
