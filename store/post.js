import { getPost, getPostById } from '~/api'

export const state = () => ({
  postList: []
})

export const mutations = {
  GET_POST_LIST(state, data) {
    state.postList = data
  }
}
export const actions = {
  async getPostList({ commit, rootGetters }) {
    return await getPost()
  },

  async getPostById({ commit, rootGetters }, params) {
    return await getPostById(params)
  }
}
