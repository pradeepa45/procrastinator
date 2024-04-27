import { redirect } from "next/navigation"

export default async function logout() {
  const rs = await fetch('/logout-handler', {
    method: 'POST'
  })
  const response = await rs.json()
  // TODO: handle 500
  if (response.status === 500) redirect('/')
  return response
}