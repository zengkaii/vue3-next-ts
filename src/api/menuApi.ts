import request from '@/utils/request/api'
import { DeleteMenu } from './model/menuApi'
export const menuList = (params?: unknown): Promise<any> => {
    return request.get('/menuApi/menu/list', params)
}

export const saveMenu = (params: unknown): Promise<any> => {
    return request.postJson('/menuApi/menu/save', params)
}

export const deleteMenu = (params: DeleteMenu): Promise<any> => {
    return request.postJson('/menuApi/menu/delete', params)
}
