import { useState } from "react"

const ReadMoreReadLess = ({ limit, children }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false)

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState)
  }

  return (
    <div className='read-more-read-less'>
      {isReadMoreShown ? children : <p className='text-zinc-200 text-sm md:text-lg lg:hidden flex '>{children.substr(0, limit) + "..."}</p>}
      <button
        onClick={toggleBtn}
        className='lg:py-3 md:px-6 mt-3 px-5 py-3 min-w-[240px] max-w-[360px] z-400 text-white font-semibold lg:hidden block'
      >
        {isReadMoreShown ? "Zwiń" : "Czytaj Dalej"}
      </button>
    </div>
  )
}

export default ReadMoreReadLess
