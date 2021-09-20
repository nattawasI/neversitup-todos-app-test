import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const InputPassword = ({ placeHolder, value, onChange }) => {
  // state
  const [showPassword, setShowPassword] = useState(false)

  // function
  const handleChange = (e) => {
    const value = e.target.value
    onChange(value)
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <input
        type="password"
        className="block w-full h-10 px-4 border border-gray-300 rounded-md"
        placeholder={ placeHolder }
        onChange={ handleChange }
        value={ value }
      />
      <div
        className="absolute top-0 right-0 w-10 h-full flex justify-center items-center cursor-pointer"
        onClick={ toggleShowPassword }
      >
        {
          showPassword
          ? <FiEyeOff className="text-xl" />
          : <FiEye className="text-xl" />
        }
      </div>
    </div>
  )
}

InputPassword.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputPassword
