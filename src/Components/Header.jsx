import React from 'react'

import { motion } from 'framer-motion'


const Header = () => {
  return (

<div>
<div id='Header' className='w-full mb-20  min-h-screen  overflow-hidden bg-cover   bg-center  flex  items-center   ' style={{backgroundImage:"url('/hes.jpg')"}}>
    
   
      <motion.div
       initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{duration:1}}
       whileInView={{opacity:1,y:0}}
      className='text-center   mx-auto py-4 px-6 md:px-20 lg:px-32'>
        <h1 className='text-5xl  sm:text-6xl md:text-[82px]  md:text-8xl pt-12
         max-w-3xl text- font-semibold text-white'>Explore homes that fit your dreams</h1>
      <div className='pt-7 space-x-7'>
     <a href="#Projects" className="border border-white text-white rounded-md px-8 py-3 hover:bg-blue-500">
  Projects
     </a>
     <a href="#Contact" className=" rounded-md bg-blue-500 px-6 py-3">
Contact Us
     </a>

      </div>
      </motion.div>

    </div>
   
     

</div>
   


  )
}

export default Header
