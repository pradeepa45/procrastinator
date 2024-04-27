'use client'

import { Button, Form, FormField, Icon, Message, Modal } from 'semantic-ui-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import checkUser from '../../api/username'
import createUserAccount from '../../api/user'
import TextInput from '../Form/Input'

const initialState = {
  show: false,
  step: 1,
  username: '',
  isUsernameAvailable: true,
  firstName: '',
  lastName: '',
  password: '',
  secret: '',
  message: ''
}

export default function SignUpButton() {
  const router = useRouter()

  const [submitting, setSubmitting] = React.useState(undefined)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData ] = React.useState(initialState)
  const {show, step, username, isUsernameAvailable, firstName, lastName, password, message} = formData

  const handleFormChange = (e, data) => {
    const {name, value} = data
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleUsernameAvailability = async () => {
    setSubmitting(true)
    const {success} = await checkUser(username)
    setSubmitting(false)
    // TODO: show user name is available
    // TODO: transition into next step
    if(success) {
      setFormData({
        ...formData,
        isUsernameAvailable: true,
        step: 2,
      })
    }
    // username unavailable
  } 

  const handleCreateAccount = async () => {
    // TODO: See if all loaders are correctly showing on the form
    const {success, user} = await createUserAccount({
      username, 
      firstName,
      lastName,
      password
      // TODO: hash password
    })
    
    if(success) {
      // TODO: setup session
      router.push('/dashboard')
    }
    setSubmitted(false)

    // TODO: handle without sign in
  }

  return (
    <>
      <Button onClick={()=>setFormData({...formData, show: true})}>Sign up</Button>
      {show && step === 1 && (
        <Modal centered closeOnDimmerClick closeOnEscape open={show} onClose={()=>setFormData({...formData, show: false,})}>
          {/* TODO: use server side for form */}
          <Form error={!isUsernameAvailable}>
            <h1 className='text-black'>Hi, please pick a username</h1>
            {/* TODO: refactor form and its elements with the themed uniformly styled version */}
            <FormField>
              <label>Pick a username</label>
              <TextInput 
                placeholder='Pick a username'
                name="username" 
                value={username} 
                onChange={handleFormChange} 
                loading={!!submitting} 
              />
              {/* TODO: change it to custom themed error message for all form elements to be used */}
              {!isUsernameAvailable && (
                <Message
                error
                header={`${username} is unavailable`}
                content={message}
              />
              )}
            </FormField>
            <FormField>
              <Button icon onClick={handleUsernameAvailability} disabled={!!submitting}>
                Next
                <Icon name="arrow right" />
              </Button>
            </FormField>
          </Form>
        </Modal>
      )}
      {/* TODO: refactor form elements for further use */}
      {show && step === 2 && (
        <Modal centered closeOnDimmerClick closeOnEscape open={show} onClose={()=>setFormData({...formData, show: false,})}>
          <Form>
            <h1 className='text-black'>Hi, please pick a username</h1>
            <FormField>
              <label>What would you like us to call you?</label>
              <TextInput 
                name="firstName" 
                value={firstName} 
                onChange={handleFormChange} 
                loading={!!submitting} 
                label="First name"
                placeholder="First name"
              />
              <TextInput 
                name="lastName" 
                value={lastName} 
                onChange={handleFormChange} 
                loading={!!submitting} 
                label="Last name"
                placeholder="Last name"
              />
            </FormField>
            {/* TODO: password validation */}
            <FormField>
              <label>Pick a password</label>
              <TextInput 
                name="password" 
                value={password} 
                onChange={handleFormChange} 
                loading={!!submitting} 
                type='password'
                placeholder="Choose your password"
              />
            </FormField>
            {!submitted && (
                <Message
                error
                header='Sorry, couldnt create your account, please try again later'
                // content={message}
              />
              )}
            <FormField>
              <Button icon onClick={handleCreateAccount} disabled={!!submitting}>
                Create account
                <Icon name="arrow right" />
              </Button>
            </FormField>
          </Form>
        </Modal>
      )}
    </>
  )
}