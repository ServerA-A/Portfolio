"use client"
import React from 'react'
import { Twitter } from 'lucide-react'
import BrowserWindow from './browserwindow'

interface XWindowProps {
  close: () => void
}

const XWindow = ({ close }: XWindowProps) => (
  <BrowserWindow
    url='https://x.com/adityyaraj'
    title='X / Twitter'
    close={close}
    icon={<Twitter className='w-10 h-10 fill-black text-black dark:fill-white dark:text-white' />}
  />
)

export default XWindow

