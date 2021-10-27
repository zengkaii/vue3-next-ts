import { createApp } from 'vue'
import MessageConstructor from './index.vue'
import ElementPlus from 'element-plus'
function mountContent(option = {} as any): any {
  const dom = document.createElement('div')
  document.body.appendChild(dom)
  const app = createApp(MessageConstructor, {
    close: () => {
      app.unmount()
      document.body.removeChild(dom)
    },
    ...option
  })
  app.use(ElementPlus).mount(dom)
}

export default mountContent
