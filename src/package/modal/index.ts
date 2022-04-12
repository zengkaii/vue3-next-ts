import { createApp } from 'vue'
import MyModal from './modal.vue'
import { App } from 'vue'
export function modalMountContent(option = {} as any): any {
  const dom = document.createElement('div')
  document.body.appendChild(dom)
  const app = createApp(MyModal, {
    close: () => {
      app.unmount()
      document.body.removeChild(dom)
    },
    modelValue: true,
    ...option
  })

  app.mount(dom)
}

export default function install(app: App): any {
  app.component(MyModal.name, MyModal)
}
