export { default as AppFooter } from '../..\\components\\AppFooter.vue'
export { default as AppHeader } from '../..\\components\\AppHeader.vue'
export { default as BottomNavigation } from '../..\\components\\BottomNavigation.vue'
export { default as CartSidebar } from '../..\\components\\CartSidebar.vue'
export { default as CategoryPageHeader } from '../..\\components\\CategoryPageHeader.vue'
export { default as FeaturedProduct } from '../..\\components\\FeaturedProduct.vue'
export { default as FiltersSidebar } from '../..\\components\\FiltersSidebar.vue'
export { default as HeaderNavigation } from '../..\\components\\HeaderNavigation.vue'
export { default as InstagramFeed } from '../..\\components\\InstagramFeed.vue'
export { default as LocaleSelector } from '../..\\components\\LocaleSelector.vue'
export { default as LocaleSelectorBase } from '../..\\components\\LocaleSelector_base.vue'
export { default as LoginModal } from '../..\\components\\LoginModal.vue'
export { default as MobileStoreBanner } from '../..\\components\\MobileStoreBanner.vue'
export { default as NewsletterModal } from '../..\\components\\NewsletterModal.vue'
export { default as Notification } from '../..\\components\\Notification.vue'
export { default as RelatedProducts } from '../..\\components\\RelatedProducts.vue'
export { default as RelatedProducts1 } from '../..\\components\\RelatedProducts1.vue'
export { default as SearchResults } from '../..\\components\\SearchResults.vue'
export { default as Tab } from '../..\\components\\Tab.vue'
export { default as Tabs } from '../..\\components\\Tabs.vue'
export { default as TopBar } from '../..\\components\\TopBar.vue'
export { default as UserBillingAddress } from '../..\\components\\UserBillingAddress.vue'
export { default as UserShippingAddress } from '../..\\components\\UserShippingAddress.vue'
export { default as WishlistSidebar } from '../..\\components\\WishlistSidebar.vue'
export { default as CheckoutCartPreview } from '../..\\components\\Checkout\\CartPreview.vue'
export { default as CheckoutUserBillingAddresses } from '../..\\components\\Checkout\\UserBillingAddresses.vue'
export { default as CheckoutUserShippingAddresses } from '../..\\components\\Checkout\\UserShippingAddresses.vue'
export { default as CheckoutVsfPaymentProvider } from '../..\\components\\Checkout\\VsfPaymentProvider.vue'
export { default as CheckoutVsfShippingProvider } from '../..\\components\\Checkout\\VsfShippingProvider.vue'
export { default as MyAccountBillingAddressForm } from '../..\\components\\MyAccount\\BillingAddressForm.vue'
export { default as MyAccountPasswordResetForm } from '../..\\components\\MyAccount\\PasswordResetForm.vue'
export { default as MyAccountProfileUpdateForm } from '../..\\components\\MyAccount\\ProfileUpdateForm.vue'
export { default as MyAccountShippingAddressForm } from '../..\\components\\MyAccount\\ShippingAddressForm.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
