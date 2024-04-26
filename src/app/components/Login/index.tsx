'use client'

import { Button, Form, FormField, FormInput, Icon, Input, Label, Message, Modal } from 'semantic-ui-react'
import React from 'react'

import checkUsernameAvailability from '../../api/username'
import createUserAccount from '../../api/user'
import { useRouter } from 'next/navigation'

export default function LoginButton() {
  const router = useRouter()

  const [submitting, setSubmitting] = React.useState(undefined)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData ] = React.useState({
    show: false,
    step: 1,
    username: '',
    isUsernameAvailable: true,
    firstName: '',
    lastName: '',
    password: '',
    message: ''
  })
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
    const {isUsernameAvailable, message, success} = await checkUsernameAvailability(username)
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
          <Form error={!isUsernameAvailable}>
            <h1 className='text-black'>Hi, please pick a username</h1>
            {/* TODO: refactor form elements for further use */}
            <FormField>
              <label>Pick a username</label>
              <FormInput 
                name="username" 
                value={username} 
                fluid={false} 
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
              <Input 
                name="firstName" 
                value={firstName} 
                fluid={false} 
                onChange={handleFormChange} 
                loading={!!submitting} 
                label="First name"
              />
              <Input 
                name="lastName" 
                value={lastName} 
                fluid={false} 
                onChange={handleFormChange} 
                loading={!!submitting} 
                label="Last name"
              />
            </FormField>
            <FormField>
              <label>Pick a password</label>
              <Input 
                name="password" 
                value={password} 
                fluid={false} 
                onChange={handleFormChange} 
                loading={!!submitting} 
                type='password'
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