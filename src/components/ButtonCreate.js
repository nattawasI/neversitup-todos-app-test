import React from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { FiPlus } from 'react-icons/fi'

const ButtonCreate = ({ onClick }) => {
  return (
    <Button onClick={ onClick }>
      <FiPlus className="mr-1 text-lg" />
      <span>Create Todo</span>
    </Button>
  )
}

ButtonCreate.propTypes = {
  onClick: PropTypes.func,
}

ButtonCreate.defaultProps = {
  onClick: () => false,
}

export default ButtonCreate
