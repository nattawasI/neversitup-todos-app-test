import React from 'react'
import PropTypes from 'prop-types'
import TodoCard from './TodoCard'

const TodosList = ({ list }) => {
  return (
    <div>
      <ul>
        {
          list.map((todo, index) => {
            const marginTop = index > 0 ? ' mt-10' : ''
            return (
              <li className={`${ marginTop }`} key={ todo.id }>
                <TodoCard data={ todo } />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

TodosList.propTypes = {
  list: PropTypes.array,
}

TodosList.defaultProps = {
  list: [],
}

export default TodosList
