'use client'

import React from 'react'
import { Button, Form, FormField, Icon, Message, Modal } from 'semantic-ui-react'
import { useRouter } from 'next/navigation'

import TextInput from '../Form/Input'
import verifyLogin from '../../api/login'

const initialState = {
  show: false,
  username: '',
  password: '',
  isLoggedIn: false,
  userId: '', 
  error: false,
}

export default function LogInButton() {
  const router = useRouter()
  const [submitting, setSubmitting] = React.useState(undefined)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState(initialState)
  const {show, username, password, isLoggedIn, userId, error} = formData

  const handleFormChange = (e, data) => {
    const {name, value} = data
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleLogIn = async () => {
    const {success, userId, isLoggedIn}= await verifyLogin({
      username,
      password,
    })
    if(success && isLoggedIn) {
      router.push('/dashboard')
      // TODO: if they go back to login, how does session deal with it?
      setFormData(initialState)
    } else {
      // TODO: Handle unsuccessful login attempt
    }
  }
  
  return (
    <>
      <Button onClick={()=>setFormData({...formData, show: true})}>Log In</Button>
      {show && (
        <Modal centered closeOnDimmerClick closeOnEscape open={show} onClose={()=>setFormData({...formData, show: false})}>
          {/* TODO: use server side for form */}
          <Form error={error}>
          <FormField>
              <label>Enter your username</label>
              <TextInput 
                placeholder='username'
                name="username" 
                value={username} 
                onChange={handleFormChange} 
                loading={!!submitting} 
              />
              {/* TODO: change it to custom themed error message for all form elements to be used */}
              {error && (
                <Message
                error
                header="Invalid username"
                content=""
              />
              )}
            </FormField>
            <FormField>
              <label>Enter your password</label>
              <TextInput 
                placeholder='password'
                name="password" 
                type='password'
                value={password} 
                onChange={handleFormChange} 
                loading={!!submitting} 
              />
              {/* TODO: change it to custom themed error message for all form elements to be used */}
              {error && (
                <Message
                error
                header="Invalid password"
                content=""
              />
              )}
            </FormField>
            <FormField>
              <Button icon onClick={handleLogIn} disabled={!!submitting}>
                Log in
                <Icon name="arrow right" />
              </Button>
            </FormField>
          </Form>
        </Modal>
      )}
    </>
  )
}