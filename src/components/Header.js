import React, { useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import Modal from './Modal'
import DialogConfirm from './DialogConfirm'

const Header = () => {
  const history = useHistory()

  const [showConfirm, setShowConfirm] = useState(false)

  const showConfirmLogout = () => {
    setShowConfirm(true)
  }

  const hideConfirmLogout = () => {
    setShowConfirm(false)
  }

  const loggedOut = () => {
    localStorage.removeItem('authToken')
    history.push('/login')
  }


  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-full flex justify-between items-center h-14 md:h-16 px-6 md:px-10 bg-white shadow-md">
        <h1 className="text-xl font-lato font-bold">Todos App</h1>
        <button
          type="button"
          className="inline-flex items-center transition-colors duration-200 hover:text-primary-green"
          onClick={ showConfirmLogout }
        >
          <FiLogOut className="mr-2" />
          <span>Logout</span>
        </button>
      </header>
      {
        <Modal
          show={ showConfirm }
          onHide={ hideConfirmLogout }
          dialogMode
        >
          <DialogConfirm
            onClose={ hideConfirmLogout }
            onSubmit={ loggedOut }
          >
            <>Are you sure to logout?</>
          </DialogConfirm>
        </Modal>
      }
    </>
  )
}

export default Header
