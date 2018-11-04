import axios from './axios'

export const getPost = () => {
  return axios.get('/admin/index').then(res => res.data)
}
