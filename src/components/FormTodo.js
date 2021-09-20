import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import InputText from './InputText'
import InputTextArea from './InputTextArea'
import TextError from './TextError'
import Button from './Button'

const FormTodo = ({ dataEdit, editMode, onCancel, onSubmit }) => {
  const [valueTitle, setValueTitle] = useState('')
  const [valueDesc, setValueDesc] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChangeTitle = (value) => {
    setValueTitle(value)
  }

  const handleChangeDesc = (value) => {
    setValueDesc(value)
  }

  const handleClickCancel = () => {
    onCancel()
  }

  const handleClickSubmit = () => {
    onSubmit()
  }

  useEffect(() => {
    if (dataEdit) {
      setValueTitle(dataEdit.title)
      setValueDesc(dataEdit.description)
    }
  }, [dataEdit])

  return (
    <div>
      <div className="text-2xl font-bold">{ editMode ? 'Edit' : 'Create Todo' }</div>
      <div className="mt-8">
        <form>
          <div>
            <div className="font-bold">Title</div>
            <div className="mt-2">
              <InputText
                value={ valueTitle }
                onChange={ handleChangeTitle }
              />
              {
                errorMsg
                &&  <div className="mt-2">
                      <TextError>{ errorMsg }</TextError>
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
                  ? <Button block onClick={ handleClickSubmit }>Edit</Button>
                  : <Button block onClick={ handleClickSubmit }>Create</Button>
                }
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

FormTodo.propTypes = {
  dataEdit: PropTypes.object,
  editMode: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
}

FormTodo.defaultProps = {
  dataEdit: null,
  editMode: false,
  onCancel: () => {},
  onSubmit: () => {},
}


export default FormTodo
