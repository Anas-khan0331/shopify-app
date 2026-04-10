import React, { useCallback } from "react";
import ProductDetails from "../components/ProductDetails";

/**
 * Product detail page — shows swatches, price, sell button.
 *
 * Props:
 *   navigation  – { navigate, goBack, reset, params, ... }
 *   navigation.params.product – the selected product object
 */
export default function ProductDetailPage({ navigation }) {
  const handleSellDevice = useCallback(
    ({ offerId, sessionToken, product, variant, detailData }) => {
      navigation.navigate("checkout", {
        offerId,
        sessionToken,
        product,
        variant,
        detailData,
      });
    },
    [navigation],
  );

  return (
    <ProductDetails
      product={navigation.params.product}
      onBack={navigation.goBack}
      onSellDevice={handleSellDevice}
    />
  );
}
