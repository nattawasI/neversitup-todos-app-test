import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, variant, onClick }) => {
  const handleClick = () => {
    onClick()
  }

  let classes = 'inline-flex items-center px-4 py-2 border-2 transition duration-300 ease-in-out rounded-md'
  if (variant === 'outline') {
    classes += ' bg-transparent text-black border-black'
  } else {
    classes += ' bg-primary-green border-transparent text-white hover:bg-dark-green'
  }

  return (
    <button
      type={ type }
      className={ classes }
      onClick={ handleClick }
    >
      { children }
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: '',
  variant: '', // the other one is "outline"
  onClick: () => false,
}

export default Button
