import React from "react"
import volkswagen from "../assets/volkswagen.png"
import bmw from "../assets/bmw.png"
import mercedes from "../assets/mercedes.png"
import audi from "../assets/audi.png"

function Divider() {
  return (
    <div className='flex justify-center items-center w-screen  md:my-36 md:mb-0 my-24'>
      <div className='w-full h-[200px] md:h-[400px] lg:h-[200px]  bg-black/20 lg:flex lg:justify-around backdrop-blur-3xl grid grid-cols-2 grid-rows-2 justify-center items-center '>
        <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={volkswagen} alt='' />
        <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={bmw} alt='' />
        <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={mercedes} alt='' />
        <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={audi} alt='' />
      </div>
    </div>
  )
}

export default Divider
