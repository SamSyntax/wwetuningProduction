import React, { useState } from "react"
import useFetch from "../hooks/useFetch"
import { ScaleLoader } from "react-spinners"

function PortfolioPrev() {
  const { loading, error, data } = useFetch(
    "https://strapi-production-a18c.up.railway.app/api/reviews?sort[1]=datePublished:DESC&populate=*&pagination[limit]=3",
  )

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  }

  if (loading)
    return (
      <div className='w-full h-screen bg-inherit flex justify-center items-center'>
        <ScaleLoader css={override} size={250} color={"#eb2f4b"} loading={loading} />
      </div>
    )
  if (error)
    return (
      <div className='w-full m-0 text-zinc-200 text-7xl font-bold h-screen flex justify-center items-center '>
        <p className='text-zinc-250'>Error</p>
      </div>
    )

  return (
    <div id='Portfolio' className='w-full h-screen flex flex-col justify-center lg:px-24 px-12 lg:mt-auto  section flex-grow lg:mb-[1rem] z-405'>
      <div className='flex justify-center items-center align-middle text-center max-w-[1240px]  rounded-lg w-[500px] p-8 text-gradient'>
        <h1 className='text-5xl font-semibold text-white text-center'>Nasze wyniki</h1>
      </div>
      <div className='lg:w-full w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col lg:flex-row justify-center items-center w-[1/4]'>
          {/* <li key={blogPost.id}>{blogPost.title}</li> */}
          {/* <img className='p-2 md:w-1/4 md:rounded-3xl rounded-2xl w-[40%]' src={placeholder} alt='' />
          <img className='p-2 md:w-1/4 md:rounded-3xl rounded-2xl w-[40%]' src={placeholder} alt='' />
          <img className='p-2 md:w-1/4 md:rounded-3xl rounded-2xl w-[40%]' src={placeholder} alt='' /> */}
          {data.data.map((review) => (
            <div className='flex justify-center items-center'>
              <a className='flex justify-center mb-6' href={review.attributes.splash.data.attributes.url} target='blank'>
                <img
                  className='md:h-1/4 md:rounded-3xl rounded-4xl h-[80%] w-[80%] hover:scale-105 transition-all ease-in-out duration-200 mx-4'
                  src={review.attributes.splash.data.attributes.url}
                  alt='img'
                  onError={(event) => (event.target.style.display = "none")}
                />
                <video
                  className='md:h-1/4 md:rounded-3xl rounded-2xl h-[80%] w-[80%] hover:scale-105 transition-all ease-in-out duration-200'
                  src={review.attributes.splash.data.attributes.url}
                  onError={(event) => (event.target.style.display = "none")}
                  autoPlay='true'
                  loop='true'
                  muted='true'
                />
              </a>
            </div>
          ))}
        </div>
        <a href='/Blog'>
          <button className='lg:py-3 md:px-6 mt-3 px-5 py-3 max-w-[240px] text-white font-semibold'>Zobacz wszystkie!</button>
        </a>
      </div>
    </div>
  )
}

export default PortfolioPrev

// grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-5 gap-0 md:grid-cols-2 md:grid-rows-3 grid-cols-2 grid-rows-3
