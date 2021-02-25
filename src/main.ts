import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import {initElementUi} from './plugins/ElementPlus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import {GD_KEY} from '@/utils/const'
const app = createApp(App)
app.use(store).use(router)
initElementUi(app)
app.mount('#app')

const url = `https://webapi.amap.com/maps?v=1.4.15&key=${GD_KEY}`
const jsapi = document.createElement('script')
jsapi.charset = 'utf-8'
jsapi.src = url
document.head.appendChild(jsapi)
