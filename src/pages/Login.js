import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { authorization } from '../services'
import InputText from '../components/InputText'
import InputPassword from '../components/InputPassword'
import Button from '../components/Button'
import TextError from '../components/TextError'
import BoxError from '../components/BoxError'
import Loading from '../components/Loading'
import AnimateWhale from '../components/AnimateWhale'

const Login = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorUsernameMsg, setErrorUsernameMsg] = useState('')
  const [errorPasswordMsg, setErrorPasswordMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeUsername = (value) => {
    setUsername(value)
    setErrorUsernameMsg('')
  }

  const handleChangePassword = (value) => {
    setPassword(value)
    setErrorPasswordMsg('')
  }

  const hideError = () => {
    setErrorMsg('')
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password) {
      if (!username) {
        setErrorUsernameMsg('Please enter username')
      }

      if (!password) {
        setErrorPasswordMsg('Please enter password')
      }
      return false
    } else {
      setIsLoading(true)

      const userData = {
        username,
        password
      }

      try {
        const response = await authorization(userData)
        localStorage.setItem('authToken', response.data.token)
        setErrorMsg('')
        setTimeout(() => {
          setIsLoading(false)
          history.push('/')
        }, 1000);
      } catch {
        setErrorMsg('Incorrect username or password')
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    document.title = 'Todos App - Login'
  }, [])

  return (
    <>
      <div className="px-6 pt-4 md:pt-24 pb-16">
        <div className="max-w-sm mx-auto">
          <AnimateWhale />
          <div className="-mt-8">
            <form onSubmit={ onSubmit }>
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
                      error={ errorUsernameMsg ? true : false }
                    />
                    {
                      errorUsernameMsg
                      &&  <div className="mt-2">
                            <TextError>{ errorUsernameMsg }</TextError>
                          </div>
                    }
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-bold">Password</div>
                  <div className="mt-2">
                    <InputPassword
                      value={ password }
                      onChange={ handleChangePassword }
                      error={ errorPasswordMsg ? true : false }
                    />
                    {
                      errorPasswordMsg
                      &&  <div className="mt-2">
                            <TextError>{ errorPasswordMsg }</TextError>
                          </div>
                    }
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <div className="w-full">
                    <Button type="submit" block>Login</Button>
                  </div>
                </div>
                {
                  isLoading
                  &&  <div className="flex justify-center items-center -mt-10">
                        <Loading />
                      </div>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
      {
        isLoading
        &&  <div className="fixed inset-0 z-50 flex justify-center items-center">&nbsp;</div>
      }
    </>
  )
}

export default Login
