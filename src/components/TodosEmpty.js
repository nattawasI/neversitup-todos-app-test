import React from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'
import animateEmpty from '../assets/images/empty-whale.json'
import ButtonCreate from './ButtonCreate'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animateEmpty,
}

const TodosEmpty = ({ createTodo }) => {
  return (
    <div>
      <Lottie options={ defaultOptions } height={ 300 } width={ 300 } />
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
