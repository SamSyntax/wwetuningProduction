import React from "react"

import heroimg from "../assets/heroimg.png"
import logo from "../assets/logo.png"

function Hero() {
  return (
    <div id='Hero' className='w-screen h-full lg:pt-auto px-16 pt-28 flex flex-grow'>
      <div className='grid'>
        <div className='flex gap-5 flex-row justify-between'>
          <div className='grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 w-full h-full'>
            <div className='flex flex-col justify-center align-middle lg:text-left text-center lg:items-start items-center  w-full px-2 text-white'>
              <img className='w-[40%]' src={logo} alt='' />
              <p className='text-2xl font-semibold text-white'>Profesjonalne podejście do klienta</p>
              <h1 className='py-3 text-center lg:text-left text-5xl lg:text-7xl font-bold text-white'>Chiptuning</h1>
              <p className='text-2xl font-semibold text-white'>Eco tuning samochodów ciężarowych oraz maszyn rolniczych.</p>
              <a href='tel:123-456-7890'>
                <button className='lg:py-3 md:px-6 mt-3 px-5 py-3 max-w-[240px] text-white font-semibold'>Skontaktuj się</button>
              </a>
            </div>
            <div className='flex justify-center'>
              <img
                className='lg:scale-100 sm:scale-75 flex-shrink md:mt-auto mt-24 hover:scale-105 hover:rotate-1 transition-all ease-in-out duration-500'
                src={heroimg}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
