import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "extension-src/index.jsx"),
      name: "WishlistApp",
      formats: ["iife"],
      fileName: () => "wishlist-app.js",
    },
    outDir: resolve(__dirname, "extensions/swapproo/assets"),
    emptyOutDir: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: "wishlist-app.css",
      },
    },
    minify: false,
  },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
