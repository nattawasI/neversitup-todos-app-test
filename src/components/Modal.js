import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from './ButtonIcon'
import { FiX } from 'react-icons/fi'

const Modal = ({ children, show, onHide, dialogMode }) => {
  const handleClose = () => {
    onHide()
  }

  useEffect(() => {
    if (show) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = 'auto'
    }
  }, [show])

  const classDialog = dialogMode ? 'flex flex-col justify-center max-w-xl h-screen' : 'max-w-screen-md'

  return (
    <>
      {
        show
        &&  <div className="fixed inset-0 z-50 overflow-y-auto">
              <div
                className="fixed inset-0 bg-gray-700 opacity-50"
                onClick={ handleClose }
              >&nbsp;</div>
              <div className={ `${ classDialog } px-4 py-16 mx-auto` }>
                <div className="relative px-6 py-8 bg-white rounded-md">
                  <div className="absolute top-4 right-4">
                    <ButtonIcon onClick={ handleClose }>
                      <FiX />
                    </ButtonIcon>
                  </div>
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
  dialogMode: PropTypes.bool,
}

Modal.defaultProps = {
  show: false,
  onHide: () => false,
  dialogMode: false
}

export default Modal
