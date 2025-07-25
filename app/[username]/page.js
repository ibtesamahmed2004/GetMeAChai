import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'
const Username = async ({ params }) => {

  const checkUser = async() => {
    await connectDb()
    let u = await User.findOne({ Username: params.Username })
    if (!u) {
      return notFound()
    }
  }
  await checkUser()


  return (
    <>
      <PaymentPage usernanme = {params.usernanme}/>
    </>
  )
}



export default Username

export async function generateMedata({params}) {
  return {
    title: `support ${params.usernanme} - Get Me A Chai`,
  }  
}
