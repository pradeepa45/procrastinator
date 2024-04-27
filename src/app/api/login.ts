import getSession from "./session"

type T = {
  success: boolean,
  userId: string,
  isLoggedIn: boolean
}

export default async function verifyLogin(formData: any): Promise<T> {
  const {username, password} = formData
  const rs = await fetch('/verify-login', {
    method: "POST",
    body: JSON.stringify({ username, password })
  })
  const response = await rs.json()
  return response
}