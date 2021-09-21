import React from 'react'
import PropTypes from 'prop-types'
import { useTodosStateContext } from '../contexts/TodosContext'
import TodosEmpty from '../components/TodosEmpty'
import TodosList from '../components/TodosList'
import Loading from '../components/Loading'

const TodosArea = ({ createTodo }) => {
  const { loadingTodosContext, todoListContext } = useTodosStateContext()

  if (loadingTodosContext) {
    return (
      <div className="flex justify-center py-16">
        <Loading />
      </div>
    )
  }

  return (
    <>
      {
        todoListContext.length > 0
        ? <TodosList list={ todoListContext } />
        : <TodosEmpty createTodo={ createTodo } />
      }
    </>
  )
}

TodosArea.propTypes = {
  createTodo: PropTypes.func.isRequired,
}

export default TodosArea
