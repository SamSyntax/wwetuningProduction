import React from "react"
import { FaTiktok, FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { AiOutlineWhatsApp } from "react-icons/ai"

function Socials() {
  return (
    <div className='text-zinc-200 px-12 py-12 mb-4  flex justify-center items-center gap-5 absolute w-screen md:gap-8'>
      <a href='https://www.tiktok.com/@wwetuning' target='blank'>
        <FaTiktok className='w-[2rem] h-[1.5rem]  transition-all ease-in-out duration-700 hover:text-red-600' />
      </a>
      <a href='https://www.facebook.com/profile.php?id=100087465671577' target='blank'>
        <FaFacebookF className='w-[2rem] h-[1.5rem]  transition-all ease-in-out duration-700 hover:text-red-600' />
      </a>
      <a href='https://www.instagram.com/wwetuning' target='blank'>
        <FiInstagram className='w-[2rem] h-[1.5rem]  transition-all ease-in-out duration-700 hover:text-red-600' />
      </a>
      <a href='https://wa.me/48880278024' target='blank'>
        <AiOutlineWhatsApp className='w-[2rem] h-[1.5rem]  transition-all ease-in-out duration-700 hover:text-red-600' />
      </a>
    </div>
  )
}

export default Socials
