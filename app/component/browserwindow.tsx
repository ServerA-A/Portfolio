"use client"
import React, { useState } from 'react'
import { ExternalLink, RefreshCw, Lock } from 'lucide-react'

interface BrowserWindowProps {
  url: string
  title: string
  close: () => void
  icon?: React.ReactNode
  width?: string
  height?: string
}

const BrowserWindow = ({ url, title, close, icon, width = 'md:w-[75%]', height = 'md:h-[88%]' }: BrowserWindowProps) => {
  const [key, setKey] = useState(0) // used to reload iframe

  return (
    <div className='absolute inset-0 flex items-center justify-center z-50'>
      <div className={`${width} ${height} w-[95%] h-[88%] bg-background rounded-xl flex flex-col border border-gray-300 shadow-2xl overflow-hidden`}>

        {/* ── macOS title bar ── */}
        <div className='flex items-center gap-2 px-4 py-2.5 bg-[#ececec] dark:bg-[#2a2a2a] border-b border-gray-300 dark:border-gray-700 shrink-0'>
          <button onClick={close} className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors' />
          <span className='w-3 h-3 rounded-full bg-yellow-400' />
          <span className='w-3 h-3 rounded-full bg-green-500' />

          {/* URL bar */}
          <div className='flex-1 mx-4'>
            <div className='flex items-center gap-2 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm text-gray-600 dark:text-gray-400'>
              <Lock className='w-3 h-3 text-gray-400 shrink-0' />
              <span className='truncate flex-1 text-xs'>{url}</span>
              <button onClick={() => setKey(k => k + 1)} className='ml-1 hover:text-gray-800 dark:hover:text-white transition-colors'>
                <RefreshCw className='w-3 h-3' />
              </button>
            </div>
          </div>

          <a href={url} target='_blank' rel='noopener noreferrer' className='shrink-0 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors'>
            <ExternalLink className='w-3.5 h-3.5' />
          </a>
        </div>

        {/* ── iframe ── */}
        <div className='flex-1 relative bg-white'>
          <iframe
            key={key}
            src={url}
            className='w-full h-full border-0'
            title={title}
            sandbox='allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox'
          />

          {/* Overlay shown only if iframe fails — transparent by default, visible via CSS if blocked */}
          <div
            className='absolute inset-0 bg-background flex-col items-center justify-center gap-5 hidden'
            id='iframe-blocked-fallback'
          >
            <div className='flex flex-col items-center gap-4 text-center px-8'>
              {icon && <div className='opacity-30 scale-150'>{icon}</div>}
              <h2 className='text-xl font-semibold text-muted-foreground'>Can&apos;t open this page here</h2>
              <p className='text-sm text-muted-foreground max-w-xs'>
                <strong>{title}</strong> doesn&apos;t allow embedding. Click below to open it in a new tab.
              </p>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity'
              >
                <ExternalLink className='w-4 h-4' /> Open {title}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BrowserWindow
