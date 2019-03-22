import axios from './axios'

export const getPost = () => {
  return axios.get('/api/admin/index')
}

export const getPostById = params => {
  return axios.get('/api/admin/post', params)
}

export const postComment = ({ user_id, article_id, comment_content }) => {
  return axios.post('/api/comment/add', {
    user_id,
    article_id,
    comment_content
  })
}
