import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { initElementUi } from './plugins/ElementPlus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import { Lazyload } from '@vant/lazyload'
import directives from './directives/index'
import appendScript from './utils/appendScript'
import MyMessage from './package/message/index'
VueMarkdownEditor.use(vuepressTheme)

const app = createApp(App)
app.use(store).use(router)
app.use(VueMarkdownEditor)
app.use(Lazyload)
app.use(MyMessage)
initElementUi(app)
app.mount('#app')
directives(app)

appendScript()

