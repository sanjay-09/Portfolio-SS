import React from 'react'
import logo from "../assets/ss-high-resolution-logo-white-transparent.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


function NavBar() {
    const handleClick=(url)=>{
        window.open(url, '_blank', 'noopener,noreferrer');


    }
  return (
    <nav className='mb-20 flex justify-between items-center py-6'>
        <div>
            <img src={logo} alt="" srcset="" className='w-[70px] h-[50px] ' />

        </div>
        <div className='flex items-center m-8 justify-center gap-4 text-2xl text-white'>
            <FaLinkedin onClick={()=>{
                handleClick("https://www.linkedin.com/in/sanjay-singh-8737681a4/");
            }} className='cursor-pointer'/>
            <FaSquareXTwitter onClick={()=>{
                 handleClick("https://twitter.com/s01558/with_replies?t=jADkSE0cX3lJUsCGkH8qeg&s=09");

            }} className='cursor-pointer'/>
            <FaGithub onClick={()=>{
                handleClick("https://github.com/sanjay-09");
            }} className='cursor-pointer'/>

        </div>

    </nav>
  )
}

export default NavBar
