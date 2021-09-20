import React from 'react'
import PropTypes from 'prop-types'

const InputText = ({ placeHolder, value, onChange, error }) => {
  const handleChange = (e) => {
    const value = e.target.value
    onChange(value)
  }

  const classError = error ? ' border-red-400 focus:border-red-400' : ''

  return (
    <input
      type="text"
      className={`block w-full h-10 px-4 border border-gray-300 rounded-sm appearance-none outline-none${ classError }`}
      placeholder={ placeHolder }
      onChange={ handleChange }
      value={ value }
    />
  )
}

InputText.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

InputText.defaultProps = {
  placeHolder: '',
  error: false,
}

export default InputText
