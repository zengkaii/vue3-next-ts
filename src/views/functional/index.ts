import { h, VNode, SetupContext } from 'vue'
interface P {
  level: string | number
}
const Heading = (props: P, context: SetupContext): VNode => {
  return h(`h${props.level}`, context.attrs, context.slots)
}

Heading.props = ['level']

export default Heading
