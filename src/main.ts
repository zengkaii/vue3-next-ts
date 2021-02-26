import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import {initElementUi} from './plugins/ElementPlus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import {GD_KEY} from '@/utils/const'
const app = createApp(App)

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
VueMarkdownEditor.use(vuepressTheme)
app.use(VueMarkdownEditor)

app.use(store).use(router)
initElementUi(app)
app.mount('#app')

const url = `https://webapi.amap.com/maps?v=1.4.15&key=${GD_KEY}`
const jsapi = document.createElement('script')
jsapi.src = url
document.head.appendChild(jsapi)
