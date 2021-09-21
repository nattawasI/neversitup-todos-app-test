import React from 'react'
import PropTypes from 'prop-types'
import { useTodosStateContext } from '../contexts/TodosContext'
import ButtonCreate from '../components/ButtonCreate'

const FooterBar = ({ createTodo }) => {
  const { todoListContext } = useTodosStateContext()

  return (
    <>
      {
        todoListContext.length > 0
        &&  <div className="fixed bottom-0 left-0 w-full flex justify-center p-4 bg-white">
              <div className="absolute top-0 w-full h-full shadow-md transform rotate-180">&nbsp;</div>
              <div className="relative">
                <ButtonCreate onClick={ createTodo } />
              </div>
            </div>
      }
    </>
  )
}

FooterBar.propTypes = {
  createTodo: PropTypes.func.isRequired,
}

export default FooterBar
