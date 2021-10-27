import { createVNode, render, isVNode } from 'vue'
import MessageConstructor from './index.vue'
let seed = 1
const instances = [] as any[]
const Message: any = function (opts = {} as any) {
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }
  let options = opts
  const id = 'message_' + seed++
  const userOnClose = options.onClose
  options = {
    ...options,
    onClose: () => {
      close(id, userOnClose)
    },
    // offset: verticalOffset,
    id
  }
  const message = options.message
  const container = document.createElement('div')
  const vm = createVNode(
    MessageConstructor,
    options,
    isVNode(options.message) ? { default: () => message } : null
  )
  vm.props.onDestroy = () => {
    render(null, container)
  }
  render(vm, container)
  document.body.appendChild(container.firstElementChild)
  return {
    close: () => ((vm.component.proxy as any).visible = false)
  }
}
export function close(id: string, userOnClose?: () => void): void {
  const idx = instances.findIndex(({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (idx === -1) {
    return
  }

  const { vm } = instances[idx]
  if (!vm) return
  userOnClose?.()

  const removedHeight = vm.el.offsetHeight
  instances.splice(idx, 1)

  // adjust other instances vertical offset
  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16

    instances[i].vm.component.props.offset = pos
  }
}

export default Message
