'use client'

import React from "react"
import { Button, Dropdown, Form, Input } from "semantic-ui-react"


const priorities = [
  {key: 'critical', text: 'Critical', value:'critical'},
  {key: 'high', text: 'High', value:'high'},
  {key: 'normal', text: 'Normal', value:'normal'},
  {key: 'low', text: 'Low', value:'low'},
]

const initialState = {
  name: '',
  priority: '',
}

export default function AddTask() {
  const [task, setTask] = React.useState(initialState)
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const onChange = (e,data) => {
    const {name, value} = data
    setTask({
      ...task,
      [name]: value
    })
  }

  const addTask = () => {
    setSubmitting(true)
    // submit task
    setTask(initialState)
    setSubmitting(false)
  }

  return (
    <div className=" flex flex-col justify-center py-10">
      <p className="text-2xl mb-5 text-center">Add task</p>
      <Form onSubmit={addTask} className="flex flex-col gap-4 fluid">
        <Input placeholder="New task" onChange={onChange} name="name" value={task.name} loading={submitting} required/>
        <Dropdown
          placeholder='Priority (normal)'
          fluid
          search
          selection
          defaultValue="normal"
          options={priorities}
          disabled={submitting}
        />
        <Button className="!bg-yellow-400 !text-white px-1.5 py-5" type="submit">Add</Button>
      </Form>
    </div>
  )
}