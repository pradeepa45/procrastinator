import React from "react"

import SignUpButton from "./components/SignUp"
import LogInButton from './components/LogIn'

export default function Home() {
  return (
    <main className="flex justify-between">
      <div className="grow flex flex-col justify-between">
        <nav className="p-5">
          <p className="bg-clip-text text-transparent bg-gradient-to-r to-white from-yellow-400 text-5xl font-black w-fit">
            Procrastinator
          </p>
        </nav>
      </div>
      <div className="h-screen relative flex flex-col gap-10 justify-center basis-1/3 overflow-y-scroll bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-10">
        <LogInButton />
        <SignUpButton />
        {/* TODO: Continue without signing in */}
      </div>
    </main>
  );
}
