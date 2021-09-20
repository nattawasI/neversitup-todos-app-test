import React from 'react'
import PropTypes from 'prop-types'
import { FiX } from 'react-icons/fi'

const BoxError = ({ children, onHide }) => {
  const handleClickClose = () => {
    onHide()
  }

  return (
    <div className="flex justify-between items-center p-4 bg-red-50 border-2 border-red-300 rounded-md">
      <p className="text-red-400">{ children }</p>
      <button
        type="button"
        onClick={ handleClickClose }
      >
        <FiX />
      </button>
    </div>
  )
}


BoxError.propTypes = {
  children: PropTypes.string.isRequired,
  onHide: PropTypes.func,
}

BoxError.defaultProps = {
  errorMsg: '',
  onHide: () => {},
}

export default BoxError
