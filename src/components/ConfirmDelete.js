import React from 'react'
import PropTypes from 'prop-types'
import { useTodosActionContext } from '../contexts/TodosContext'
import Button from './Button'

const ConfirmDelete = ({ dataDelete, onClose }) => {
  const { deleteTodoContext } = useTodosActionContext()

  const handleClickCancel = () => {
    onClose()
  }

  const handleClickConfirm = () => {
    deleteTodoContext(dataDelete._id)
    onClose()
  }

  return (
    <>
      <div className="pr-8">Are you sure to delete <span className="font-bold">{ dataDelete.title }?</span></div>
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
  onClose: PropTypes.func,
}

ConfirmDelete.defaultProps = {
  onClose: () => {},
}

export default ConfirmDelete
