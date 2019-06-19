export const GetLicenseQuery = `
  query GetLicense($checkoutId: String!) {
    payment(checkoutId: $checkoutId) {
      license {
        id
      }
    }
  }
`;
