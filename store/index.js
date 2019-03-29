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

export const actions = {
  nuxtServerInit({ commit }, ctx) {
    console.log(ctx.req.session.user)
    if (ctx.req.session.user) {
      commit('user/saveUser', ctx.req.session.user)
    }
  }
}
