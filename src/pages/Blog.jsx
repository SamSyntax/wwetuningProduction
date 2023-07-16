import React from "react"
import Navbar from "../components/Navbar"
import useFetch from "../hooks/useFetch"
import { ScaleLoader } from "react-spinners"

export default function Blog() {
  const { loading, error, data } = useFetch("https://strapi-production-a18c.up.railway.app/api/reviews?sort[1]=datePublished:DESC&populate=*")
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  }

  if (loading) return <div></div>
  if (error) return <p className='text-zinc-200'>Error</p>
  console.log(data)

  return (
    <div className='flex flex-col'>
      <Navbar key='nav' />
      {data.data.map((review) => (
        <div key={review.attributes.id} className='w-full h-1/4 border-b-2 p-24 bg-black/50'>
          <p className='text-zinc-200'>{review.attributes.datePublished}</p>
          <h2 className='text-zinc-200 text-lg font-semibold'>{review.attributes.title}</h2>
          <div className='text-zinc-200 bg-red-600 flex w-fit p-2 rounded-md my-2'>Silnik: {review.attributes.description}</div>
          <p className='text-zinc-200 whitespace-pre-line'>{review.attributes.body}</p>
          <div className='py-8 rounded-md'>
            <a href={review.attributes.splash.data.attributes.url} target='blank'>
              <img
                className='rounded-lg lg:max-w-[1280px] md:max-w-[720px] max-w-[240px]'
                src={review.attributes.splash.data.attributes.url}
                onError={(event) => (event.target.style.display = "none")}
                alt='img'
              />
            </a>
            <video
              className='rounded.lg'
              src={review.attributes.splash.data.attributes.url}
              autoPlay='true'
              muted='true'
              loop='true'
              onError={(event) => (event.target.style.display = "none")}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
