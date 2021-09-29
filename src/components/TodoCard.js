import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { FiTrash } from 'react-icons/fi'
import { useTodosActionContext } from '../contexts/TodosContext'
import ButtonIcon from '../components/ButtonIcon'
import Modal from './Modal'
import FormTodo from '../components/FormTodo'
import DialogConfirm from './DialogConfirm'

const TodoCard = ({ data }) => {
  const { deleteTodoContext } = useTodosActionContext()

  const [showEdit, setShowEdit] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  // fucntion for Modal Edit
  const showModalEdit = () => {
    setShowEdit(true)
  }

  const hideModalEdit = () => {
    setShowEdit(false)
  }

  // fucntion for Modal Confirm Delete
  const showModalConfirmDelete = () => {
    setShowConfirmDelete(true)
  }

  const hideModalConfirmDelete = () => {
    setShowConfirmDelete(false)
  }

  // function handleClick
  const handleClickTrash =() => {
    showModalConfirmDelete(false)
  }

  const handleClickCard =() => {
    showModalEdit()
  }

  const confirmDelete = () => {
    deleteTodoContext(data._id)
  }

  const date = dayjs(data.createdAt).format('DD-MM-YYYY')

  return (
    <>
      <div
        className="relative"
      >
        <div
          className="p-4 rounded-md bg-white border-2 border-gray-200 shadow-sm cursor-pointer transition-colors duration-200 hover:border-primary-green hover:bg-gray-50"
          onClick={ handleClickCard }
        >
          <div className="text-xl text-dark-green font-bold">{ data.title }</div>
          <p className="mt-4 font-light">{ data.description }</p>
          <div className="mt-4 text-right text-sm text-gray-700 font-light">{ date }</div>
        </div>
        <div className="absolute absolute top-4 right-4">
          <ButtonIcon onClick={ handleClickTrash }>
            <FiTrash />
          </ButtonIcon>
        </div>
      </div>
      <Modal
        show={ showEdit }
        onHide={ hideModalEdit }
      >
        <FormTodo
          dataEdit={ data }
          editMode={ true }
          onClose={ hideModalEdit }
        />
      </Modal>
      <Modal
        show={ showConfirmDelete }
        onHide={ hideModalConfirmDelete }
        dialogMode
      >
        <DialogConfirm
          onClose={ hideModalConfirmDelete }
          onSubmit={ confirmDelete }
        >
          <>Are you sure to delete <span className="font-bold">{ data.title }?</span></>
        </DialogConfirm>
      </Modal>
    </>
  )
}

TodoCard.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TodoCard
