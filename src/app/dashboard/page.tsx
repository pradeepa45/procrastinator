import { redirect } from 'next/navigation'
import LogOutButton from '../components/LogOut'
import { verifySession } from '../lib/dal'
import checkUser from '../api/username'

export default async function DashboardPage () {
  const {isLoggedIn, username} = await verifySession()
  if(!isLoggedIn) redirect('/')

  const user = await checkUser(username)
  console.log('%csrc/app/dashboard/page.tsx:11 user', 'color: #26bfa5;', user);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='backdrop-blur-sm p-4 rounded-sm'>
      <p className='text-3xl text-center'>Hi there</p>
      <p>Thank you for visiting, this page will be up soon</p>
      <LogOutButton />
      </div>
    </div>
  )
}