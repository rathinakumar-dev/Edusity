
import './Home.css'

const Home = () => {


  
  return (
    <div className='hero text-white relative '>

        <div className=' w-[95%] md:w-[50%]  mx-auto h-screen flex flex-col  items-center justify-center gap-6 text-center'>
            <h1 className=' w-[11/12] mx-auto text-[3rem] font-sans font-bold content  delay-2000'>We Ensure better education for a better world</h1>
            <p className=' w-[9/12] mx-auto content delay-1000'>Our cutting-edge curriculum is designed to empower students with
              the knowledge, skill, and experiences needed to excel in the dynamic field of education  

            </p>
            <button className='bg-white text-[#333] px-4 py-2 flex items-center gap-2 justify-center content delay-3000 rounded-full'>Explore more 
            <img className='w-[20px] my-auto'
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgB3ZnRcYJAEIYXyEMe04FnBaEEsIH4mLfEDizBdBAriFYQU4BKKogdSAk0wJD/n2CGuRHkeNrjm2G8W8WZb/a4W9dAFJIkyUMURZ8c4tqVZbnIsqxw+Y5QdPIkf1JkDskjZcUBlWIQsSXiOoO9USmGpbfFy8kKJ7PZ7EN6EohS6ufsiGHcjFdVtTkcDotb96sVI5AztZxpxvvIRaKYPM+LyWTyFYbhHNP/5y4Igng6ncr5fP5uu1e1GOmQS7rk1IuRIXJeiBFXOW/EiIucV2KEcsaYDDLPmN5f4rac6u2+izRNH5G5TBqZIzjcX1FXbgOcFS84K97tD/gM5SAdrmREUoSJCrE2RyVVU7AIXuLKZURgKa5Gt3mA5X6/X9+Jh7RJoTheoThec6z1F3QrrPixL+zkutTbZe7VUqQUMnWEmGnGbSnijZiLFPFCzFWKqBcbIkXUtwauSYENtvTO1oDqZg6kfoZIEZXnWKNDZay3ekkRzZ3g2Iqd+koRXzrBJ9R/qTiguRO8q6cZpVz/lPgF4obEWs0mGtMAAAAASUVORK5CYII=" alt=""></img>
            </button>

            {/* <div className=' bg-blue-100 z-[1] w-[100px] h-[100px]  absolute rounded-full right-[50%] bottom-16 opacity-10 boll-anime'></div> */}
        </div>

    </div>
  )
}

export default Home