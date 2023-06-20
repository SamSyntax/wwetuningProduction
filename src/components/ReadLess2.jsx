import React, { useState } from "react"

const Expandable = ({ children, maxChars = 100 }) => {
  let [expanded, setExpanded] = useState(true)
  if (children.length <= maxChars) return <p>{children}</p>
  let text = expanded ? (
    <p className=' text-zinc-200 text-sm md:text-lg'>{children.substring(0, maxChars) + " ..."}</p>
  ) : (
    <p className=' text-zinc-200 text-sm md:text-lg'>{children}</p>
  )

  return (
    <div className='lg:hidden'>
      <p>{text} </p>
      <button
        className='lg:py-3 md:px-6 mt-3 px-5 py-3 min-w-[240px] max-w-[360px] z-400 text-white font-semibold lg:hidden block'
        onClick={() => setExpanded(!expanded)}
      >
        {" "}
        {expanded ? "Rozwiń" : "Zwiń"}
      </button>
    </div>
  )
}

export default Expandable
