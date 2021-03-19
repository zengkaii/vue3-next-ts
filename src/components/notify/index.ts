import { App } from 'vue'
import Notify from './index.vue'

Notify.install = (app: App): void => {
  app.component(Notify.name, Notify)
}

const _Notify = Notify

export default _Notify
