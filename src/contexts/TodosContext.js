import React, { createContext, useContext, useState } from 'react'

const TodosStateContext = createContext()
const TodosActionContext = createContext()

export const useTodosStateContext = () => {
  return useContext(TodosStateContext)
}

export const useTodosActionContext = () => {
  return useContext(TodosActionContext)
}

const TodosContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)

  const stateProvider = {
    auth,
  }

  const actionProvider = {
    setAuth,
  }

  return (
    <TodosStateContext.Provider value={ stateProvider }>
      <TodosActionContext.Provider value={ actionProvider }>
        { children }
      </TodosActionContext.Provider>
    </TodosStateContext.Provider>
  )
}

export default TodosContextProvider