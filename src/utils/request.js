/**
 * axios二次封装
 */
import axios from 'axios'
const NETWORK_ERROR = '网络异常'

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: 'http://swanine.xyz:3000',
  timeout: 10000
})

// 请求拦截
// service.interceptors.request.use((req) => {
//   // To-DO
//   const headers = req.headers
//   if (!headers.Authorization) headers.Authorization = 'swan-music'
//   return req
// })

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200 && data) {
    return data
  } else if (code === 200) {
    return res.data
  } else {
    console.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})
/**
  * 请求核心函数
  * @param {*} options 请求配置
  * @returns
  */
function request (options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  // if (config.env === 'prod') {
  //   service.defaults.baseURL = config.baseURL
  // } else {
  //   service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  // }

  return service(options)
}

export default request
