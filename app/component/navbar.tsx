'use client';
import React from 'react'
import { ModeToggle } from './modeToggle';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm'>
      <div className='max-w-5xl mx-auto flex items-center justify-between px-6 h-14'>
        <Link href='/' className='font-semibold text-base tracking-tight'>
          <span className='text-primary/50'>Aditya</span> Raj
        </Link>
        <div className='flex items-center gap-6'>
          <Link href='/#about' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
            Me
          </Link>
          <Link href='/#proofofwork' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
            Projects
          </Link>
          <Link href='/blog' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
            Blogs
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar