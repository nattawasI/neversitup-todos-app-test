import React from 'react'
import PropTypes from 'prop-types'

const LabelInput = ({ children, required }) => {
  return (
    <div className="inline-flex items-center">
      <span>{ children }</span>
      {
        required && <span className="relative top-px inline-block ml-2 text-xs text-red-500">Required</span>
      }
    </div>
  )
}

LabelInput.propTypes = {
  children: PropTypes.string.isRequired,
  required: PropTypes.bool,
  optional: PropTypes.bool,
}

LabelInput.defaultProps = {
  required: false,
  optional: false,
}

export default LabelInput
