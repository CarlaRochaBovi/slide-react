import { useState } from 'react'
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function App() {

  const slides = [
    {
      url:'./src/assets/photo.jpg'
    },
    {
      url:'./src/assets/photo2.jpg'
    },
    {
      url:'./src/assets/photo3.jpg'
    },
    {
      url:'./src/assets/photo4.jpg'
    },
    {
      url:'./src/assets/photo5.jpg'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex =  isFirstSlide ? slides.lenght - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex =  isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }


  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>  
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      
      </div>
      <div className='hidden group-hover:block duration-500 cursor-pointer text-[rgba(0,0,0,0.5)] absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl '>
        <BsArrowLeftSquareFill onClick={prevSlide} size={50}/>
      </div>

      <div className='hidden group-hover:block duration-500 cursor-pointer text-[rgba(0,0,0,0.5)] absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl '>
       <BsArrowRightSquareFill onClick={nextSlide} size={50}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className=' cursor-pointer'>
            <RxDotFilled size={50}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
