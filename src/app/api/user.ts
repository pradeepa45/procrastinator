interface FormData {
  firstName: string,
  lastName: string, 
  username: string, 
  password: string,
}

type T = {
  success: boolean,
  user: any,
}

export default async function createUserAccount(formData: FormData): Promise<T> {
  const rs = await fetch('/create-user', {
    method: "POST",
    body: JSON.stringify(formData)
  })
  const response: T = await rs.json()
  return response
}