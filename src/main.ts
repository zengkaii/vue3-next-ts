import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import {initElementUi} from './plugins/ElementPlus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'

const app = createApp(App)
app.use(store).use(router)
initElementUi(app)
app.mount('#app')
