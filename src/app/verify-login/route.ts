'use server'

import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

import getSession from "../api/session"

export async function POST  (req: NextRequest) {
  const params = await req.json()
  const { username, password } = params
  const client = new PrismaClient()

  const user = await client.user.findUnique({
    where: {
      username
    }
  })
  const {id} = user
  // TODO: verify password after hashing
  if (user.password === password) {
    // TODO: try adding session here?
    const session = await getSession()
    session.username = username
    session.isLoggedIn = true
    await session.save()

    const {isLoggedIn} = session

    return NextResponse.json({ success: true, userId: id, isLoggedIn }, { status: 200 }
    )
  }
  else return NextResponse.json({ success: false, userId: undefined, isLoggedIn: false }, {status: 401})
}