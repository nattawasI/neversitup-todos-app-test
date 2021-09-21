import React from 'react'
import PropTypes from 'prop-types'

const ButtonIcon = ({ children, onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button
      type="button"
      className="p-1 border-2 border-gray-200 rounded-md transition-colors duration-200 hover:border-primary-green"
      onClick={ handleClick }
    >
      {
        children
      }
    </button>
  )
}

ButtonIcon.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
}

ButtonIcon.defaultProps = {
  onClick: () => false,
}

export default ButtonIcon
