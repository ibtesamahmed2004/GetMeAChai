// "use client"
// // import { useRouter } from 'next/navigation';
// import { useSession, signIn, signOut } from "next-auth/react"

import Dashboard from '@/components/Dashboard'
// import { Tilt_Neon } from 'next/font/google'


// import React from 'react'

const DashboardPage = () => {

//   const { data: session } = useSession()

  // if (!session) {
  //   const router = useRouter()
  //   router.push('/login')
  // }

  return (
    <Dashboard/>
  )
}

export default DashboardPage


export const metadata = {
  title: "Dashboard - Get Me A Chai",
}
