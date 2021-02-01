import { RouteRecordRaw } from 'vue-router'
const routerChildren = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/menu-page',
        name: 'menu-page',
        component: () => import('@/views/About.vue')
    }
] as RouteRecordRaw[]

export default routerChildren
