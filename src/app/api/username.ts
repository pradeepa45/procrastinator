type T = {
  message: string,
  success: boolean,
  isUsernameAvailable: boolean
}

export default async function checkUsernameAvailability(username:string): Promise<T> {
  const rs = await fetch(`/is-username-available`, {
    method: "POST",
    body: JSON.stringify({username})
  })
  const response = await rs.json()
  return response as T
}