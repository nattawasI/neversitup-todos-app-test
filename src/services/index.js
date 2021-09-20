import axios from 'axios'

const API_URL = 'https://candidate.neversitup.com/todo'

const postApi = async (path, data) => {
  return axios.post(`${ API_URL }${path}`, data)
}

export {
  postApi
}