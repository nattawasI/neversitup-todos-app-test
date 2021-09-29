import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTodosActionContext } from '../contexts/TodosContext'
import InputText from './InputText'
import InputTextArea from './InputTextArea'
import TextError from './TextError'
import Button from './Button'

const FormTodo = ({ dataEdit, editMode, onClose }) => {
  const { createTodoContext, updateTodoContext } = useTodosActionContext()
  const usernameRef = useRef(null)
  const [valueTitle, setValueTitle] = useState('')
  const [valueDesc, setValueDesc] = useState('')
  const [errorTitle, setErrorTitle] = useState(false)

  const handleChangeTitle = (value) => {
    setErrorTitle(false)
    setValueTitle(value)
  }

  const handleChangeDesc = (value) => {
    setValueDesc(value)
  }

  const handleClickCancel = () => {
    onClose()
  }

  const handleClickEdit = () => {
    if (valueTitle) {
      const dataUpdated = {
        title: valueTitle,
        description: valueDesc
      }
      updateTodoContext(dataEdit._id, dataUpdated)
      onClose()
    } else {
      setErrorTitle(true)
    }
  }

  const handleClickCreate = async () => {
    if (valueTitle) {
      const newTodo = {
        title: valueTitle,
        description: valueDesc
      }
      createTodoContext(newTodo)
      onClose()
    } else {
      setErrorTitle(true)
    }
  }

  useEffect(() => {
    if (dataEdit) {
      setValueTitle(dataEdit.title)
      setValueDesc(dataEdit.description)
    }
  }, [dataEdit])

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  return (
    <div>
      <div className="text-2xl font-bold">{ editMode ? 'Edit' : 'Create Todo' }</div>
      <div className="mt-8">
        <div>
          <div className="font-bold">Title</div>
          <div className="mt-2">
            <InputText
              ref={ usernameRef }
              value={ valueTitle }
              onChange={ handleChangeTitle }
              error={ errorTitle }
            />
            {
              errorTitle
              &&  <div className="mt-2">
                    <TextError>Please enter the title</TextError>
                  </div>
            }
          </div>
        </div>
        <div className="mt-6">
          <div className="font-bold">Description</div>
          <div className="mt-2">
            <InputTextArea
              value={ valueDesc }
              onChange={ handleChangeDesc }
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-center">
            <div className="w-28">
              <Button variant="outline" block onClick={ handleClickCancel }>Cancel</Button>
            </div>
            <div className="w-28 ml-4">
              {
                editMode
                ? <Button type="submit" block onClick={ handleClickEdit }>Edit</Button>
                : <Button type="submit" block onClick={ handleClickCreate }>Create</Button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FormTodo.propTypes = {
  dataEdit: PropTypes.object,
  editMode: PropTypes.bool,
  onClose: PropTypes.func,
}

FormTodo.defaultProps = {
  dataEdit: null,
  editMode: false,
  onClose: () => {},
}


export default FormTodo
