"use client"
import React, { useState } from 'react'
import { Monitor } from 'lucide-react'
import Hero from './hero'
import Skill from './skils'
import { DockDemo } from './dock'
import MaxWidthContainer from './maxwidthcontainer'
import { Projects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { Bricolage_Grotesque } from 'next/font/google'

const font = Bricolage_Grotesque({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

interface OldPortfolioProps {
  close: () => void
}

const OldPortfolio = ({ close }: OldPortfolioProps) => {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? Projects : Projects.slice(0, 4)

  return (
    <div className='absolute inset-0 flex items-center justify-center z-50'>
      <div className='md:w-[85%] md:h-[92%] w-[95%] h-[92%] bg-background rounded-xl flex flex-col border border-gray-300 shadow-2xl overflow-hidden'>

        {/* macOS title bar */}
        <div className='flex items-center gap-2 px-4 py-2.5 bg-[#ececec] dark:bg-[#2a2a2a] border-b border-gray-300 dark:border-gray-700 shrink-0'>
          <button onClick={close} className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors' />
          <span className='w-3 h-3 rounded-full bg-yellow-400' />
          <span className='w-3 h-3 rounded-full bg-green-500' />
          <div className='flex-1 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground'>
            <Monitor className='w-4 h-4' />
            Portfolio — Classic View
          </div>
        </div>

        {/* Scrollable content — exact replica of original page.tsx */}
        <div className='flex-1 overflow-y-auto pb-20'>
          <MaxWidthContainer>
            <Hero />

            {/* Proof of Work inline */}
            <div className={`${font.className} flex flex-col items-center p-2 mt-4`}>
              <h1 className='font-semibold text-3xl'>Proof Of Work</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-4 p-2'>
                {displayed.map((e, i) => (
                  <div key={i} className='w-full border hover:scale-[1.01] transition rounded-md overflow-hidden'>
                    <div className='overflow-hidden m-2 border rounded-sm'>
                      <Image src={e.image} width={1280} height={720} alt='Project' className='object-cover transition-transform duration-300 hover:scale-105' />
                    </div>
                    <div className='p-3 flex flex-col'>
                      <div className='flex justify-between items-start gap-2'>
                        <h2 className={`${font.className} text-xl font-bold`}>{e.title}</h2>
                        <div className='text-xs flex gap-2 text-primary-foreground shrink-0'>
                          <Link href={e.githubLink} target='_blank' rel='noopener noreferrer'>
                            <button className='flex gap-1 items-center border px-2 py-1 rounded-sm bg-secondary-foreground hover:scale-105 transition-transform'><Github size={13} />Github</button>
                          </Link>
                          <Link href={e.liveLink} target='_blank' rel='noopener noreferrer'>
                            <button className='flex gap-1 items-center border px-2 py-1 rounded-sm bg-secondary-foreground hover:scale-105 transition-transform'>Live Link</button>
                          </Link>
                        </div>
                      </div>
                      <p className='text-sm text-primary/70 mt-2'>{e.description}</p>
                      <div className='flex flex-wrap gap-1.5 mt-2'>
                        {e.techUsed.map((t, j) => <span key={j} className='rounded-full border px-3 py-0.5 text-xs'>{t}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {Projects.length > 4 && (
                <RainbowButton className='w-max mt-5' onClick={() => setShowAll(!showAll)}>
                  {showAll ? 'Show Less' : 'More Projects'}
                </RainbowButton>
              )}
            </div>

            <Skill />
            <DockDemo />
          </MaxWidthContainer>
        </div>

      </div>
    </div>
  )
}

export default OldPortfolio


