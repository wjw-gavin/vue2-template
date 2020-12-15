// 基础信息模块api
import {get, post} from '../index'

export function getMenu(params) {
  return get('/api/menu', params)
}
export function getMenus(params) {
  return post('/api/menu', params)
}

