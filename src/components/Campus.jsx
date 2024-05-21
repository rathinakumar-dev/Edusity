import React, { useEffect } from 'react'
import program_2 from '../Image/program_2.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Campus = () => {


  useEffect(() => {
    AOS.init({duration:2000,
    delay:100
    })
}, []) 

  return (
    <div className='w-full flex flex-col gap-7'>

      <div className='max-w-[1080px] mb-6 mx-auto grid grid-cols-2 md:grid-cols-4 justify-around 
        items-center '>
        <div>
          <img className=' rounded-lg  w-[250px] border-2 p-3'
            src={program_2} alt="ptogram_1" loading='lazy' 
            data-aos = "zoom-in" 
            />
        </div>
        <div >
          <img className=' rounded-lg  w-[250px] border-2 p-3'
            src={program_2} alt="ptogram_2" loading='lazy' 
            data-aos = "zoom-in" 
            />
        </div>
        <div>
          <img className=' rounded-lg  w-[250px] border-2 p-3'
            src={program_2} alt="ptogram_3" loading='lazy' 
            data-aos = "zoom-in" 
            />
        </div>

        <div>
          <img className=' rounded-lg  w-[250px] border-2 p-3'
            src={program_2} alt="ptogram_3" loading='lazy' 
            data-aos = "zoom-in" 
            />
        </div>


      </div>

      <button 
       data-aos = "zoom-out"
      className='bg-black mx-auto text-white px-4 py-2 flex items-center gap-2 justify-center rounded-full'>Explore more
      <img 
       className='w-[20px] my-auto'
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII=" alt=""></img>
           
      
      </button>

    </div>
  )
}

export default Campus