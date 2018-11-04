import axios from 'axios'
import querystring from 'querystring'

const ax = axios.create({
  baseURL: ''
})

// 拦截器
ax.interceptors.request.use(
  config => {
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
  get(url, params, config = defaultOption) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params, ...config }).then(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      )
    })
  },
  post(url, params, config = defaultOption) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, config).then(
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
