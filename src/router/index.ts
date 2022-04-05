import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupNavigationGuards } from './guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/hi/:name',
    component: () => import('../components/HelloWorld.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const setupRouter = (app: App) => {
  app.use(router)
  setupNavigationGuards(router)
}
