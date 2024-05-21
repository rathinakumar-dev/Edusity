import React, { useState } from 'react'

const Navbar = () => {

  const [manubar, setmanubar] = useState(false)

  function manuHandler() {

    setmanubar(!manubar)
  }
  return (

    <div className=' w-[100vw] z-[100] bg-black flex items-center justify-between pl-[10%] pr-[10%]
      h-[60px] text-white fixed'>
      <div>
        <div className='content text-2xl font-bold font-sans'>Edusity</div>
      </div>
      <svg onClick={manuHandler}
        className='content md:hidden z-[100] flex border-[1px] rounded-md p-1 ' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24" color='white'>
        <path d="M5,7h2h12c1.1,0,2-0.9,2-2s-0.9-2-2-2H7H5C3.9,3,3,3.9,3,5S3.9,7,5,7z"></path><path d="M19,10h-3H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h11h3c1.1,0,2-0.9,2-2S20.1,10,19,10z"></path><path d="M19,17h-6H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h8h6c1.1,0,2-0.9,2-2S20.1,17,19,17z"></path>
      </svg>

      <div className='content md:flex hidden  flex-row gap-5 font-sans items-center'>

        {/* {
                ['Home', 'Program', 'About', 'Compus', 'Testimonials'].map((item, index) => (
                
                    <a href="#" key={index} >{item}</a>
                ))
            } */}
        <a href="#Home">Home</a>
        <a href="#program">Program</a>
        <a href="#about">About</a>
        <a href="#campus">Campus</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contect">
        <button className='bg-white text-[#333] px-4 py-2 rounded-full'>Contect Us</button>

        </a>
      </div>

      { manubar &&
        <div  className='content w-[30%] h-[100vh] absolute top-0 bottom-0 right-0 md:hidden  bg-black flex  flex-col z-[20] justify-center gap-5 font-sans items-center'>
          <a href="#Home">Home</a>
          <a href="#program">Program</a>
          <a href="#about">About</a>
          <a href="#campus">Compus</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contect">
          <button className='bg-white text-[#333] px-4 py-2 rounded-full'>Contect Us</button>

          </a>
        </div>

      }

    </div>



  )
}

export default Navbar