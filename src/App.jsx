import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'

import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
    
    <BrowserRouter>
  <Navbar/>
     <Routes>

       <Route path="/" element={<Home />} />
      
       <Route  path="/About" element={<About/>} />
       <Route path="/Projects" element={<Projects />} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/Footer" element={<Footer/>} />
     </Routes>
     <Footer/>
   </BrowserRouter>
   
    </div>
  )
}

export default App
