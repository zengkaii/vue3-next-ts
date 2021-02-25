import { createStore } from "vuex";
import Types from './types'
import { MenuList } from '@/model/Store.ts'
const store = createStore({
  state: {
    isLogin: false,
    menuList: [
      {
        id: 1,
        label: '菜单',
        type: 'bar',
        name: 'manage',
        children: [
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
            path: '/gdMap',
            type: 'menu',
            name: 'gdMap'
          },
        ]
      },
    ],
    dynamicTags: [] as MenuList[]
  },
  mutations: {
    // 添加tags
    [Types.SET_DYNAMIC_TAGS](state, dynamicTags) {
      state.dynamicTags.push(dynamicTags)
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
    isLogin: state => state.isLogin,
    dynamicTags: state => state.dynamicTags,
    menuList: state => state.menuList
  },
  actions: {
    [Types.SET_DYNAMIC_TAGS]({ commit }, dynamicTags) {
    console.log(Types.SET_DYNAMIC_TAGS)
    commit(Types.SET_DYNAMIC_TAGS, dynamicTags)
    },
    [Types.REMOVE_DYNAMIC_TAGS]({ commit }, dynamicTags) {
    console.log(Types.REMOVE_DYNAMIC_TAGS)
    commit(Types.REMOVE_DYNAMIC_TAGS, dynamicTags)
    },
    [Types.LOGIN]() {
    console.log(Types.LOGIN)
    this.commit(Types.LOGIN, true)
    },
  }
})

// export function setupStore (app: App) {
//   app.use(store)
// }

export default store
