import React from 'react'
import PropTypes from 'prop-types'
import AnimateWhale from './AnimateWhale'
import ButtonCreate from './ButtonCreate'

const TodosEmpty = ({ createTodo }) => {
  return (
    <div>
      <AnimateWhale />
      <div className="-mt-10">
        <p className="text-center">There is no any Todos.</p>
        <div className="text-center mt-6">
          <ButtonCreate onClick={ createTodo } />
        </div>
      </div>
    </div>
  )
}

TodosEmpty.propTypes = {
  createTodo: PropTypes.func,
}

TodosEmpty.defaultProps = {
  createTodo: () => false,
}

export default TodosEmpty
