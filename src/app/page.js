'use client'

import React from "react"
import { Button, Sidebar, SidebarPushable, SidebarPusher, TransitionGroup } from "semantic-ui-react"

import AddTask from "./components/AddItem"
import Tasks from "./components/Items"
import LoginButton from "./components/Login"

export default function Home() {
  const [showViewTasks, setViewTasks] = React.useState(false)

  const handleClick = () => {
    setViewTasks(!showViewTasks)
  }
  
  return (
    <main>
    <div className="flex justify-between">
      <div className="grow flex flex-col justify-between">
        <nav className="p-5">
          <p className="bg-clip-text text-transparent bg-gradient-to-r to-white from-yellow-400 text-5xl font-black w-fit">
            Procrastinator
          </p>
        </nav>
        <LoginButton />
      </div>
      <div className="h-screen relative flex flex-col gap-10 justify-center basis-1/3 overflow-y-scroll bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="absolute top-5 right-5">
          <Button onClick={handleClick} className="!bg-yellow-400">{showViewTasks ? "Hide" : "Show"} all tasks</Button>
        </div>
        <div className="px-5">
        <AddTask handleClick={handleClick} />
        </div>
      </div>
      {showViewTasks && (
      <TransitionGroup animation="slide left" duration={1000}>
          <Tasks />
      </TransitionGroup>
    )}

    </div>
    </main>
  );
}
