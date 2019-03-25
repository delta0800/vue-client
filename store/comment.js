import { postComment, postOtherComment } from '~/api'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async addComment(_, { payload }) {
    return await postComment(payload)
  },

  async addOtherComment(_, { payload }) {
    return await postOtherComment(payload)
  }
}
