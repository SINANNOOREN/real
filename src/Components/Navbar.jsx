import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(open){
     document.body.style.overflow=('hidden')
    }else{
     document.body.style.overflow=('auto')
 
    }
 
   
     return () => {
       document.body.style.overflow=('auto')
     
     };
   }, [open]);
   
  return (
    <div className='absolute w-full top-0 left-0 z-10'>
        <div className='container flex px-6 md:px-20 lg:px-28  py-4 justify-between items-center ' >
<img src={assets.logo} alt="" />
<ul className='hidden md:flex gap-8'>
    <li  className='cursor-pointer hover:text-gray-400 text-white'>
<NavLink to={"/"}>Home</NavLink>
    </li>
    <li className='cursor-pointer hover:text-gray-400 text-white'>
    <NavLink to={"/About"}>About</NavLink>
    </li>
    <li className='cursor-pointer hover:text-gray-400 text-white'>
    <NavLink to={"/Projects"}>Projects</NavLink>
    </li>
    <li className='cursor-pointer hover:text-gray-400 text-white'>
    <NavLink to={"/Contact"}>Contact</NavLink>
    </li>
</ul>

<button className='bg-white rounded-full px-8 hidden md:block py-2'>Sign Up</button>

  <img className='md:hidden' onClick={() => setOpen(true)} src={assets.menu_icon} alt="" />
  </div>
  {/* mobile-screen   */}
  <div className={`md:hidden  top-0 overflow-hidden ${open ? 'w-full fixed' : 'w-0 h-0'} right-0 transition-all bottom-0  bg-white  `}>
   
    <div className='flex justify-end p-6 cursor-pointer'>
      <img className='w-7 ' onClick={() => setOpen(false)} src={assets.cross_icon} alt="" />
    </div>
    <ul className='flex flex-col gap-4 it font-medium items-center text-lg '>
      <li  onClick={() => setOpen(false)}  id='#home' className=''>
        Home
      </li>
      <li  onClick={() => setOpen(false)}  className=''>
 About
      </li>
      <li  onClick={() => setOpen(false)}  className=''>
 project
      </li>
      <li  onClick={() => setOpen(false)}  className=''>
Contact
      </li>
    </ul>
 
</div>
        
</div>
  )
}

export default Navbar
