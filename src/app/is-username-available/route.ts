import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const params = await req.json()
  const {username} = params
  const client = new PrismaClient()
  const user = await client.user.findUnique({
    where: {
      username
    }
  })
  if (!user) return NextResponse.json({ isUsernameAvailable: true, success: true, message: 'Username is available' })
  else  return NextResponse.json({ isUsernameAvailable: false, success: false, message: `Username ${username} is not available, please choose a different one` })
}