import axios from './config'

// post默认请求
export function post(apiUrl, params) {
  return axios.post(apiUrl, params)
}

// get默认请求
export function get(apiUrl, params) {
  return axios.get(apiUrl, { params: params })
}

// put默认请求
export function $put(apiUrl, params) {
  return axios.put(apiUrl, params)
}

// delete默认请求
export function $delete(apiUrl, params) {
  return axios.delete(apiUrl, { data: params })
}


