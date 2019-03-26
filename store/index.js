import globalConfig from '../config'
export const state = () => ({
  userInfo: ''
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

export const mutations = {
  user(state, data) {
    state.userInfo = data
  }
}
function cookieToJson(cookie) {
  let cookieArr = cookie.split(';')
  let obj = {}
  cookieArr.forEach(i => {
    let arr = i.indexOf('=')
    obj[i.substring(1, arr)] = i.substring(arr + 1)
  })
  return obj
}
export const actions = {
  nuxtServerInit({ commit }, ctx) {
    const cookie = cookieToJson(ctx.req.headers.cookie)
    if (cookie['koa:sess']) {
      commit('user', cookie['koa:sess'])
    }
  }
}
