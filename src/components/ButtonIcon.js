import React from 'react'
import PropTypes from 'prop-types'

const ButtonIcon = ({ children, size, onClick }) => {
  const handleClick = () => {
    onClick()
  }

  const classSize = size === 'sm' ? 'p-1' : 'p-2'

  return (
    <button
      type="button"
      className={`${ classSize } border-2 border-gray-200 rounded-md transition-colors duration-200 hover:border-primary-green`}
      onClick={ handleClick }
    >
      {
        children
      }
    </button>
  )
}

ButtonIcon.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
}

ButtonIcon.defaultProps = {
  size: '', // the other one is "sm"
  onClick: () => false,
}

export default ButtonIcon
