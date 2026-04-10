import { useState, useCallback } from "react";

/**
 * Manages a simple view stack for the drawer.
 *
 * Usage:
 *   const nav = useDrawerNavigation("search");
 *   nav.navigate("product-detail", { product });
 *   nav.goBack();
 *   nav.reset();          // go back to initial view
 *   nav.currentView       // "product-detail"
 *   nav.params             // { product }
 *   nav.canGoBack          // true
 */
export default function useDrawerNavigation(initialView = "search") {
  const [stack, setStack] = useState([{ view: initialView, params: {} }]);

  const current = stack[stack.length - 1];

  const navigate = useCallback((view, params = {}) => {
    setStack((prev) => [...prev, { view, params }]);
  }, []);

  const goBack = useCallback(() => {
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  const reset = useCallback(() => {
    setStack([{ view: initialView, params: {} }]);
  }, [initialView]);

  return {
    currentView: current.view,
    params: current.params,
    canGoBack: stack.length > 1,
    navigate,
    goBack,
    reset,
  };
}
