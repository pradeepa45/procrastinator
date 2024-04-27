'use server'

type T = {
  message: string,
  success: boolean,
  isUsernameAvailable: boolean
}

export default async function checkUser(username:string): Promise<T> {
  const rs = await fetch('/user-verify', {
    method: "POST",
    body: JSON.stringify({username})
  })
  const response = await rs.json()
  return response as T
}