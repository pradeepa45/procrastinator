'use client'

import React from "react"
import { Button, Confirm, Icon } from "semantic-ui-react"

const dummyData = [
  {name: `Organise flowers for bestie's surprise birthday party`, status: 'done', priority: 'normal'},
  {name: 'Send out invites', status: '', priority: 'low'},
  {name: 'Renew subscription', status: '', priority: 'critical'},
  {name: 'Prepare for interviews', status: 'done', priority: 'high'},
  {name: 'Reach out to client regarding an estimate', status: '', priority: 'normal'},
  {name: 'Check out the new store in the neighbourhood', status: '', priority: 'low'},
  {name: 'Annual health check up appointment', status: 'done', priority: 'critical'},
  {name: 'List out groceries for my next shopping', status: 'done', priority: 'normal'},
]

export default function Tasks() {
  const [priority, setPriorityFilter] = React.useState('')
  const [status, setStatusFilter] = React.useState('')
  
  return (
    <div className="basis-1/3 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-5 relative flex">
      <div className="absolute top-4 flex items-start gap-4 right-4">
        <Button icon labelPosition="right" className="!bg-yellow-400">Priority <Icon name="filter" /></Button>
        <Button icon labelPosition="right" className="!bg-yellow-400">Status <Icon name="filter" /></Button>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        {dummyData.map((item, index)=>(
          <div className="flex gap-1" key={index}>
            <Button className="!border !border-white" circular></Button>
            <p className={item.status === 'done' ? 'line-through grow mt-2 font-semibold': "grow mt-2"}>{item.name}</p>
            <Button className="!border !border-white !bg-transparent" icon circular>
              <Icon name="trash" color="yellow" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}