import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, block, variant, onClick }) => {
  const handleClick = () => {
    onClick()
  }

  const classDisplay = block ? 'flex w-full' : 'inline-flex'
  let classes = `${ classDisplay } justify-center items-center px-4 py-2 border-2 rounded-md text-center transition duration-300 ease-in-out`
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
  block: PropTypes.bool,
  variant: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: '',
  block: false,
  variant: '', // the other one is "outline"
  onClick: () => false,
}

export default Button
