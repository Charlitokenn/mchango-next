import { ArrowLeft } from '@/components/icons'
import Link from 'next/link'
import { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='auth-layout'>
      <Link href='/' className='absolute top-0 left-0 flex items-center p-2 m-4 space-x-1'>
      <ArrowLeft/>
      <p className='text-sm'>Home</p>
      </Link>
      {children}
    </div>
  )
}

export default AuthLayout