import { postComment } from '~/api'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async addComment({ commit }, { payload }) {
    let { data } = await postComment(payload)
    console.log(data)
    return data
  }
}
