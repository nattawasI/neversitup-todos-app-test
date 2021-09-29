import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const DialogConfirm = ({ children, onClose, onSubmit, textSubmit }) => {
  const handleClickCancel = () => {
    onClose()
  }

  const handleClickConfirm = () => {
    onSubmit()
    onClose()
  }

  return (
    <>
      <div className="pr-8">{ children }</div>
      <div className="mt-6">
        <div className="flex justify-end">
          <div className="w-28">
            <Button variant="outline" block onClick={ handleClickCancel }>Cancel</Button>
          </div>
          <div className="w-28 ml-4">
            <Button block onClick={ handleClickConfirm }>{ textSubmit }</Button>
          </div>
        </div>
      </div>
    </>
  )
}

DialogConfirm.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  textSubmit: PropTypes.string,
}

DialogConfirm.defaultProps = {
  onClose: () => {},
  onSubmit: () => {},
  textSubmit: 'Confirm',
}

export default DialogConfirm
