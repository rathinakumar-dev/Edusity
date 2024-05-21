import React, { useEffect } from 'react'
import ptogram_1 from '../Image/ptogram_1.jpeg'
import program_2 from '../Image/program_2.jpeg'
import ptogram_3 from '../Image/ptogram_3.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Program = () => {

  useEffect(() => {
    AOS.init({duration:2000,
    delay:100
    })
}, []) 

  return (
    
    <div className='w-full'>
        
        <div className='max-w-[1080px] mb-6 mx-auto flex flex-col md:flex-row justify-around 
        items-center '>
            <div>
            <img className=' rounded-lg  w-[300px] border-2 p-3'
            src={ptogram_1} alt="ptogram_1" loading='lazy' data-aos = "flip-up" />
            </div>
            <div >
            <img  className=' rounded-lg  w-[300px] border-2 p-3'
            src={program_2} alt="ptogram_2" loading='lazy' data-aos = "flip-up" />
            </div>
            <div>
            <img  className=' rounded-lg  w-[300px] border-2 p-3'
            src={ptogram_3} alt="ptogram_3" loading='lazy' data-aos = "flip-up" />
            </div>
        </div>
    </div>
  )
}

export default Program