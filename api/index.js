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

export const postOtherComment = ({
  user_id,
  article_id,
  comment_content,
  to_user,
  comment_id
}) => {
  return axios.post('/api/comment/add_other', {
    user_id,
    article_id,
    comment_content,
    to_user,
    comment_id
  })
}

export const doRegister = ({ name, password, email }) => {
  return axios.post('/api/user/register', {
    name,
    password,
    email
  })
}

export const doLogin = ({ password, email }) => {
  return axios.post('/api/user/login', {
    password,
    email
  })
}
