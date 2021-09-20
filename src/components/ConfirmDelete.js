import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const ConfirmDelete = ({ dataDelete, onClose }) => {
  const handleClickCancel = () => {
    onClose()
  }

  const handleClickConfirm = () => {
    onClose()
  }

  return (
    <>
      <div className="pr-8">Are you sure to delete <span className="font-bold">{ dataDelete.title }</span></div>
      <div className="mt-6">
        <div className="flex justify-end">
          <div className="w-28">
            <Button variant="outline" block onClick={ handleClickCancel }>Cancel</Button>
          </div>
          <div className="w-28 ml-4">
            <Button block onClick={ handleClickConfirm }>Confirm</Button>
          </div>
        </div>
      </div>
    </>
  )
}

ConfirmDelete.propTypes = {
  dataDelete: PropTypes.object.isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
}

ConfirmDelete.defaultProps = {
  onCancel: () => {},
  onConfirm: () => {},
}

export default ConfirmDelete
