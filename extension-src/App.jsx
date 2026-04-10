import { useEffect, useMemo, useState } from "react";
import Drawer from "./components/Drawer";
import useDrawerNavigation from "./hooks/useDrawerNavigation";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchPage from "./pages/SearchPage";

const PAGES = {
  search: { component: SearchPage, title: "Sell Your Device" },
  "product-detail": { component: ProductDetailPage, title: "" },
  checkout: { component: CheckoutPage, title: "Checkout" },
  confirmation: { component: ConfirmationPage, title: "Trade Confirmed" },
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useDrawerNavigation("search");
  const [config, setConfig] = useState(() => {
    const root = document.getElementById("wishlist-root");
    if (!root) return { label: "Trade In", layout: {}, trigger: {} };
    let layout = {};
    let trigger = {};
    try {
      layout = root.dataset.layoutStyles
        ? JSON.parse(root.dataset.layoutStyles)
        : {};
      trigger = root.dataset.triggerStyles
        ? JSON.parse(root.dataset.triggerStyles)
        : {};
    } catch (e) {
      console.error("JSON Parse Error", e);
    }

    return {
      label: root.dataset.label || "Trade In Your Device",
      layout,
      trigger,
    };
  });

  // --- NEW: GLOBAL TRIGGER LOGIC ---
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Check if the clicked element (or its parent) has the class 'swapproo-trigger'
      const target = event.target.closest(".swapproo-trigger");

      if (target) {
        // If it's a link (<a>), prevent it from navigating to a new page
        event.preventDefault();
        setIsOpen(true);
        document.body.style.overflow = "hidden"; // Prevent background scrolling
      }
    };

    // Attach listener to the whole document
    document.addEventListener("click", handleGlobalClick);

    // Cleanup on unmount
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // Update config when Shopify Theme Editor changes settings
  useEffect(() => {
    const root = document.getElementById("wishlist-root");
    if (root) {
      const observer = new MutationObserver(() => {
        try {
          setConfig({
            label: root.dataset.label || "Trade In Your Device",
            layout: JSON.parse(root.dataset.layoutStyles || "{}"),
            trigger: JSON.parse(root.dataset.triggerStyles || "{}"),
          });
        } catch (e) {
          console.error("Mutation Sync Error", e);
        }
      });
      observer.observe(root, { attributes: true });
      return () => observer.disconnect();
    }
  }, []);

  const cssVariables = useMemo(() => {
    const { layout, trigger } = config;
    const underlineValue = trigger.showUnderline ? "underline" : "none";

    return {
      "--display": layout.display || "inline-block",
      "--justify": layout.justifyContent || "flex-start",
      "--mt": `${layout.marginTop ?? 10}px`,
      "--mb": `${layout.marginBottom ?? 10}px`,
      "--btn-bg": trigger.bgColor || "#007ace",
      "--btn-color": trigger.color || "#ffffff",
      "--btn-border-width": `${trigger.borderWidth ?? 1}px`,
      "--btn-border-color": trigger.borderColor || "#005a9e",
      "--btn-radius": `${trigger.borderRadius ?? 8}px`,
      "--btn-size": `${trigger.fontSize ?? 16}px`,
      "--btn-pv": `${trigger.paddingV ?? 12}px`,
      "--btn-ph": `${trigger.paddingH ?? 24}px`,
      "--btn-width": trigger.widthStyle === "block" ? "100%" : "auto",
      "--text-decoration": underlineValue,
    };
  }, [config]);

  const page = PAGES[navigation.currentView] || PAGES.search;
  const PageComponent = page.component;

  return (
    <div className="wishlist-app" style={cssVariables}>
      {/* This button only shows where the App Embed 'block' is specifically placed.
          The 'swapproo-trigger' class is added here so the global listener also catches it.
      */}
      <div className="trade-in-parent-container">
        <button
          type="button"
          className="wishlist-btn swapproo-trigger"
          style={{
            width: "var(--btn-width)",
            textDecoration: "var(--text-decoration)",
          }}
        >
          {config.label}
        </button>
      </div>

      {isOpen && (
        <Drawer
          title={page.title || "Sell Your Device"}
          canGoBack={navigation.canGoBack}
          onBack={navigation.goBack}
          onClose={() => {
            setIsOpen(false);
            document.body.style.overflow = "auto";
          }}
        >
          <PageComponent
            navigation={{
              ...navigation,
              navigate: navigation.navigate,
              goBack: navigation.goBack,
              reset: navigation.reset,
            }}
          />
        </Drawer>
      )}
    </div>
  );
}
