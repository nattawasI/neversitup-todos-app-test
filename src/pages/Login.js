import React, { useState, useEffect } from 'react'
import InputText from '../components/InputText'
import InputPassword from '../components/InputPassword'
import Button from '../components/Button'
import BoxError from '../components/BoxError'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('Incorrect username or password')

  const handleChangeUsername = (value) => {
    setUsername(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }

  const hideError = () => {
    setErrorMsg('')
  }

  useEffect(() => {
    document.title = 'Todos App - Login'
  }, [])

  return (
    <div className="px-6 pt-24">
      <div className="max-w-sm mx-auto">
        <form>
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <div className="mt-12">
            {
              errorMsg
              &&  <div className="mb-6">
                    <BoxError onHide={ hideError }>{ errorMsg }</BoxError>
                  </div>
            }
            <div>
              <div className="font-bold">Username</div>
              <div className="mt-2">
                <InputText
                  value={ username }
                  onChange={ handleChangeUsername }
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="font-bold">Password</div>
              <div className="mt-2">
                <InputPassword
                  value={ password }
                  onChange={ handleChangePassword }
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="w-full">
                <Button block>Login</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
