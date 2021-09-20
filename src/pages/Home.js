import React, { useState, useEffect } from 'react'
import {
  Redirect
} from 'react-router-dom'
import Header from '../components/Header'
import TodosEmpty from '../components/TodosEmpty'
import TodosList from '../components/TodosList'
import ButtonCreate from '../components/ButtonCreate'
import Modal from '../components/Modal'
import FormTodo from '../components/FormTodo'

const Home = () => {
  const loggedIn = false

  const [todoList, setTodoList] = useState([])
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


  if (!loggedIn) {
    return <Redirect to="/login" />
  }

  return (
    <div className="pt-14 md:pt-16">
      <Header />
      <div className="max-w-screen-md mx-auto px-4 pt-10 pb-28 md:pt-12 md:pb-32">
        {
          todoList.length > 0
          ? <TodosList list={ todoList } />
          : <TodosEmpty createTodo={ showModalCreateTodo } />
        }
      </div>
      {
        todoList.length > 0
        &&  <div className="fixed bottom-0 left-0 w-full flex justify-center p-4 bg-white">
              <div className="absolute top-0 w-full h-full shadow-md transform rotate-180">&nbsp;</div>
              <div className="relative">
                <ButtonCreate onClick={ showModalCreateTodo } />
              </div>
            </div>
      }
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

export default Home