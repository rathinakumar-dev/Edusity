import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Title = ({title, subTitle}) => {

    
  useEffect(() => {
    AOS.init({duration:2000,
    delay:100
    })
}, [])
 
    return (
        <div 
        data-aos="fade-left"
        className=''>
            <div className='flex  flex-col items-center text-center  m-11 '>
                <p className=' mt-[100px] uppercase text-[16px] my-2 font-sans font-semibold
                 text-blue-900'>{subTitle}</p>
                <h2 className='text-4xl font-sans font-bold text-black  mb-5'>{title}</h2>
            </div>
        </div>
    )
}

export default Title