import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = ({ leftShiftHandler, RightShiftHandler, data }) => {
  return (


    <div className='flex w-[95%] md:w-[50%]  mx-auto gap-8 items-center justify-center mt-11'>
      <FaArrowLeft
        className='rounded-full aspect-square text-center h-[50%] p-3 text-9xl md:text-6xl bg-black text-white'

        onClick={leftShiftHandler}
      />

      <div className='flex flex-col p-3 gap-8 bg-gray-100 rounded-lg'>
        <div className='flex flex-row items-center gap-5'>

          <img


            className='w-[100px] aspect-square rounded-full'
            src={data.image} alt="" />

          <div>
            <p className='uppercase text-[16px]  font-sans font-bold
                 text-blue-900'>{data.name}</p>
            <p className='uppercase text-[16px]  font-sans
                 text-[#333]'>{data.address}</p>
          </div>

        </div>
        <p>
          {data.info}
        </p>
        <div>
        </div>
      </div>



      <FaArrowRight
        className='rounded-full  text-center h-[50%] p-3 text-9xl md:text-6xl bg-black text-white'
        onClick={RightShiftHandler}
      />

    </div>

  )
}

export default Testimonials