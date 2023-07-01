import React, { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { BsEvFront, BsClipboard2Check } from "react-icons/bs"
import { GiHomeGarage } from "react-icons/gi"

function Services() {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger className='flex flex-col justify-between' onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div
        id='Services'
        className='h-screen w-screen grid md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 px-4 lg:px-24 gap-12 lg:mt-0 md:mb-24   text-zinc-200'
      >
        <div className='col-span-2 md:flex md:items-center justify-center items-end hidden'>
          <h1 className='text-5xl font-semibold'>Czym się zajmujemy</h1>
        </div>
        <div className='flex flex-col justify-center md:justify-center lg:text-7xl md:items-start items-center'>
          <div className='flex items-center gap-8 md:justify-start'>
            <GiHomeGarage className='lg:w-[80px] lg:h-[80px] lg:block hidden pb-2' />
            <h1 className='md:text-4xl text-4xl font-semibold text-zinc-200 text-center md:text-left'>Niezależny warsztat VW Group</h1>
          </div>
          <br />
          <div className='flex items-center gap-8 md:justify-start'>
            <BsClipboard2Check className='lg:w-[80px] lg:h-[80px] lg:block hidden' />
            <h1 className='md:text-4xl text-4xl font-semibold text-zinc-200 text-center md:text-left'>
              {counterOn && <CountUp start={0} end={200} duration={3} delay={0.2} />}+ <br className='' /> Zadowolonych klientów
            </h1>
          </div>
          <br />
          <div className='flex items-center gap-8 md:justify-start'>
            <BsEvFront className='lg:w-[80px] lg:h-[80px] lg:block hidden' />
            <h1 className='md:text-4xl text-4xl font-semibold text-zinc-200 text-center md:text-left'>
              {counterOn && <CountUp start={0} end={10} duration={3} delay={0.2} />}+ Lat doświadczenia
            </h1>
          </div>
        </div>
        <div className='flex flex-col justify-center  items-center text-center'>
          <h1 className='md:hidden flex text-5xl font-semibold pb-12 text-center'>Czym się zajmujemy</h1>
          <p className='text-left text-sm md:text-md lg:text-2xl'>
            WWE-TUNING oferuje kompleksowe usługi chip tuningu samochodów osobowych dla marek takich jak Audi, BMW, Mercedes-Benz, Volkswagen oraz
            wiele innych. Oferujemy także eco tuning pojazdów ciężarowych i maszyn rolniczych. Usługi obejmują chip tuning, optymalizację układu
            wtryskowego, diagnostykę samochodową, programowanie sterowników oraz montaż akcesoriów tuningowych. Współpracujemy z wieloma
            wykwalifikowanymi warsztatami mechanicznymi. Zespół firmy składa się z doświadczonych specjalistów, którzy gwarantują najwyższą jakość
            usług i pełną satysfakcję klientów.
          </p>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Services
