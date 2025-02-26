import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Navbar from './Navbar'
const About = () => {
  return (
    < > 
   <div className=''>
   <Navbar/>
   </div>
  <motion.div id='About'
  initial={{opacity:0,x:200}}
  animate={{opacity:1,y:0}}
  transition={{duration:2}}
  whileInView={{opacity:1,x:0}}
  className='w-full flex container mx-auto px-12 md:px-20 flex-col justify-center mb-20 items-center '>
<h1 className='text-4xl font-bold mb-2 '>About <span className='underline font-light underline-offset-4 decoration-1  '>Our Brand</span></h1>
<p className='text-gray-500 max-w-80 mb-8 text-center'>Passionate About Properties ,Dedicated to Your Vision</p>
<div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
  <img className='w-full sm:w-1/2' src={assets.brand_img} alt="" />
  <div>
 <div className='grid grid-cols-2 gap-6 w-full md:gap-10 mt-10'>
<section >
<p className='text-4xl font-medium'>20+</p>
    <p className=' text-gray-500 '>
    </p>
</section>
<section>
<p className='text-4xl font-medium'>10+</p>
    <p className='text-gray-500'>Year of Excellence
    </p>
</section>
<section>
<p className='text-4xl font-medium'>12+</p>
    <p className='text-gray-500'>

Projects Completed
    </p>
</section>
<section>
<p className='text-4xl font-medium'>20+</p>
    <p className='text-gray-500'>Mn. Sq. Ft. Delivered
    </p>
</section>
 </div>  
<p className=' text-gray-500 py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti atque ad odit optio fugit, cumque similique eaque aut saepe perspiciatis itaque. Nesciunt facilis expedita totam illum libero praesentium.</p>
<button className='py-2 px-9 bg-blue-500 rounded'>Learn more</button>
 </div>
  <div>

  </div>
</div>

  </motion.div>
  
    </>
  )
}

export default About
