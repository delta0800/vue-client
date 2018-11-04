import axios from 'axios'

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
    let { data } = await axios
      .get(`${rootGetters.baseUrl}/admin/index`)
      .catch(err => console.error(err))
    return data
  }
}
