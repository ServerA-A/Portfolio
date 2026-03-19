'use client';
import React from 'react'
import { ModeToggle } from './modeToggle';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4'>
      <nav className='flex items-center justify-between px-6 py-3 border border-primary/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 rounded-full shadow-sm'>
        <Link href='/' className='font-bold text-base tracking-tight hover:opacity-80 transition-opacity'>
          <span className='text-primary/60'>Aditya</span> Raj
        </Link>
        <div className='flex items-center gap-5 sm:gap-6'>
          <Link href='/' className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
            Me
          </Link>
          <Link href='/projects' className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
            Projects
          </Link>
          <Link href='/blog' className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
            Blogs
          </Link>
          <div className="h-4 w-px bg-border hidden sm:block"></div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}

export default Navbar