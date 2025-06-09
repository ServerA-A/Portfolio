'use client';

import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
  <nav className='border-b'>
    <div className='bg-transparent top-0 z-50 pz-4 py-4 md:py-5 item-center flex justify-between ml-5'>
    <Link href="/" className='flex-shrink-0'>
    <div className=' font-bold text-2xl text-white font-serif'>
        Portfolio
        </div>
    </Link>
      <div className='hidden md:flex justify-center item-center gap-8 lg:gap-18 absolute left-1/2 transform -translate-x-1/2'>
        <Link href="/" className='block py-2 text-md hover:text-primary/80 text-white hover:bg-hv font-semibold rounded-xl p-2 font-sans'>Home</Link>
        <Link href="/projects" className='block py-2 text-md hover:text-primary/80 text-white hover:bg-hv font-semibold rounded-xl p-2 font-sans'>Projects</Link>
    </div>
     <Link href="/" className='mx-4 text-md hover:text-primary/80 text-black bg-white hover:bg-[#d4d4d4] font-semibold rounded-xl p-2 font-sans'>Contact Me</Link>       
</div>
  </nav>
  )
}

export default Navbar