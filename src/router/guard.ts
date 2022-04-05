import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
} from 'vue-router'

const handlePagePermission = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  next()
}

export const setupNavigationGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    handlePagePermission(to, from, next)
  })

  router.afterEach((to) => {
    // TODO
    console.log(to.fullPath)
  })
}
