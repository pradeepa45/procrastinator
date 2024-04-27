'use client'

import logout from '../../api/logout'

export default function LogOutButton() {
  const handleLogout = async () => {
    logout()
  }
  return (
    <form>
      <button className='bg-gray-400 px-8 py-2 rounded-sm' onClick={handleLogout}>Log out</button>
    </form>
  )
}