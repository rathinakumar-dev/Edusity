import React from 'react'
import {useEffect} from 'react'
import program_2 from '../Image/program_2.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  // const [animation, setAnimation] = useState(false);


  // useEffect(() => {
  //   window.addEventListener('scroll', () => {

  //     window.scrollY > 1096 ? setAnimation(true) : setAnimation(false)
  //   })

  // }, []);


  useEffect(() => {
    AOS.init({duration:2000,
    delay:100
    })
}, [])

  return (


    < div className = 'max-w-full overflow-hidden' >
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-[10%] md:pr-[10%] mt-[60px] justify-center '>
        {/* video */}
        <img
        data-aos = "fade-up-right "
          className=' w-[60%] mx-auto rounded-lg border p-3'
          src={program_2} alt="..." />
        <div className=' w-[85%] mx-auto my-auto flex flex-col gap-4' data-aos="fade-left" >
          <p className=' font-sans text-gray-700 '>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
          <p className=' font-sans text-gray-700 '>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
          <p className=' font-sans text-gray-700 '>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
      </div>

      
</div >
  )
}

export default About