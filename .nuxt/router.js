import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6fcbf23b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2cc44803 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _39739552 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _42101d71 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _6fdeaa4a = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _ec97f13e = () => interopDefault(import('../pages/questions/_id.vue' /* webpackChunkName: "pages/questions/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _6fcbf23b,
    name: "index___en"
  }, {
    path: "/inspire",
    component: _2cc44803,
    name: "inspire___id"
  }, {
    path: "/login",
    component: _39739552,
    name: "login___id"
  }, {
    path: "/logout",
    component: _42101d71,
    name: "logout___id"
  }, {
    path: "/register",
    component: _6fdeaa4a,
    name: "register___id"
  }, {
    path: "/en/inspire",
    component: _2cc44803,
    name: "inspire___en"
  }, {
    path: "/en/login",
    component: _39739552,
    name: "login___en"
  }, {
    path: "/en/logout",
    component: _42101d71,
    name: "logout___en"
  }, {
    path: "/en/register",
    component: _6fdeaa4a,
    name: "register___en"
  }, {
    path: "/",
    component: _6fcbf23b,
    name: "index___id"
  }, {
    path: "/en/questions/:id?",
    component: _ec97f13e,
    name: "questions-id___en"
  }, {
    path: "/questions/:id?",
    component: _ec97f13e,
    name: "questions-id___id"
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
