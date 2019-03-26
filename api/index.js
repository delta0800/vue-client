import axios from './axios'

export const getPost = () => {
  return axios.get('/admin/index')
}

export const getPostById = params => {
  return axios.get('/admin/post', params)
}

export const postComment = ({ user_id, article_id, comment_content }) => {
  return axios.post('/comment/add', {
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
  return axios.post('/comment/add_other', {
    user_id,
    article_id,
    comment_content,
    to_user,
    comment_id
  })
}

export const doRegister = ({ name, password, email }) => {
  return axios.post('/user/register', {
    name,
    password,
    email
  })
}

export const doLogin = ({ password, email }) => {
  return axios.post('/user/login', {
    password,
    email
  })
}
