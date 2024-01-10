// 封装request，自定义请求和响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  // 配置请求基本路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000 // 超时事件设置
})

// 添加请求拦截器，包含一个回调函数
request.interceptors.request.use((config) => {
  // config配置对象，headers属性请求头，用于给服务器端添加公共参数
  // 返回配置对象
  return config
})

// 添加响应拦截器，包含一个成功的回调函数和一个失败的回调函数
request.interceptors.response.use(
  (response) => {
    // 请求成功的回调函数
    return response.data
  },
  (error) => {
    // 请求失败的回调函数,通常是由于http网络错误的失败
    let message = ''
    // 错误状态码
    const state = error.state
    switch (state) {
      case 401:
        message = '登录凭证失效，请重新登录'
        break
      case 403:
        message = '没有访问权限'
        break
      case 404:
        message = '访问的资源不存在'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    // 提示错误消息
    ElMessage({
      type: 'error',
      message
    })

    return Promise.reject()
  }
)

// 对外暴露
export default request
