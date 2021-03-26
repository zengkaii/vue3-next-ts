import { App } from 'vue'
import MyMessage from './src/message'
MyMessage.install = (app: App): void => {
    app.config.globalProperties.$MyMessage = MyMessage
}

export default MyMessage
