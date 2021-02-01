import { RouteRecordRaw } from 'vue-router'
const routerChildren = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/table-one',
    name: 'table-one',
    component: () => import('@/views/table-one/index.vue')
  },
  {
    path: '/menu-page',
    name: 'menu-page',
    component: () => import('@/views/menu-page/index.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form/index.vue')
  }
] as RouteRecordRaw[]

export default routerChildren
