import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='gradient-bg'>
      <div className='h-[20vh] md:h-[40vh] container section-padding py-5 sm:py-8 flex flex-col justify-between'>
          <div>
              <img className='w-14 sm:w-fit' src={logo} alt="EDAI" />
          </div>

         <div className='flex flex-col sm:flex-row justify-end items-center gap-3 sm:gap-10'>
          <ul className='flex items-center gap-5'>
            <Link to="/terms-of-use" className='text-xs sm:text-sm hover:underline'>Käyttöehdot</Link>
            <Link to="/privacy-policy" className='text-xs sm:text-sm hover:underline'>Tietosuoja</Link>
          </ul>
         <p className='text-end text-xs sm:text-sm'>© 2025 EDAI. All rights reserved.</p>
         </div>
    </div>
      </div>
  )
}

export default Footer