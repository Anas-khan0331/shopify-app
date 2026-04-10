import { useCallback } from "react";
import CheckoutForm from "../components/CheckoutForm";

export default function CheckoutPage({ navigation }) {
  const { offerId, sessionToken, product, variant } = navigation.params;

  const handleSuccess = useCallback(
    (data) => {
      navigation.navigate("confirmation", {
        order: data?.data,
        product,
        variant,
      });
    },
    [navigation, product, variant],
  );

  return (
    <CheckoutForm
      offerId={offerId}
      sessionToken={sessionToken}
      product={product}
      variant={variant}
      onSuccess={handleSuccess}
    />
  );
}
