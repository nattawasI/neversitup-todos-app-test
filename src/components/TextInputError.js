import React from 'react'

const TextInputError = ({ children }) => {
  return (
    <span className="block mt-2 text-red-500 text-xs">{ children }</span>
  )
}

export default TextInputError
