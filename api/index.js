import axios from './axios'

export const getPost = () => {
  return axios.get('/admin/index').then(res => res.data)
}

export const getPostById = params => {
  return axios.get('/admin/post', params).then(res => res.data)
}
