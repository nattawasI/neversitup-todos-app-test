import React, { useState, useEffect } from 'react'
import {
  useHistory
} from 'react-router-dom'
import Header from '../components/Header'
import TodosArea from '../components/TodosArea'
import FooterBar from '../components/FooterBar'
import Modal from '../components/Modal'
import FormTodo from '../components/FormTodo'

const Main = () => {
  const history = useHistory()

  const [createTodo, setCreateTodo] = useState(false)

  const showModalCreateTodo = () => {
    setCreateTodo(true)
  }

  const hideModalCreateTodo = () => {
    setCreateTodo(false)
  }

  useEffect(() => {
    document.title = 'Todos App'
  }, [])

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      return history.push('/login')
    }
  }, [history])

  return (
    <div className="pt-14 md:pt-16">
      <Header />
      <div className="max-w-screen-md mx-auto px-4 pt-10 pb-28 md:pt-12 md:pb-32">
        <TodosArea createTodo={ showModalCreateTodo } />
      </div>
      <FooterBar createTodo={ showModalCreateTodo } />
      <Modal
        show={ createTodo }
        onHide={ hideModalCreateTodo }
      >
        <FormTodo
          onCancel={ hideModalCreateTodo }
          onSubmit={ hideModalCreateTodo }
        />
      </Modal>
    </div>
  )
}

export default Main