import React from 'react'
import PropTypes from 'prop-types'

const InputTextArea = ({ placeHolder, value, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <textarea
      className="block w-full h-10 px-4 py-2 h-24 border border-gray-300 rounded-sm appearance-none resize-none"
      placeholder={ placeHolder }
      value={ value }
      onChange={ handleChange }
    ></textarea>
  )
}

InputTextArea.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

InputTextArea.defaultProps = {
  placeHolder: '',
}

export default InputTextArea
