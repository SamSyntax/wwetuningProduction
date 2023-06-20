import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { HiPhone, HiLocationMarker, HiMail } from "react-icons/hi"

function Contact() {
  const notify = () =>
    toast.error("📧 Wiadomość wysłana!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_07a008m", "template_16epufp", form.current, "_NSLjaVPuopq3tOIT").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
    )
    e.target.reset()
  }

  return (
    <div id='Contact' className='section text-white w-screen h-fit lg:h-[1100px] flex justify-center items-start bg-black/20 mt-14 '>
      <ToastContainer
        icon={false}
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div className='flex flex-col justify-center items-center p-12 mb-0 gap-5  w-full backdrop-blur-3xl '>
        <h1 className='text-4xl font-semibold text-center '>Skontaktuj się z nami!</h1>
        <div>
          <div className=' flex flex-col justify-center items-start gap-8  py-12  lg:flex-row md:items-center w-[60vw]'>
            <div className='flex justify-start items-center gap-8 md:text-2xl p-auto m-auto text-sm w-[350px]'>
              <HiPhone className='min-w-[36px] min-h-[36px]' />
              <p>+48 880 278 024</p>
            </div>
            <div className='flex justify-start items-center gap-8 md:text-2xl p-auto m-auto text-sm w-[350px]'>
              <HiLocationMarker className='min-w-[36px] min-h-[36px]' />
              <p>
                05-126, Stanisławów Pierwszy <br className='sm:hidden md:block' /> Ul. Słoneczna 1C
              </p>
            </div>
            <div className='flex justify-start items-center gap-8 md:text-2xl p-auto m-auto text-sm w-[350px]'>
              <HiLocationMarker className='min-w-[36px] min-h-[36px]' />
              <p>
                07-140, Sadowna <br className='sm:hidden md:block' /> Sokółka 79
              </p>
            </div>
            <div className='flex justify-start items-center gap-8 md:text-2xl p-auto m-auto text-sm w-[350px]'>
              <HiMail className='min-w-[36px] min-h-[36px]' />
              <p>wwe-tuning@o2.pl</p>
            </div>
          </div>
        </div>
        <div className='grid  grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center'>
          <form className='flex flex-col justify-center items-center md:items-start  p-12 gap-5 ' ref={form} onSubmit={sendEmail}>
            <input
              name='email_id'
              required
              placeholder='Email'
              className='text-zinc-250 text-lg p-0 border border-zinc-250 rounded-md bg-black/20 backdrop-blur-2xl w-[75vw] md:max-w-[500px]'
              type='email'
            />
            <input
              name='name_id'
              required
              placeholder='Imię i Nazwisko'
              className='text-zinc-250 text-lg p-0 border border-zinc-250 rounded-md bg-black/20 backdrop-blur-2xl w-[75vw] md:max-w-[500px]'
              type='text'
            />

            <textarea
              name='message_id'
              required
              placeholder='Wiadomość'
              className='text-zinc-250 text-lg p-0 border border-zinc-250 rounded-md bg-black/20 backdrop-blur-2xl w-[75vw] md:max-w-[500px] h-[20rem] text-start'
              type='text'
            />
            <input
              required
              onClick={notify}
              className='lg:py-3 md:px-6 mt-3 px-5 py-3 max-w-[240px] text-white font-semibold submit cursor-pointer'
              type='submit'
              value='Wyślij'
            />
          </form>
          <div className='flex w-[32.5wv] h-full justify-center items-start py-12'>
            <div className='flex justify-center items-center w-[90%] md:w-full rounded-md'>
              <iframe
                title='map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0504425988506!2d21.035808576965366!3d52.36950534736039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec626db2fabe7%3A0x26d912a9a8e5b8a!2sS%C5%82oneczna%201C%2C%2005-126%20Stanis%C5%82aw%C3%B3w%20Pierwszy!5e0!3m2!1sen!2spl!4v1687264138485!5m2!1sen!2spl'
                width='600'
                height='450'
                style={{ border: "0" }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
