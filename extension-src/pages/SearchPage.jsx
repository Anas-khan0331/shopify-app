import React from "react";
import ProductSearch from "../components/ProductSearch";

/**
 * Search page — first screen in the drawer.
 *
 * Props:
 *   navigation  – { navigate, goBack, reset, ... } from useDrawerNavigation
 */
export default function SearchPage({ navigation }) {
  const handleProductSelect = (product) => {
    navigation.navigate("product-detail", { product });
  };

  return <ProductSearch onProductSelect={handleProductSelect} autoFocus />;
}
