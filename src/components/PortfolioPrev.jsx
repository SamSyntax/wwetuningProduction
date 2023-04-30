import placeholder from "../assets/placeholder.jpg"
import React from "react"
import useFetch from "../hooks/useFetch"

function PortfolioPrev() {
  const { loading, error, data } = useFetch(
    "https://strapi-production-a18c.up.railway.app/api/reviews?populate=*&?pagination[start]=0&pagination[limit]=3",
  )

  if (loading) return <p className='text-zinc-250'>Loading...</p>
  if (error) return <p className='text-zinc-250'>Error</p>

  console.log(data)

  return (
    <div id='Portfolio' className='w-full h-screen flex flex-col justify-center lg:px-24 px-12 lg:mt-auto  section flex-grow'>
      <div className='flex justify-center items-center align-middle text-center max-w[1240px]  rounded-lg w-[500px] p-8 text-gradient'>
        <h1 className='text-5xl font-semibold text-white text-center'>Nasze wyniki</h1>
      </div>
      <div className='lg:w-full w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col lg:flex-row justify-center items-center w-[1/4] border'>
          {/* <li key={blogPost.id}>{blogPost.title}</li> */}
          {/* <img className='p-2 md:w-1/4 md:rounded-3xl rounded-2xl w-[40%]' src={placeholder} alt='' />
          <img className='p-2 md:w-1/4 md:rounded-3xl rounded-2xl w-[40%]' src={placeholder} alt='' />
          <img className='p-2 md:w-1/4 md:rounded-3xl rounded-2xl w-[40%]' src={placeholder} alt='' /> */}
          {data.data.map((review) => (
            <div className='flex justify-center items-center'>
              <img className='md:h-1/4 md:rounded-3xl rounded-2xl h-[40%] w-[40%]' src={review.attributes.splash.data.attributes.url} alt='img' />
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
