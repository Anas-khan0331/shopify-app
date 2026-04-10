export function prepareCreateOfferPayload(device) {
  return {
    productId: device._id,
    variantAssessment: device?.variant?.attributes?.reduce((acc, attr) => {
      acc[attr.name] = attr.value;
      return acc;
    }, {}),
  };
}
