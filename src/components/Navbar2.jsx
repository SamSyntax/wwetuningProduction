import React from "react"

import { BiHomeAlt } from "react-icons/bi"
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs"
import { TbLicense } from "react-icons/tb"
import { Link } from "react-scroll"

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 md:h-[96px] h-[96px] max-w-[400px] backdrop-blur-2xl rounded-full md:max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-zinc-200/50 items-center'>
          <Link
            smooth={true}
            spy={true}
            activeClass='active'
            to='Hero'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all ease-in-out'
          >
            <BiHomeAlt />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass='active'
            to='Portfolio'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all ease-in-out'
          >
            <BsClipboardData />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass='active'
            to='License'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all ease-in-out'
          >
            <TbLicense />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass='active'
            to='Services'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all ease-in-out'
          >
            <BsBriefcase />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass='active'
            to='Contact'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all ease-in-out'
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
