/**
 * @description axios方法封装
 * @author cuiyang18756
 */

'use strict'
import axios from 'axios'

function checkStatus(response) {
  if (!response || response.status !== 200) {
    return Promise.reject(new Error({
      code: response.status,
      msg: '请求发生错误'
    }))
  }

  return response.data
}

// http request 拦截器
axios.interceptors.request.use(config => {
  console.log(config)
  debugger
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  if (response.data && typeof response.data === 'string') {
    response.data = JSON.parse(response.data)
  }

  return checkStatus(response)
}, error => {
  console.error(error)
})

axios.defaults.withCredentials = true
let CancelToken = axios.CancelToken
let source = CancelToken.source()

export default {
  get(url, params = {}) {
    return axios({
      method: 'get',
      baseURL: config.baseUrl,  // eslint-disable-line
      url,
      params,
      timeout: 1000 * 60,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      cancelToken: source.token
    })
  },
  post(url, data = {}, onUploadProgress = null) { // eslint-disable-line no-unused-vars
    return axios({
      method: 'post',
      baseURL: config.baseUrl, // eslint-disable-line
      url,
      data,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      timeout: 1000 * 60,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      cancelToken: source.token
    })
  },
  all(iterable) {
    return axios.all(iterable).then(response => {
      return response
    })
  },
  cancel() {
    source.cancel('cancel')
    // 赋值新source，否则之后的请求会全部被取消
    source = CancelToken.source()
  }
}
