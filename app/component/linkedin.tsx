import React from 'react'
import { Linkedin } from 'lucide-react'
import BrowserWindow from './browserwindow'

interface LinkedProps {
  close: () => void
}

const Linked = ({ close }: LinkedProps) => (
  <BrowserWindow
    url='https://www.linkedin.com/in/adityyaraj/'
    title='LinkedIn'
    close={close}
    icon={<Linkedin className='w-10 h-10 text-blue-600' />}
  />
)

export default Linked
