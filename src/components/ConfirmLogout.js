import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Button from './Button'

const ConfirmDelete = ({ onClose }) => {
  const history = useHistory()

  const loggedOut = () => {
    localStorage.removeItem('authToken')
    history.push("/login");
  }

  const handleClickCancel = () => {
    onClose()
  }

  const handleClickConfirm = () => {
    loggedOut()
    onClose()
  }

  return (
    <>
      <div className="pr-8">Do you want to logout?</div>
      <div className="mt-6">
        <div className="flex justify-end">
          <div className="w-28">
            <Button variant="outline" block onClick={ handleClickCancel }>Cancel</Button>
          </div>
          <div className="w-28 ml-4">
            <Button block onClick={ handleClickConfirm }>Confirm</Button>
          </div>
        </div>
      </div>
    </>
  )
}

ConfirmDelete.propTypes = {
  onClose: PropTypes.func,
}

ConfirmDelete.defaultProps = {
  onClose: () => {},
}

export default ConfirmDelete
