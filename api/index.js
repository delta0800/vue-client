import axios from './axios'

export const getPost = () => {
  return axios.get('/admin/index')
}

export const getPostById = params => {
  return axios.get('/admin/post', params)
}
