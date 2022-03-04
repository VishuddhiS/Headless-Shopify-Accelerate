import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_672b218a from 'nuxt_plugin_plugin_672b218a' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_26f8d594 from 'nuxt_plugin_plugin_26f8d594' // Source: .\\composition-api\\plugin.mjs (mode: 'all')
import nuxt_plugin_vuescrollto_a880272a from 'nuxt_plugin_vuescrollto_a880272a' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_4c4670f4 from 'nuxt_plugin_cookieuniversalnuxt_4c4670f4' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_11ec4250 from 'nuxt_plugin_pluginutils_11ec4250' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_2b7889a4 from 'nuxt_plugin_pluginseo_2b7889a4' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_043508ca from 'nuxt_plugin_pluginrouting_043508ca' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_01b0e498 from 'nuxt_plugin_pluginmain_01b0e498' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtpluginb4e222e4_07412a48 from 'nuxt_plugin_nuxtpluginb4e222e4_07412a48' // Source: .\\nuxt.plugin.b4e222e4.js (mode: 'all')
import nuxt_plugin_pluginsi18ncookiesd8c7d450_56360d7e from 'nuxt_plugin_pluginsi18ncookiesd8c7d450_56360d7e' // Source: .\\plugins.i18n-cookies.d8c7d450.js (mode: 'all')
import nuxt_plugin_pluginse2etestingc2f4f94a_7373263c from 'nuxt_plugin_pluginse2etestingc2f4f94a_7373263c' // Source: .\\plugins.e2e-testing.c2f4f94a.js (mode: 'all')
import nuxt_plugin_pluginsloggera3f0ee30_7148e8eb from 'nuxt_plugin_pluginsloggera3f0ee30_7148e8eb' // Source: .\\plugins.logger.a3f0ee30.js (mode: 'all')
import nuxt_plugin_pluginsssr3ce31878_1ee5c5ec from 'nuxt_plugin_pluginsssr3ce31878_1ee5c5ec' // Source: .\\plugins.ssr.3ce31878.js (mode: 'all')
import nuxt_plugin_pluginscontext03a15387_13dbffdd from 'nuxt_plugin_pluginscontext03a15387_13dbffdd' // Source: .\\plugins.context.03a15387.js (mode: 'all')
import nuxt_plugin_deviceplugin_5dd77d69 from 'nuxt_plugin_deviceplugin_5dd77d69' // Source: .\\device.plugin.js (mode: 'all')
import nuxt_plugin_workbox_1af1997a from 'nuxt_plugin_workbox_1af1997a' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_945f180c from 'nuxt_plugin_metaplugin_945f180c' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_8b0fcd24 from 'nuxt_plugin_iconplugin_8b0fcd24' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_nuxtplugin0aba3c0c_9854f612 from 'nuxt_plugin_nuxtplugin0aba3c0c_9854f612' // Source: .\\nuxt.plugin.0aba3c0c.js (mode: 'all')
import nuxt_plugin_scrollToTopclient_6f28b416 from 'nuxt_plugin_scrollToTopclient_6f28b416' // Source: ..\\plugins\\scrollToTop.client.js (mode: 'client')
import nuxt_plugin_cms_71ca19f8 from 'nuxt_plugin_cms_71ca19f8' // Source: ..\\plugins\\cms.js (mode: 'all')
import nuxt_plugin_meta_1cc97470 from 'nuxt_plugin_meta_1cc97470' // Source: .\\composition-api\\meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Accelerate | Krish","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"theme-color","content":"#5ece7b"},{"hid":"description","name":"description","content":"Vue Storefront 2 template for Shopify."},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_672b218a === 'function') {
    await nuxt_plugin_plugin_672b218a(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_26f8d594 === 'function') {
    await nuxt_plugin_plugin_26f8d594(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_a880272a === 'function') {
    await nuxt_plugin_vuescrollto_a880272a(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_4c4670f4 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_4c4670f4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_11ec4250 === 'function') {
    await nuxt_plugin_pluginutils_11ec4250(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_2b7889a4 === 'function') {
    await nuxt_plugin_pluginseo_2b7889a4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_043508ca === 'function') {
    await nuxt_plugin_pluginrouting_043508ca(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_01b0e498 === 'function') {
    await nuxt_plugin_pluginmain_01b0e498(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtpluginb4e222e4_07412a48 === 'function') {
    await nuxt_plugin_nuxtpluginb4e222e4_07412a48(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsi18ncookiesd8c7d450_56360d7e === 'function') {
    await nuxt_plugin_pluginsi18ncookiesd8c7d450_56360d7e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etestingc2f4f94a_7373263c === 'function') {
    await nuxt_plugin_pluginse2etestingc2f4f94a_7373263c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsloggera3f0ee30_7148e8eb === 'function') {
    await nuxt_plugin_pluginsloggera3f0ee30_7148e8eb(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssr3ce31878_1ee5c5ec === 'function') {
    await nuxt_plugin_pluginsssr3ce31878_1ee5c5ec(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontext03a15387_13dbffdd === 'function') {
    await nuxt_plugin_pluginscontext03a15387_13dbffdd(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_5dd77d69 === 'function') {
    await nuxt_plugin_deviceplugin_5dd77d69(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_1af1997a === 'function') {
    await nuxt_plugin_workbox_1af1997a(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_945f180c === 'function') {
    await nuxt_plugin_metaplugin_945f180c(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_8b0fcd24 === 'function') {
    await nuxt_plugin_iconplugin_8b0fcd24(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin0aba3c0c_9854f612 === 'function') {
    await nuxt_plugin_nuxtplugin0aba3c0c_9854f612(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_scrollToTopclient_6f28b416 === 'function') {
    await nuxt_plugin_scrollToTopclient_6f28b416(app.context, inject)
  }

  if (typeof nuxt_plugin_cms_71ca19f8 === 'function') {
    await nuxt_plugin_cms_71ca19f8(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_1cc97470 === 'function') {
    await nuxt_plugin_meta_1cc97470(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
