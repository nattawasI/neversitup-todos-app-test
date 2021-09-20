import React, { useState, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'
import TextInputError from './TextInputError'

const InputText = forwardRef((props, ref) => {
  // props
  const {
    type,
    name,
    placeHolder,
    value,
    onChange,
    capitalize,
    className,
    pattern,
    error,
    errorMsg,
    required
  } = props

  // state
  const [valueInput, setValueInput] = useState(value)
  const [errorInput, setErrorInput] = useState(error)
  const [errorMessage, setErrorMessage] = useState(errorMsg)

  // function
  const validateTel = (value) => {
    return value.length <= 10
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const updateInputState = (value) => {
    setValueInput(value)
    onChange(value)
    setErrorInput(false)
    setErrorMessage('')
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (type === 'tel') {
      const isNumber = value.match(/\d+/g)
      if (!!isNumber) {
        updateInputState(value)
        if (validateTel(value)) {
          setErrorInput(false)
          setErrorMessage('')
        } else {
          setErrorInput(true)
          setErrorMessage('Phone number must be 10 characters')
        }
      } else {
        updateInputState('')
      }
    } else if (type === 'email') {
      updateInputState(value)
      if (validateEmail(value)) {
        setErrorInput(false)
        setErrorMessage('')
      } else {
        setErrorInput(true)
        setErrorMessage('Invalid email address')
      }
    } else {
      updateInputState(value)
    }
  }

  // useEffect
  useEffect(() => {
    setErrorInput(error)
  }, [error])

  useEffect(() => {
    setErrorMessage(errorMsg)
  }, [errorMsg])

  const capitalizeClassName = capitalize ? ' capitalize' : ''
  const customClassName = className ? className : ''
  const errorClassName = errorInput ? ' border-red-500 focus:border-red-500' : ''

  return (
    <div className={ customClassName }>
      <input
        type={ type }
        className={ `block w-full h-10 px-4 border border-gray-300 rounded-sm appearance-none outline-none${ capitalizeClassName }${ errorClassName }` }
        ref={ ref }
        name={ name }
        placeholder={ placeHolder }
        onChange={ handleChange }
        value={ valueInput }
        pattern={ pattern }
        required={ required }
      />
      {
        errorInput && <TextInputError>{ errorMessage }</TextInputError>
      }
    </div>
  )
})

InputText.propTypes = {
  type: PropTypes.string, // text, email, tel
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  pattern: PropTypes.string,
  className: PropTypes.string,
  capitalize: PropTypes.bool,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  required: PropTypes.bool,
}

InputText.defaultProps = {
  type: 'text',
  name: '',
  placeHolder: '',
  value: '',
  onChange: () => {},
  pattern: null,
  capitalize: false,
  className: '',
  error: false,
  errorMsg: '',
  required: false,
}

export default InputText
