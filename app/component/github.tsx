"use client"
import React from 'react'
import { Github } from 'lucide-react'
import BrowserWindow from './browserwindow'

interface GithubWindowProps {
  close: () => void
}

const GithubWindow = ({ close }: GithubWindowProps) => (
  <BrowserWindow
    url='https://github.com/adityyaraj'
    title='GitHub'
    close={close}
    icon={<Github className='w-10 h-10' />}
  />
)

export default GithubWindow
