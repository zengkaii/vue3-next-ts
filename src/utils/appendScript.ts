
import {GD_KEY} from '@/utils/const'
export default function(): void {
    const url = `https://webapi.amap.com/maps?v=1.4.15&key=${GD_KEY}`
    const jsapi = document.createElement('script')
    jsapi.src = url
    document.head.appendChild(jsapi)
}