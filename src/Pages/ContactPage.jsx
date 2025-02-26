import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
const ContactPage = () => {
  return (
    <div>
      <div className='bg-gray-500 h-20 mb-4'>
      <Navbar/>
      </div>
       <Contact/>  
       <Footer/> 
      
    </div>
  )
}

export default ContactPage
