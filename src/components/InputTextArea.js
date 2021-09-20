import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'

const InputTextArea = forwardRef((props, ref) => {
  // props
  const {
    name,
    value,
    placeHolder,
    className,
    onChange
  } = props

  // state
  const [valueInput, setValueInput] = useState(value)

  // function
  const handleChange = (e) => {
    const value = e.target.value
    setValueInput(value)
    onChange(value)
  }

  const customClassName = className ? className : ''

  return (
    <div className={ `${ customClassName }` }>
      <textarea
        className="block w-full h-10 px-4 py-2 h-24 border border-gray-300 rounded-sm appearance-none resize-none"
        ref={ ref }
        name={ name }
        placeholder={ placeHolder }
        value={ valueInput }
        onChange={ handleChange }
      ></textarea>
    </div>
  )
})

InputTextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

InputTextArea.defaultProps = {
  name: '',
  value: '',
  placeHolder: '',
  className: '',
  onChange: () => {}
}

export default InputTextArea
