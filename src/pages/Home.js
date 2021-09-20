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
  const loggedIn = true
  const list = [
    {
      id: 'todo1',
      title: 'Todo1',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
      id: 'todo2',
      title: 'Todo2',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
      id: 'todo3',
      title: 'Todo3',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
      id: 'todo4',
      title: 'Todo4',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
      id: 'todo5',
      title: 'Todo5',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    }
  ]

  const [createTodo, setCreateTodo] = useState(true)

  const showModalCreateTodo = () => {
    setCreateTodo(true)
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
      <div className="max-w-screen-md mx-auto px-4 pt-10 pb-28 md:pt-16 md:pb-36">
        {
          list.length > 0
          ? <TodosList list={ list } />
          : <TodosEmpty createTodo={ showModalCreateTodo } />
        }
      </div>
      {
        list.length > 0
        &&  <div className="fixed bottom-0 left-0 w-full flex justify-center p-4 bg-white">
              <div className="absolute top-0 w-full h-full shadow-md transform rotate-180">&nbsp;</div>
              <div className="relative">
                <ButtonCreate onClick={ showModalCreateTodo } />
              </div>
            </div>
      }
    </div>
  )
}

export default Home