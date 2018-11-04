import globalConfig from '../config'
export const state = () => ({
  userinfo: ''
})

export const getters = {
  baseUrl() {
    let host
    if (process.env.NODE_ENV === 'production' && globalConfig.app.domain) {
      host = `${globalConfig.app.domain}`
    } else {
      host = `http://${globalConfig.app.host}:${globalConfig.app.port}`
    }
    return host
  }
}

export const actions = {}
