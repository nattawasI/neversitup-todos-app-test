import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from './ButtonIcon'
import { FiX } from 'react-icons/fi'

const Modal = ({ children, show, onHide }) => {
  const handleClose = () => {
    onHide()
  }

  return (
    <>
      {
        show
        &&  <div className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto px-4">
              <div
                className="absolute inset-0 bg-gray-700 opacity-10"
                onClick={ handleClose }
              >&nbsp;</div>
              <div className="relative max-w-screen-md mx-auto my-16">
                <div className="absolute top-4 right-4">
                  <ButtonIcon onClick={ handleClose }>
                    <FiX />
                  </ButtonIcon>
                </div>
                <div className="p-6 bg-white rounded-md">
                  {
                    children
                  }
                </div>
              </div>
            </div>
      }
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool,
  onHide: PropTypes.func,
}

Modal.defaultProps = {
  show: false,
  onHide: () => false,
}

export default Modal
