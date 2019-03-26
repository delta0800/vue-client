import { doRegister, doLogin } from '~/api'

export const state = () => ({
  showLoginModal: false,
  showSignUpModal: false,
  userInfo: {}
})

export const mutations = {
  toCloseLoginModal(state) {
    state.showLoginModal = false
  },
  toOpenLoginModal(state) {
    state.showLoginModal = true
  },
  toOpenSignUpModal(state) {
    state.showSignUpModal = true
  },
  toCloseSignUpModal(state) {
    state.showSignUpModal = false
  },
  saveUserInfo(state, data) {
    console.log(data)
    state.userInfo = data
    // localStorage.setItem('userInfo', JSON.stringify(data))
  }
}

export const actions = {
  async register({ commit }, { payload }) {
    return await doRegister(payload)
  },
  async login({ commit }, { payload }) {
    const userInfo = await doLogin(payload)
    commit('saveUserInfo', userInfo.data.data)
    return userInfo
  }
}
