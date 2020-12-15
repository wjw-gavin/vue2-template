/* eslint-disable new-cap */
import Vue from 'vue'
import Axios from 'axios'
import { Toast } from 'vant'

export let baseURL = process.env.NODE_ENV === 'production' ? '' : '/'

// 创建axios实例
const service = Axios.create({
  baseURL: baseURL,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    const token = 'token'
    if (token) {
      config.headers['X-TOKEN'] = token
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  ({ data }) => {
    if (data.status.code !== 0) {
      Toast.clear()
      Toast(data.status.msg || data.status.message)
      return Promise.reject(data.status);
    }
    return data.data;
  },
  err => {
    // 对响应错误做点什么
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权，请登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '服务未实现'
          break
        case 502:
          err.message = '网关错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'HTTP版本不受支持'
          break
        default:
          err.message = '系统错误'
          break
      }
    } else {
      err.message = '连接服务器失败!'
    }
    Toast.clear()
    Toast(err.message)
    // 对响应错误做点什么
    return Promise.reject(err)
  }
)

Vue.prototype.$http = service;

export default service
