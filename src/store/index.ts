import { createStore } from 'vuex'
import Types from './types'
import { MenuList } from '@/model/Store'
const store = createStore({
  state: {
    isLogin: false,
    currrentMenu: {} as MenuList,
    menuList: [
      {
        id: 1,
        label: '菜单',
        type: 'bar',
        name: 'manage',
        children: [
          {
            parentId: 1,
            id: 2,
            label: '首页',
            path: '/home',
            type: 'menu',
            name: 'home'
          },
          {
            parentId: 1,
            id: 4,
            label: '菜单配置',
            path: '/menu-page',
            type: 'menu',
            name: 'menu-page'
          },
          {
            parentId: 1,
            id: 10,
            label: '表单',
            path: '/form',
            type: 'menu',
            name: 'form'
          },
          {
            parentId: 1,
            id: 11,
            label: '表格一',
            path: '/table-one',
            type: 'menu',
            name: 'table-one'
          },
          {
            parentId: 1,
            id: 12,
            label: '弹窗',
            path: '/dialog',
            type: 'menu',
            name: 'dialog'
          },
          {
            parentId: 1,
            id: 13,
            label: '图表',
            path: '/echarts',
            type: 'menu',
            name: 'echarts'
          },
          {
            parentId: 1,
            id: 14,
            label: '地图',
            path: '/gd-map',
            type: 'menu',
            name: 'gd-map'
          },
          {
            parentId: 1,
            id: 15,
            label: 'markdown',
            path: '/markdown',
            type: 'menu',
            name: 'markdown'
          },
          {
            parentId: 1,
            id: 16,
            label: '抽屉',
            path: '/drawer',
            type: 'menu',
            name: 'drawer'
          },
          {
            parentId: 1,
            id: 17,
            label: '抽奖',
            path: '/draw-lottery',
            type: 'menu',
            name: 'draw-lottery'
          },
          {
            parentId: 1,
            id: 18,
            label: 'svg',
            path: '/svg',
            type: 'menu',
            name: 'svg'
          },
          {
            parentId: 1,
            id: 19,
            label: '滚动',
            path: '/scroll',
            type: 'menu',
            name: 'scroll'
          },
          {
            parentId: 1,
            id: 20,
            label: '菜单',
            path: '/menu',
            type: 'menu',
            name: 'menu'
          },
          {
            parentId: 1,
            id: 21,
            label: 'teleport',
            path: '/teleport',
            type: 'menu',
            name: 'teleport'
          },
          {
            parentId: 1,
            id: 22,
            label: 'directive',
            path: '/directive',
            type: 'menu',
            name: 'directive'
          },
          {
            parentId: 1,
            id: 23,
            label: 'functional',
            path: '/functional',
            type: 'menu',
            name: 'functional'
          },
          {
            parentId: 1,
            id: 24,
            label: 'slotsDemo',
            path: '/slots-demo',
            type: 'menu',
            name: 'slots-demo'
          },
          {
            parentId: 1,
            id: 25,
            label: '水印',
            path: '/water-mark',
            type: 'menu',
            name: 'water-mark'
          }
        ]
      }
    ],
    dynamicTags: [] as MenuList[]
  },
  mutations: {
    // 添加tags
    [Types.SET_DYNAMIC_TAGS](state, dynamicTags) {
      state.dynamicTags.push(dynamicTags)
    },
    [Types.SET_CURRENT_MENU](state, currrentMenu) {
      state.currrentMenu = currrentMenu
    },
    // 移除tags
    [Types.REMOVE_DYNAMIC_TAGS](state, index) {
      state.dynamicTags.splice(index, 1)
    },
    // 登录
    [Types.LOGIN](state, isLogin) {
      state.isLogin = isLogin
    }
  },
  getters: {
    isLogin: (state) => state.isLogin,
    currrentMenu: (state) => state.currrentMenu,
    dynamicTags: (state) => state.dynamicTags,
    menuList: (state) => state.menuList
  },
  actions: {
    [Types.SET_CURRENT_MENU]({ commit }, currrentMenu) {
      commit(Types.SET_CURRENT_MENU, currrentMenu)
    },
    [Types.SET_DYNAMIC_TAGS]({ commit }, dynamicTags) {
      commit(Types.SET_DYNAMIC_TAGS, dynamicTags)
    },
    [Types.REMOVE_DYNAMIC_TAGS]({ commit }, dynamicTags) {
      commit(Types.REMOVE_DYNAMIC_TAGS, dynamicTags)
    },
    [Types.LOGIN]() {
      console.log(Types.LOGIN)
      this.commit(Types.LOGIN, true)
    }
  }
})

// export function setupStore (app: App) {
//   app.use(store)
// }

export default store
