"use client"


import React, { useEffect, useState  } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'

const PaymentPage = ({ username }) => {

  // const { data: session } = useSession()

  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const SearchParams = useSearchParams()
  const router = useRouter()


  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if(SearchParams.get("paymentdone") == "true") {
      toast('Transaction Successfull!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    }

    router.push(`/${username}`)
  }, [])

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  const pay = async (amount) => {

    let a = await initiate(amount, username, paymentform)

    let orderId = a.id

    var options = {
      "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      "amount": amount,
      "currency": "INR",
      "name": "GetMeAChai",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId,
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }

    var rzp1 = new Razorpay(options)
    rzp1.open();
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


      {/* {params.username} */}

      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[350]' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=rVGpSkFdTxmyd-BoGGVb8nRrp_jow3mE01UVBWLSSck%3D&token-time=1754265600' alt='' />
        <div className='absolute -bottom-14 right-[45%] border-white border-2 rounded-full'>
          <img className='rounded-full w-[100px] h-[100px] object-cover' src='https://media.licdn.com/dms/image/v2/D5603AQHhfa6kUpr3wA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1679304965763?e=1756339200&v=beta&t=Sb_4E8_v88Yirk92L9xFj2e5N_MperNG4GTFyHmLryk' alt='' />
        </div>

      </div>

      <div className='info flex justify-center items-center my-16 flex-col gap-2'>
        <div className='font-bold text-lg ml-10'>
          @{username}
        </div>

        <div className='text-slate-400 ml-10'>
          Creating Animated art for VTT's

        </div>

        <div className='text-slate-400 ml-10'>
          {payments.length} Payments  .   ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
        </div>

        <div className='payment flex gap-3 w-[80%] mt-12'>
          <div className='supporters w-1/2 bg-zinc-700 rounded-lg text-white p-6'>
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-8 text-lg'>
              {payments.length == 0 && <li>No Payments Yet</li>}

              {payments.map((p, i) => {
                return
                <li key={i} className='my-4 flex gap-2 items-center'>
                  <img width={33} src='https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/avatar.gif?raw=true' alt='' />
                  <span>{p.name} donated <span className='font-bold'> ₹{p.amount}</span> with a message &quot;{p.message}&quot;   </span>
                </li>
              })}
              {/* <li className='my-4 flex gap-2 items-center'>
                <img width={33} src='https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/avatar.gif?raw=true' alt='' />
                <span>Harry donated <span className='font-bold'>$200</span> with a message "I support you bro with lots of Love ❤️"   </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src='https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/avatar.gif?raw=true' alt='' />
                <span>Ratan Tata donated <span className='font-bold'>$90000</span> with a message "I support you bro with lots of Love ❤️"   </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src='https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/avatar.gif?raw=true' alt='' />
                <span>Dr.Strange donated <span className='font-bold'>$1000</span> with a message "I support you bro with lots of Love ❤️"   </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src='https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/avatar.gif?raw=true' alt='' />
                <span>Loki donated <span className='font-bold'>$700</span> with a message "I support you bro with lots of Love ❤️"   </span>
              </li> */}


            </ul>
          </div>

          <div className='makePayment w-1/2 bg-zinc-700 rounded-lg text-white p-6'>

            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>

            <div className='flex gap-2 flex-col'>
              <input onChange={handleChange} value={paymentform.name} name='name' type='text' className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input onChange={handleChange} value={paymentform.message} name='message' type='text' className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type='text' className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                type="button"
                className="cursor-pointer  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg font-semibold rounded-lg text-sm px-6 py-2.5  disabled:bg-gray-600"
                disabled={paymentform.name.length < 3 || paymentform.message.length < 4 || paymentform.amount.length < 1}
              >
                Pay
              </button>
            </div>

            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700' onClick={() => pay(10)}>Pay  ₹10</button>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700' onClick={() => pay(50)}>Pay  ₹50</button>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700' onClick={() => pay(500)}>Pay  ₹100</button>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700' onClick={() => pay(100)}>Pay  ₹500</button>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700' onClick={() => pay(1000)}>Pay  ₹1000</button>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700' onClick={() => pay(5000)}>Pay  ₹5000</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage
