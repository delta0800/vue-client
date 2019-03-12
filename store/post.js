import { getPost, getPostById } from '~/api'

export const state = () => ({
  postList: []
})

export const mutations = {
  GET_POST_LIST(state, { payload }) {
    state.postList = payload.data
  }
}

export const actions = {
  async getPostList({ commit }) {
    let { data } = await getPost()
    commit({
      type: 'GET_POST_LIST',
      payload: data
    })
  },

  async getPostById({ commit, rootGetters }, params) {
    return await getPostById(params)
  }
}
