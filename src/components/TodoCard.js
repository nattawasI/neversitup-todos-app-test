import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { FiTrash } from 'react-icons/fi'
import ButtonIcon from '../components/ButtonIcon'
import Modal from './Modal'
import FormTodo from '../components/FormTodo'
import ConfirmDelete from '../components/ConfirmDelete'

const TodoCard = ({ data }) => {
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

  // function handleClick
  const hideModalConfirmDelete = () => {
    setShowConfirmDelete(false)
  }

  const handleClickTrash =() => {
    showModalConfirmDelete(false)
  }

  const handleClickCard =() => {
    showModalEdit()
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
          onCancel={ hideModalEdit }
          onSubmit={ hideModalEdit }
        />
      </Modal>
      <Modal
        show={ showConfirmDelete }
        onHide={ hideModalConfirmDelete }
        dialogMode
      >
        <ConfirmDelete
          dataDelete={ data }
          onClose={ hideModalConfirmDelete}
        />
      </Modal>
    </>
  )
}

TodoCard.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TodoCard
