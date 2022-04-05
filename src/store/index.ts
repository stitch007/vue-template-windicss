import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const setupPinia = (app: App) => {
  const pinia = createPinia()
  pinia.use(({ store }) => {
    store.init && store.init()
  })
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}

export * from './modules'
