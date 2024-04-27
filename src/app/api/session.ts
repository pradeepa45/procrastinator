'use server'

import { SessionOptions, getIronSession } from "iron-session"
import { NextApiRequest, NextApiResponse } from "next"
import { cookies } from "next/headers"

interface SessionData {
  isLoggedIn: boolean,
  username: string,
}

const sessionOptions:SessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: process.env.COOKIE_NAME,
  cookieOptions: {
    secure: true,
    httpOnly: true,
  },
}

// to simulate server delay for animations
export const wait = (time: number) => {
  return new Promise((resolve)=> setTimeout(resolve, time))
}

export default async function getSession(req?: NextApiRequest, res?: NextApiResponse) {
  let session
  if (req || res) {
    session = await getIronSession<SessionData>(req, res, sessionOptions) 
  }
  else session = await getIronSession<SessionData>(cookies(), sessionOptions) 
  if (!session.isLoggedIn) {
    session.isLoggedIn = false
    session.username = ''

    // TODO: loading animation
    // await wait(250)
  }

  return session
}