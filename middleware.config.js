module.exports = {
  integrations: {
    shopify: {
      location: "@vue-storefront/shopify-api/server",
      configuration: {
        api: {
          domain: process.env.SHOPIFY_DOMAIN,
          storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
        },
        currency: "USD",
        country: "US",
      },
    },
    cntf: {
      location: "@vsf-enterprise/contentful/server",
      configuration: {
        token: "5Ge-sWeddi5gI6OlhEZf7e1ZJ35AJl8koZtdeYZob6g",
        space: "r8nt9txoerj4",
      },
    },
  },
};
