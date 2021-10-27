import { App } from 'vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
export function initElementUi(app: App): any {
  app.use(ElementPlus, { size: 'mini', locale })
}
