import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const params = await req.json()
  const {username, firstName, lastName, password} = params
  const client = new PrismaClient()
  
  const user = await client.user.create({
    data: {
      username,
      firstName,
      lastName,
      password
    }
  })

  return NextResponse.json({ success: !!user, user })
}