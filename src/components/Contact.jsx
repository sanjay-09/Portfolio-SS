import React from 'react'
import {Link} from "react-router-dom"
import { CONTACT } from '../constants'
import {motion} from "framer-motion"

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}  className='my-20 text-center text-4xl'>Get In Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='py-4'>{CONTACT.address}</motion.p>
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}}className='py-4'>{CONTACT.phoneNo}</motion.p>
            <a href="#" className='border-b'>{CONTACT.email}</a>

        </div>
       
      
    </div>
  )
}

export default Contact
