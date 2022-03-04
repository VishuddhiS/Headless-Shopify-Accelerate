import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _984b87fe = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _e6102adc = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _5fba1830 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _3363b232 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _f6050e1c = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _2330ec72 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _0cbeb819 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _6a81d24c = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _413dd1f1 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _4025b808 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _2636a2a8 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _0fc46e4f = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _288ecffa = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _10d1a7f3 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _6f83eb06 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _f3a444c8 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _c7777838 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _438d48a9 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _ec0cbb3c = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _21183c60 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _36f6c342 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _653ec3c3 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _c7c0bf32 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _0dda168b = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _084069d8 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _1e4363b4 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _71b4c33c = () => interopDefault(import('..\\pages\\TermsAndConditions.vue' /* webpackChunkName: "pages/TermsAndConditions" */))
const _6f55cf2f = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _711f5fbd = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _db4870c0 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _984b87fe,
    name: "home___ar"
  }, {
    path: "/Category",
    component: _e6102adc,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _5fba1830,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _3363b232,
      name: "billing___en"
    }, {
      path: "payment",
      component: _f6050e1c,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _2330ec72,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _0cbeb819,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _6a81d24c,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _413dd1f1,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _4025b808,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _2636a2a8,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _0fc46e4f,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _288ecffa,
    name: "ContactUs___en"
  }, {
    path: "/Home",
    component: _10d1a7f3,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _6f83eb06,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _f3a444c8,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _c7777838,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _438d48a9,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _ec0cbb3c,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _21183c60,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _36f6c342,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _653ec3c3,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _c7c0bf32,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _0dda168b,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _084069d8,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _1e4363b4,
    name: "ResetPassword___en"
  }, {
    path: "/TermsAndConditions",
    component: _71b4c33c,
    name: "TermsAndConditions___en"
  }, {
    path: "/ar/Category",
    component: _e6102adc,
    name: "Category___ar"
  }, {
    path: "/ar/checkout",
    component: _5fba1830,
    name: "checkout___ar",
    children: [{
      path: "billing",
      component: _3363b232,
      name: "billing___ar"
    }, {
      path: "payment",
      component: _f6050e1c,
      name: "payment___ar"
    }, {
      path: "shipping",
      component: _2330ec72,
      name: "shipping___ar"
    }, {
      path: "thank-you",
      component: _0cbeb819,
      name: "thank-you___ar"
    }]
  }, {
    path: "/ar/Checkout",
    component: _6a81d24c,
    name: "Checkout___ar",
    children: [{
      path: "Billing",
      component: _413dd1f1,
      name: "Checkout-Billing___ar"
    }, {
      path: "Payment",
      component: _4025b808,
      name: "Checkout-Payment___ar"
    }, {
      path: "Shipping",
      component: _2636a2a8,
      name: "Checkout-Shipping___ar"
    }, {
      path: "ThankYou",
      component: _0fc46e4f,
      name: "Checkout-ThankYou___ar"
    }]
  }, {
    path: "/ar/ContactUs",
    component: _288ecffa,
    name: "ContactUs___ar"
  }, {
    path: "/ar/Home",
    component: _10d1a7f3,
    name: "Home___ar"
  }, {
    path: "/ar/MyAccount",
    component: _6f83eb06,
    name: "MyAccount___ar",
    children: [{
      path: "AdressBook",
      component: _f3a444c8,
      name: "MyAccount-AdressBook___ar"
    }, {
      path: "BillingDetails",
      component: _c7777838,
      name: "MyAccount-BillingDetails___ar"
    }, {
      path: "LoyaltyCard",
      component: _438d48a9,
      name: "MyAccount-LoyaltyCard___ar"
    }, {
      path: "MyNewsletter",
      component: _ec0cbb3c,
      name: "MyAccount-MyNewsletter___ar"
    }, {
      path: "MyProfile",
      component: _21183c60,
      name: "MyAccount-MyProfile___ar"
    }, {
      path: "MyReviews",
      component: _36f6c342,
      name: "MyAccount-MyReviews___ar"
    }, {
      path: "OrderHistory",
      component: _653ec3c3,
      name: "MyAccount-OrderHistory___ar"
    }, {
      path: "ShippingDetails",
      component: _c7c0bf32,
      name: "MyAccount-ShippingDetails___ar"
    }]
  }, {
    path: "/ar/Product",
    component: _0dda168b,
    name: "Product___ar"
  }, {
    path: "/ar/reset-password",
    component: _084069d8,
    name: "reset-password___ar"
  }, {
    path: "/ar/ResetPassword",
    component: _1e4363b4,
    name: "ResetPassword___ar"
  }, {
    path: "/ar/TermsAndConditions",
    component: _71b4c33c,
    name: "TermsAndConditions___ar"
  }, {
    path: "/ar/my-account/:pageName?",
    component: _6f55cf2f,
    name: "my-account___ar"
  }, {
    path: "/ar/p/:id/:slug",
    component: _711f5fbd,
    name: "product___ar"
  }, {
    path: "/ar/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _db4870c0,
    name: "category___ar"
  }, {
    path: "/my-account/:pageName?",
    component: _6f55cf2f,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _711f5fbd,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _db4870c0,
    name: "category___en"
  }, {
    path: "/",
    component: _984b87fe,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
