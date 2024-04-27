import 'server-only'

import getSession from '../api/session'

export const verifySession = async () => {
  const session = await getSession()
  if (!session?.userId) {
    return { isLoggedIn: false, username: undefined }
  }

  return { isLoggedIn: true, username: session.username }
}