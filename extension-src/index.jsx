import { createRoot } from "react-dom/client";
import App from "./App";
import "./components/styles/App.css";

function mount() {
  const container = document.getElementById("wishlist-root");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
}

// Mount when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
