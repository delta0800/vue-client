export const state = () => ({
  showLoginModal: false
})

export const mutations = {
  toCloseLoginModal(state) {
    state.showLoginModal = false
  },
  toOpenLoginModal(state) {
    state.showLoginModal = true
  }
}

export const actions = {}
