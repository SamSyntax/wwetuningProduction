import React, { useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-950/50 backdrop-blur-md fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <a href='/'>
            <img className='w-44 lg:w-36 md:w-36 p-10' src={logo} alt='' />
          </a>
          <ul className='hidden md:flex'>
            <a href='/'>
              <button className='px-5 py-2'>Strona Główna</button>
            </a>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'></div>
        <div className='md:hidden cursor-pointer ' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5 text-white' /> : <XIcon className='w-5 text-white' />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-950/50 backdrop-blur-md w-full px-8"}>
        <button className='px-5 py-2 '>Strona Główna</button>
        <li className='border-b-2 border-zinc-300 w-full'>Strona Główna</li>

        <div className='flex flex-col my-4'></div>
      </ul>
    </div>
  )
}

export default Navbar
