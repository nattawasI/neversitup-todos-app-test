import React, { createContext, useContext, useState, useEffect } from 'react'
import { createTodo, deleteTodo, updateTodo, getAllTodos } from '../services'

const TodosStateContext = createContext()
const TodosActionContext = createContext()

export const useTodosStateContext = () => {
  return useContext(TodosStateContext)
}

export const useTodosActionContext = () => {
  return useContext(TodosActionContext)
}

const TodosContextProvider = ({ children }) => {
  const [todoListContext, setTodoListContext] = useState([])
  const [loadingTodosContext, setLoadingTodosContext] = useState(true)

  const setTodosListContext = async () => {
    setLoadingTodosContext(true)

    try {
      const response = await getAllTodos()
      setTodoListContext(response.data)
      setLoadingTodosContext(false)
    } catch (error) {
      console.log('error: ', error)
      setLoadingTodosContext(false)
    }
  }

  const createTodoContext = async (newTodo) => {
    await createTodo(newTodo)
    setTodosListContext()
  }

  const deleteTodoContext = async (id) => {
    await deleteTodo(id)
    setTodosListContext()
  }

  const updateTodoContext = async (id, data) => {
    await updateTodo(id, data)
    setTodosListContext()
  }

  useEffect(() => {
    setTodosListContext()
  }, [])

  const stateProvider = {
    todoListContext,
    loadingTodosContext,
  }

  const actionProvider = {
    setTodosListContext,
    createTodoContext,
    updateTodoContext,
    deleteTodoContext,
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