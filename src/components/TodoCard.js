import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FiTrash } from 'react-icons/fi'
import Modal from './Modal'

const TodoCard = ({ data }) => {
  const [showEdit, setShowEdit] = useState(false)

  const onShowModal = () => {
    setShowEdit(true)
  }

  const onHideModal = () => {
    setShowEdit(false)
  }

  const handleClickTrash =() => {
    console.log('Trash');
  }

  const handleClickCard =() => {
    onShowModal()
  }

  return (
    <>
      <div
        className="relative"
      >
        <div
          className="p-8 pb-6 rounded-md bg-white border-2 border-gray-100 shadow-md cursor-pointer transition-colors duration-200 hover:border-primary-green hover:bg-gray-50"
          onClick={ handleClickCard }
        >
          <h2 className="text-xl text-dark-green font-bold">{ data.title }</h2>
          <p className="mt-6 font-light">{ data.description }</p>
          <p className="mt-8 text-right text-sm text-gray-700 font-light">20-09-2021</p>
        </div>
        <div className="absolute absolute top-4 right-4">
          <button
            className="p-2 border-2 border-gray-200 rounded-md transition-colors duration-200 hover:border-primary-green"
            onClick={ handleClickTrash }
          >
            <FiTrash />
          </button>
        </div>
      </div>
      <Modal
        show={ showEdit }
        onHide={ onHideModal }
      >
        <div>Test</div>
      </Modal>
    </>
  )
}

TodoCard.propTypes = {
  data: PropTypes.object,
}

TodoCard.defaultProps = {
  data: {},
}

export default TodoCard
