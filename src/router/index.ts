import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import RouterViews from './router-views'
import LayoutContainer from '../components/layout/layout-container.vue'
NProgress.configure({ showSpinner: false })
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: LayoutContainer,
    meta: {
      title: '首页'
    },
    children: RouterViews
  }
]

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes: routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
