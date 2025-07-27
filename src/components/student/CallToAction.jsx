import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='bg-gray-900 text-white py-10 px-8 rounded-lg'>
      <h1 className='text-3xl font-semibold mb-2'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-400 mb-4'>
        Incident sint this things are good to studies in school best for <br />
        skill development and create more projects.
      </p>
      <div className='flex items-center mb-4 px-0 md:px-20 gap-10'>
        <button className='px-4 py-2 text-lg rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white'>
          Get started
        </button>
        <h3 className='flex items-center gap-2 cursor-pointer hover:text-blue-400 transition'>
          Learn more <img src={assets.arrow_icon} alt="arrow" />
        </h3>
      </div>
    </div>
  )
}

export default CallToAction
