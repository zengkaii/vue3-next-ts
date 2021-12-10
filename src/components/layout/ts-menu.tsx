import { defineComponent, RendererElement, PropType } from 'vue'
import { MenuList } from '@/model/Store'
import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from 'element-plus'

export default defineComponent({
  name: 'TsMenu',
  inheritAttrs: false,
  props: {
    menuList: {
      type: Array as PropType<MenuList[]>,
      default: () => {
        return []
      }
    },
    backgroundColor: {
      type: String as PropType<string>
    },
    activeTextColor: {
      type: String as PropType<string>
    },
    textColor: {
      type: String as PropType<string>
    },
    defaultActive: {
      type: String as PropType<string>
    }
  },
  emits: ['menuClick'],
  setup(props, { emit }) {
    const children: RendererElement[] = []
    function menuClickMethod(i: MenuList) {
      emit('menuClick', i)
    }
    function menuRender(item: MenuList): RendererElement {
      let subNode: RendererElement
      if (item.children && item.children.length > 0) {
        let menuItemNodes = [] as RendererElement[]
        menuItemNodes = item.children.map((i) => {
          if (i.children && i.children.length > 0) {
            return menuRender(i)
          } else {
            return (
              <div
                onClick={() => {
                  menuClickMethod(i)
                }}>
                <ElMenuItem index={i.id.toString()}>
                  <span>{i.label}</span>
                </ElMenuItem>
              </div>
            )
          }
        })
        const slots = {
          title: () => {
            return <span>{item.label}</span>
          }
        }
        subNode = (
          <ElSubMenu index={item.id.toString()} v-slots={slots}>
            <ElMenuItemGroup>{menuItemNodes}</ElMenuItemGroup>
          </ElSubMenu>
        )
      } else {
        subNode = (
          <div
            onClick={() => {
              menuClickMethod(item)
            }}>
            <ElMenuItem index={item.id.toString()}>
              <span>{item.label}</span>
            </ElMenuItem>
          </div>
        )
      }
      return subNode
    }
    const menuList = props.menuList as MenuList[]
    menuList.forEach((item: MenuList) => {
      children.push(menuRender(item))
    })
    return () => {
      return (
        <ElMenu
          defaultActive={props.defaultActive as string}
          backgroundColor={props.backgroundColor as string}
          textColor={props.textColor as string}
          activeTextColor={props.activeTextColor as string}>
          {children}
        </ElMenu>
      )
    }
  }
})
