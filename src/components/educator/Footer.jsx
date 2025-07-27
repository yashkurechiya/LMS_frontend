import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-900 grid items-center  grid-cols-3 text-white p-10'>
       <div>
        <h1 className='text-white mb-5'><img src={assets.logo_dark} alt="" /></h1>
       <p className='text-gray-600/100'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi perspiciatis reiciendis repellendus accusamus fuga ratione voluptates architecto officia. Molestias exercitationem fuga nemo provident quo vitae omnis accusamus quod atque magni fugit error, debitis illum qui magnam delectus quasi optio cum commodi. Error, modi? Assumenda non ea ex iure aspernatur!
        </p> 
       </div>
      <div className='px-4 ml-40'>
        <h2 className='mb-5 text-xl font-semibold'>Company</h2>
        <ul className='text-gray-600/100'>
          <li className='mb-1'>Home</li>
          <li className='mb-1'>About us</li>
          <li className='mb-1'>Contact us</li>
          <li className='mb-1'>Read more</li>
        </ul>
      </div>
      <div>
        <h2 className='text-xl font-semibold'>Subscribe to our newsletter</h2>
        <p className='text-gray-600/100'>The latest news, articles, and resources, sent to your inbox weekly.</p>
        <div>
          <input type="text" className='border p-2 mr-2 rounded border-gray-600 mt-5' placeholder='Enter your email' /> 
          <button className='px-3 py-1 text-xl bg-blue-600 text-white rounded'>Subscribe</button>
        </div>
      </div>
      <p className='flex justify-center w-screen border-t border-gray-600 mt-4 py-2 mb-[-20px] text-gray-600/200'>Copyright @2005 @yashportfolio. ALl rights are reserverd.</p>
    </div>
  )
}

export default Footer
