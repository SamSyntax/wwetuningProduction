import React from "react"
import Expandable from "./ReadLess2"

function License() {
  return (
    <div className='flex flex-col h-screen w-screen lg:mt-0 md:mb-24 gap-12 items-center justify-center px-24' id='License'>
      <div className=' flex items-center justify-center'>
        <h1 className='text-zinc-200 text-4xl font-semibold'>Licencja WinOLS</h1>
      </div>
      <div className=' flex md:flex-row flex-col justify-around items-center md:gap-5 gap-12'>
        <div className='md:w-[50vw] w-full h-full'>
          <a href='https://www.evc.de/en/check_evc_license.asp?k=%2bcvnUR%2frr%2bEuBFY%2fdmnN9A%3d%3d'>
            <img
              className='relative w-full lg:w-3/5 rounded-lg hover:rounded-[0rem] opacity-75 hover:scale-105 transition-all ease-in-out duration-700'
              src='https://www.evc.de/images/ols/winols5_800x512.png'
              alt='license'
            />
          </a>
        </div>
        <div className='md:w-1/2 w-full text-zinc-200'>
          <p className='text-zinc-200 text-sm md:text-lg hidden lg:flex'>
            Jesteśmy profesjonalną firmą zajmującą się tuningiem samochodów, a nasze usługi opierają się na najnowocześniejszych technologiach. W celu
            zapewnienia najwyższej jakości i skuteczności naszych prac, korzystamy z najlepszego oprogramowania do edycji map w sterownikach silnika -
            WinOLS. Dzięki temu możemy zapewnić naszym klientom pełną funkcjonalność programu, a także legalne i zgodne z prawem korzystanie z tej
            zaawansowanej technologii. Nie tylko korzystanie z legalnie nabytych licencji jest ważne dla naszej firmy, ale także dbałość o
            bezpieczeństwo i prywatność naszych klientów. Dlatego wszystkie prace wykonujemy zgodnie z najwyższymi standardami branżowymi, a wszelkie
            dane klientów są traktowane z pełnym szacunkiem i poufnością.
          </p>

          <Expandable className='text-zinc-200 text-sm md:text-lg hidden lg:flex'>
            Jesteśmy profesjonalną firmą zajmującą się tuningiem samochodów, a nasze usługi opierają się na najnowocześniejszych technologiach. W celu
            zapewnienia najwyższej jakości i skuteczności naszych prac, korzystamy z najlepszego oprogramowania do edycji map w sterownikach silnika -
            WinOLS. Dzięki temu możemy zapewnić naszym klientom pełną funkcjonalność programu, a także legalne i zgodne z prawem korzystanie z tej
            zaawansowanej technologii.
          </Expandable>
        </div>
      </div>
    </div>
  )
}

export default License
