import React, { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { BsEvFront, BsClipboard2Check } from "react-icons/bs"
import volkswagen from "../assets/volkswagen.png"
import bmw from "../assets/bmw.png"
import mercedes from "../assets/mercedes.png"
import audi from "../assets/audi.png"

function Services() {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger className='flex flex-col justify-between' onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className='flex justify-center items-center w-screen lg:my-2 my-[8rem] md:my-[18rem] '>
        <div className='w-full h-[200px] md:h-[400px] lg:h-[200px]  bg-black/20 lg:flex lg:justify-around backdrop-blur-3xl grid grid-cols-2 grid-rows-2 justify-center items-center '>
          <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={volkswagen} alt='' />
          <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={bmw} alt='' />
          <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={mercedes} alt='' />
          <img className='md:scale-50 scale-sm hover:scalemark transition-all ease-in-out duration-700' src={audi} alt='' />
        </div>
      </div>
      <div
        id='Services'
        className='h-screen w-screen grid md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 px-4 lg:px-24 gap-12   text-zinc-200'
      >
        <div className='col-span-2 md:flex md:items-center justify-center items-end hidden'>
          <h1 className='text-5xl font-semibold'>Czym się zajmujemy</h1>
        </div>
        <div className='flex flex-col justify-center md:justify-start lg:text-7xl'>
          <div className='flex items-center gap-8 md:justify-start '>
            <BsClipboard2Check className='lg:w-[80px] lg:h-[80px] lg:block hidden' />
            <h1 className='md:text-4xl text-5xl font-semibold text-zinc-200'>
              {counterOn && <CountUp start={0} end={200} duration={3} delay={0.2} />}+ Zadowolonych klientów
            </h1>
          </div>
          <br />
          <div className='flex items-center gap-8 md:justify-start'>
            <BsEvFront className='lg:w-[80px] lg:h-[80px] lg:block hidden' />
            <h1 className='md:text-4xl text-5xl font-semibold text-zinc-200'>
              {counterOn && <CountUp start={0} end={10} duration={3} delay={0.2} />}+ Lat doświadczenia
            </h1>
          </div>
        </div>
        <div className='flex flex-col justify-start  items-center'>
          <h1 className='md:hidden flex text-5xl font-semibold pb-12 text-center'>Czym się zajmujemy</h1>
          <p className='text-left text-lg lg:text-2xl'>
            WWE-TUNING oferuje kompleksowe usługi chip tuningu samochodów dla marek takich jak Audi, BMW, Mercedes-Benz oraz Volkswagen. Usługi
            obejmują chip tuning, optymalizację układu wtryskowego, diagnostykę samochodową, programowanie sterowników oraz montaż akcesoriów
            tuningowych. Zespół firmy składa się z doświadczonych specjalistów, którzy gwarantują najwyższą jakość usług i pełną satysfakcję klientów.
          </p>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Services
