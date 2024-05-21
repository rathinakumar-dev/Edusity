import React, { useEffect, useState } from 'react'
import {FaArrowRight} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
const ContectUs = () => {

    useEffect(() => {
        AOS.init({duration:2000,
        delay:100
        })
    }, []) 

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })
    console.log(formData);

    function changeHandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        }

        )
    }



    return (
        <div className='w-full'>
            <form className=' w-full mx-auto flex flex-col items-center justify-center gap-16 mb-16'>


                <input
                    className='md:w-[50%] w-[80%] p-3 rounded-lg shadow-lg border-[1px] border-gray-500 '
                    type="text"
                    onChange={changeHandler}
                    name='name'
                    placeholder='Enter Your Name'
                    value={formData.name}
                    data-aos = "fade-left "
                />

                <input
                    className='md:w-[50%] w-[80%] p-3 rounded-lg shadow-lg border-[1px] border-gray-500'
                    type="tel"
                    onChange={changeHandler}
                    name='phone'
                    placeholder='Enter Your Phone Number'
                    value={formData.phone}
                    data-aos = "fade-left "

                />

                <input
                    className='md:w-[50%] w-[80%] p-3 rounded-lg shadow-lg border-[1px] border-gray-500'
                    type="email"
                    onChange={changeHandler}
                    name='email'
                    placeholder='Enter Your Email Id'
                    value={formData.email}
                    data-aos = "fade-left "
                />
                <textarea
                    className='md:w-[50%] w-[80%] h-[300px] p-3 rounded-lg shadow-lg border-[1px] border-gray-500'
                    onChange={changeHandler}
                    name='message'
                    placeholder='Enter Your Message'
                    value={formData.message}
                    data-aos = "fade-left "
                     />



              
               <button type='submit' className='bg-black text-white px-4 py-2 flex items-center gap-2 
               justify-center delay-3000 rounded-full'
         
               >Submit now
                <FaArrowRight />
                </button>
   
            </form>

            <div className='text-center text-xl font-semibold'>&copy; Edusity. All rights reserved. </div>
        </div>
    )
}

export default ContectUs