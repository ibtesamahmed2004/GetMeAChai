import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-gradient-to-tr from-[#1e1b4b] via-[#2e1065] to-[#000000]    text-white flex items-center justify-center px-4 h-12'>
      <p className='text-center'> Copyright &copy; {currentYear} GetmeAChai!  - All Rights Reserved!</p>
    </footer>
  )
}

export default Footer
