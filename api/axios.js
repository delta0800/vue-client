import axios from 'axios'
import querystring from 'querystring'

const defaultOptions = {}

if (process.server) {
  defaultOptions.baseURL = `http://${process.env.HOST || 'localhost'}:${process
    .env.PORT || 4000}`
}

const ax = axios.create(defaultOptions)
// 拦截器
ax.interceptors.request.use(
  config => {
    if (process.server) {
      config.url = config.url.substr(4)
    }
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
    ) {
      config.data = querystring.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

ax.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  get(url, params, config) {
    return new Promise((resolve, reject) => {
      ax.get(url, { params, ...config }).then(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      )
    })
  },
  post(url, params, config) {
    return new Promise((resolve, reject) => {
      ax.post(url, params, config).then(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      )
    })
  }
}
