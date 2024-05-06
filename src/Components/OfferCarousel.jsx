import { useEffect } from 'react'
import { useState } from 'react'
import {IoIosArrowDropleft,IoIosArrowDropright} from 'react-icons/io'
import {RxDot} from 'react-icons/rx'
import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpeg';
import offer3 from '../assets/offer3.jpeg';
import offer4 from '../assets/offer4.jpg';
import offer5 from '../assets/offer5.webp';

function Carousel() {
  const slides = [
    {
      images: offer1
    },
    {
      images: offer2
    },
    {
      images: offer3
    },
    {
      images: offer4
    },
    {
      images: offer5
    }
  ]

  const[currentSlide,setCurrentSlide] = useState(0)

  const prevSlide = () =>{
    const isFirstSlide = currentSlide === 0
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  const nextSlide = () =>{
    const isLastSlide = currentSlide === slides.length - 1
    const newSlide = isLastSlide ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }
 
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentSlide(currentSlide => currentSlide >= slides.length - 1 ? 0 : currentSlide + 1)
    },3750)

    return () => clearInterval(intervalId);
  },[slides.length])
  



  return (
    <div className='ml-[160px] mt-16 h-[350px] w-[1200px] items-center justify-between rounded-md overflow-hidden' >
      <div style={{backgroundImage: `url(${slides[currentSlide].images})`}} className='w-full h-full rounded-2xl bg-center bg-cover transition-all ease-in'></div>
      <div className=' top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer mt-20 ml-2' >
        <IoIosArrowDropleft onClick={prevSlide} size={30}/>
      </div>
      <div className='top-[50%] -translate-x-0 -translate-y-[-50%] text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer mt-20 ml-[568px]'>
        <IoIosArrowDropright onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div 
            key={slideIndex}
            onClick={()=> goToSlide(slideIndex)}
            className='cursor-pointer transition-all'
            >
            <RxDot  size={20}/>
          </div>
        ) )}
      </div>
    </div>
      
    
  )
}

export default Carousel