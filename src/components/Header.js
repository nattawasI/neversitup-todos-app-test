import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-40 w-full flex justify-between items-center h-14 md:h-16 px-6 md:px-10 bg-white shadow-md">
      <h1 className="text-xl font-lato font-bold">Todos App</h1>
      <button
        type="button"
        className="inline-flex items-center transition-colors duration-200 hover:text-primary-green"
      >
        <FiLogOut className="mr-2" />
        <span>Logout</span>
      </button>
    </header>
  )
}

export default Header
