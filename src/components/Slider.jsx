import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import MagicMotosports from "../assets/MagicMotosports.png"
import IOterminal from "../assets/IOterminal.png"
import VCP from "../assets/VCPsystem.png"
import Adako from "../assets/Adako.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      cssEase: "ease-in-out",
    }
    return (
      <div className='w-screen bg-black/20 backdrop-blur-3xl'>
        <Slider {...settings} className='flex items-center justify-center'>
          <div className='flex align-middle  items-center justify-center w-screen'>
            <div className='flex items-center justify-center h-[15rem]'>
              <img src={MagicMotosports} alt='MagicMotosports' className='max-h-[15rem]' />
            </div>
          </div>
          <div className='flex align-middle  items-center justify-center w-screen'>
            <div className='flex items-center justify-center h-[15rem]'>
              <img src={IOterminal} alt='IOterminal' className='max-h-[15rem]' />
            </div>
          </div>
          <div className='flex align-middle  items-center justify-center w-screen'>
            <div className='flex items-center justify-center h-[15rem]'>
              <img src={VCP} alt='VCP' className='max-h-[15rem]' />
            </div>
          </div>
          <div className='flex align-middle  items-center justify-center w-screen'>
            <div className='flex items-center justify-center h-[15rem]'>
              <img src={Adako} alt='Adako' className='max-h-[15rem] md:max-w-[25rem] max-w-[20rem]' />
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
