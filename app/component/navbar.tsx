'use client';
import React from 'react'
import { ModeToggle } from './modeToggle';


function Navbar() {
  return (
  <nav className='border-b relative'>
    <div className='bg-transparent fixed top-0 right-0 z-50 item-center flex justify-between m-5'>
     <ModeToggle/>
</div>
  </nav>
  )
}

export default Navbar