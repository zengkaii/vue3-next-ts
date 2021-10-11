import { App } from 'vue'
export default (app: App<Element>): void => {
  app.directive('green', {
    mounted(el) {
      el.style.color = 'green'
    }
  })
}