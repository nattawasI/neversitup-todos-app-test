import axios from 'axios'

const API_URL = 'https://candidate.neversitup.com/todo'

const getHeaders = (token) => {
  return  {
            headers: { 'Authorization' : `Bearer ${ token }` }
          }
}

export const authorization = async (data) => {
  return axios.post(`${ API_URL }/users/auth`, data)
}

export const createTodo = (data) => {
  const authToken = localStorage.getItem('authToken')
  return axios.post(
          `${ API_URL }/todos`,
          data,
          getHeaders(authToken)
        )
}

export const deleteTodo = (id) => {
  const authToken = localStorage.getItem('authToken')
  return axios.delete(
          `${ API_URL }/todos/${ id }`,
          getHeaders(authToken)
        )
}

export const updateTodo = (id, data) => {
  const authToken = localStorage.getItem('authToken')
  return axios.put(
          `${ API_URL }/todos/${ id }`,
          data,
          getHeaders(authToken)
        )
}

export const getAllTodos = () => {
  const authToken = localStorage.getItem('authToken')
  return axios.get(
          `${ API_URL }/todos`,
          getHeaders(authToken)
        )
}

