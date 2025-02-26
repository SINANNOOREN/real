import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "66f2818f-6cba-4b3c-ba98-93a26bdbd2b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("error")
      setResult(data.message);
    }
  };
  return (
    
    <motion.div
    initial={{opacity:0,x:200}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    >
         <h1 className='text-4xl font-bold mb-2 text-center'> <span className='underline font-light underline-offset-4 decoration-1  '> Contact with Us</span></h1>
    <p className='text-gray-500 mx-auto max-w-80 mb-16 text-center'>
        Ready to make a move?Lets build a future together
    </p>
    <form onSubmit={onSubmit} class="max-w-2xl mx-auto px-5 text-gray-600 pt-8">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 text-left">Your Name<input class="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required />
        </div><div class="w-full md:w-1/2 text-left md:pl-4">Your Email<input class="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required=""/>
        </div></div><div class="my-6 text-left">Message<textarea class="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required="">
          </textarea>
          </div>
          <button class="bg-blue-600 text-white py-2 px-12 mb-10 rounded">{result ? result : "send message"}</button>
          </form>
    </motion.div>
  )
}

export default Contact
