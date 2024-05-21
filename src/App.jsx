import { useState } from 'react';
import './App.css'
import About from './components/About';
import Campus from './components/Campus';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Program from './components/Program';
import Testimonials from './components/Testimonials';
import Title from './components/Title';
import data from './data'
import ContectUs from './components/ContectUs';



function App() {

  const[index, setIndex] = useState(0)

  function RightShiftHandler(){

    if(data.length-1 === index){
      setIndex(0);
    }else{
      setIndex(index + 1);
    }
  }

  

  function leftShiftHandler(){
    if(0 > index-1){

      setIndex(data.length-1);

    }else{
      setIndex(index - 1);
    }
  }



  return (
    <div className=" w-full  overflow-hidden">
      <div className='max-w-full'>
        <Navbar />
      </div>
      <div className='w-full'>
        <Home />
      </div>
      <div id='program'>
        <Title title="What We Offer" subTitle="Our program" />
        <Program />
      </div>

      <div id='about' className=' w-full'>
        <Title title="Narturing Tomorrow's Leaders Today" subTitle="About University" />
        <About />
      </div>

      <div id='campus' className='w-full'  >
        <Title title="Campus Photos" subTitle="GALLERY" />
        <Campus />
      </div>

      <div id='testimonials' className='w-full'  >
        <Title title="What Student Says" subTitle="TESTIMONIALS" />
        <Testimonials  leftShiftHandler={leftShiftHandler} RightShiftHandler={RightShiftHandler} data={data[index]}/>
        
    </div>
    <div id='contect' className='w-full'  >
        <Title title="get in Touch" subTitle="Cotect us" />
        <ContectUs />
      </div>

    </div>
  );
}

export default App;
