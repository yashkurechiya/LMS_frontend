import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'
import Companies from './Companies'
import CoursesSection from './CoursesSection'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      <h1 className='md:text-5xl text-lg relative font-bold text-white max-w-3xl mx-auto'>
        Empower your future with the courses designed to <span className='text-blue-400'>fit your choice.</span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute right-100' />
      </h1>
      <p className='md:block hidden text-gray-400 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. velit ab dolorem molestiae porro ducimus corporis quas tempore eum. Consequatur tempora magnam omnis, repellat tempore velit!
      </p>
      <SearchBar />
      <Companies />
      <CoursesSection />
    </div>
  )
}

export default Hero
