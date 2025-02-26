import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle body overflow on mobile menu open/close
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full top-0  left-0 z-10 transition-all duration-300 ${isSticky ? 'fixed bg-gray-800 shadow-lg' : 'absolute bg-transparent'}`}>
      <div className='container flex px-6 md:px-20 lg:px-28 py-4 justify-between items-center'>
        <img src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex gap-8'>
          <li className='cursor-pointer hover:text-gray-400 text-white'>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className='cursor-pointer hover:text-gray-400 text-white'>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className='cursor-pointer hover:text-gray-400 text-white'>
            <NavLink to={"/Projects"}>Projects</NavLink>
          </li>
          <li className='cursor-pointer hover:text-gray-400 text-white'>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>

        <button className='bg-white rounded-full px-8 hidden md:block py-2'>Sign Up</button>

        <img className='md:hidden' onClick={() => setOpen(true)} src={assets.menu_icon} alt="Menu Icon" />
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden top-0 overflow-hidden ${open ? 'w-full fixed' : 'w-0 h-0'} right-0 transition-all bottom-0 bg-white`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img className='w-7' onClick={() => setOpen(false)} src={assets.cross_icon} alt="Close Icon" />
        </div>
        <ul className='flex flex-col gap-4 font-medium items-center text-lg'>
          <li onClick={() => setOpen(false)} className='cursor-pointer hover:text-gray-400 text-black'>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li onClick={() => setOpen(false)} className='cursor-pointer hover:text-gray-400 text-black'>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li onClick={() => setOpen(false)} className='cursor-pointer hover:text-gray-400 text-black'>
            <NavLink to={"/Projects"}>Projects</NavLink>
          </li>
          <li onClick={() => setOpen(false)} className='cursor-pointer hover:text-gray-400 text-black'>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
