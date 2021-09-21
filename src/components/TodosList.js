import React from 'react'
import { useTodosStateContext } from '../contexts/TodosContext'
import TodoCard from './TodoCard'

const TodosList = () => {
  const { todoListContext } = useTodosStateContext()

  return (
    <div>
      <ul>
        {
          todoListContext.map((todo, index) => {
            const marginTop = index > 0 ? ' mt-6' : ''
            return (
              <li className={`${ marginTop }`} key={ todo._id }>
                <TodoCard data={ todo } />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodosList
