"use client"
import React from 'react'
import { Linkedin, Github, User, FolderOpen, Twitter, Globe, FileText, Wifi, BatteryMedium, Signal } from 'lucide-react'
import Image from 'next/image'
import About from './about'
import ProofOfWork from './proofofwork'
import BrowserWindow from './browserwindow'
import MusicPlayer from './musicplayer'
import { Projects } from '@/lib/projects'

// ─── Desktop Icon (left-side shortcut) ───────────────────────────────────────
const DesktopIcon = ({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className='flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/15 active:bg-white/25 transition-all duration-150 w-[72px] group'
  >
    <div className='drop-shadow-lg group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-150'>
      {children}
    </div>
    <span className='text-white text-[10px] font-medium text-center drop-shadow-md leading-tight bg-black/50 backdrop-blur-sm rounded-md px-1.5 py-0.5 w-full truncate'>
      {label}
    </span>
  </button>
)

// ─── Dock Button (taskbar) ────────────────────────────────────────────────────
const DockBtn = ({
  children,
  label,
  onClick,
  active,
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
  active?: boolean
}) => (
  <div className='relative group flex flex-col items-center'>
    <span className='absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none z-30 shadow-xl border border-white/10'>
      {label}
    </span>
    <button
      onClick={onClick}
      className='w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-125 hover:-translate-y-2 shadow-2xl active:scale-95'
    >
      {children}
    </button>
    <span className={`w-1 h-1 rounded-full bg-white/80 absolute -bottom-2 transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`} />
  </div>
)

// ─── Project Browser Window ───────────────────────────────────────────────────
const ProjectBrowserWindow = ({
  title,
  close,
}: {
  title: string
  close: () => void
}) => {
  const project = Projects.find((p) => p.title.trim() === title.trim())
  if (!project) return null
  return (
    <BrowserWindow
      url={project.liveLink}
      title={project.title.trim()}
      close={close}
    />
  )
}

// ─── Clock ───────────────────────────────────────────────────────────────────
const ClockWidget = () => {
  const [time, setTime] = React.useState<Date | null>(null)
  React.useEffect(() => {
    setTime(new Date())
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  if (!time) return <div className='w-24 h-8' /> // placeholder prevents layout shift
  return (
    <div className='text-right text-white select-none'>
      <div className='text-sm font-semibold'>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className='text-[10px] text-white/70'>
        {time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
      </div>
    </div>
  )
}

// ─── Android Status Clock ───────────────────────────────────────────────────
const AndroidStatusClock = () => {
  const [time, setTime] = React.useState<Date | null>(null)
  React.useEffect(() => {
    setTime(new Date())
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  if (!time) return <div className='w-10 h-4' />
  return (
    <span className='text-white text-sm font-semibold select-none'>
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  )
}

// ─── Android Home Clock ───────────────────────────────────────────────────────
const AndroidHomeClock = () => {
  const [time, setTime] = React.useState<Date | null>(null)
  React.useEffect(() => {
    setTime(new Date())
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  if (!time) return <div className='w-48 h-24' />
  return (
    <div className='select-none'>
      <div className='text-[72px] font-extralight text-white leading-none tracking-tight drop-shadow-lg'>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className='text-base text-white/65 mt-2 font-light drop-shadow'>
        {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
      </div>
    </div>
  )
}

// ─── Android App Icon ─────────────────────────────────────────────────────────
const AndroidAppIcon = ({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className='flex flex-col items-center gap-2 active:scale-90 transition-transform duration-100'
  >
    {children}
    <span className='text-white text-[10px] font-medium text-center drop-shadow-md leading-tight max-w-[64px] truncate'>
      {label}
    </span>
  </button>
)

// ─── Resume Window ───────────────────────────────────────────────────────────
const ResumeWindow = ({ close }: { close: () => void }) => (
  <div className='absolute inset-0 flex items-center justify-center z-50'>
    <div className='md:w-[78%] md:h-[92%] w-[96%] h-[92%] rounded-xl flex flex-col overflow-hidden shadow-2xl'
      style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}>
      {/* macOS title bar */}
      <div className='flex items-center gap-2 px-4 py-3 shrink-0 border-b'
        style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
        <button onClick={close} className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors' />
        <span className='w-3 h-3 rounded-full bg-yellow-400' />
        <span className='w-3 h-3 rounded-full bg-green-500' />
        <span className='flex-1 text-center text-xs font-medium text-white/40 tracking-widest uppercase'>Resume — Aditya Raj</span>
        <a
          href='/Aditya_Raj_Resume.pdf'
          download
          className='text-white/50 hover:text-white text-[11px] border border-white/15 px-2.5 py-1 rounded-md transition-all hover:bg-white/10 shrink-0'
        >
          ↓ Download
        </a>
      </div>
      <iframe
        src='/Aditya_Raj_Resume.pdf'
        className='flex-1 w-full'
        title='Resume'
      />
    </div>
  </div>
)

// ─── Main Desktop ─────────────────────────────────────────────────────────────
type WinState = {
  about: boolean
  proofofwork: boolean
  resume: boolean
  project: string | null
}

const Desktop = () => {
  const [win, setWin] = React.useState<WinState>({
    about: false,
    proofofwork: false,
    resume: false,
    project: null,
  })

  const open = (key: keyof Omit<WinState, 'project'>) =>
    setWin((w) => ({ ...w, [key]: true }))
  const close = (key: keyof Omit<WinState, 'project'>) =>
    setWin((w) => ({ ...w, [key]: false }))
  const openProject = (title: string) =>
    setWin((w) => ({ ...w, project: title }))
  const closeProject = () =>
    setWin((w) => ({ ...w, project: null }))

  const openNewTab = (url: string) => window.open(url, '_blank', 'noopener,noreferrer')
  // Old Portfolio link points to /os since that IS the OS page now;
  // the classic portfolio is at /
  const openClassic = () => window.open('/', '_blank', 'noopener,noreferrer')

  const desktopProjects = Projects.slice(0, 4)

  return (
    <div className='h-screen w-full overflow-hidden relative select-none'>

      {/* ── Background (shared) ── */}
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center" />
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none' />

      {/* ════════════ DESKTOP LAYOUT (md+) ════════════ */}

      {/* ── Menu Bar (top) ── */}
      <div className='hidden md:flex absolute top-0 left-0 right-0 h-8 items-center justify-between px-4 z-20'
        style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(30px) saturate(180%)' }}>
        <div className='flex items-center gap-4'>
          <span className='text-white text-xs font-semibold tracking-wide'>Aditya Raj</span>
          <span className='text-white/40 text-xs'>Portfolio</span>
        </div>
        <div className='flex items-center gap-3'>
          <Wifi className='w-3.5 h-3.5 text-white/70' />
          <BatteryMedium className='w-4 h-4 text-white/70' />
          <ClockWidget />
        </div>
      </div>

      {/* ── Left-side desktop icons ── */}
      <div className='hidden md:flex absolute top-12 left-4 z-10 gap-2 items-start'>

        {/* Column 1 — App shortcuts */}
        <div className='flex flex-col gap-1'>
          <DesktopIcon label='About Me' onClick={() => open('about')}>
            <div className='w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg'>
              <User className='w-6 h-6 text-white' />
            </div>
          </DesktopIcon>

          <DesktopIcon label='Projects' onClick={() => open('proofofwork')}>
            <div className='w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center shadow-lg'>
              <FolderOpen className='w-6 h-6 text-white' />
            </div>
          </DesktopIcon>

          <DesktopIcon label='LinkedIn' onClick={() => openNewTab('https://www.linkedin.com/in/adityyaraj/')}>
            <div className='w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg'>
              <Linkedin className='w-6 h-6 text-white' />
            </div>
          </DesktopIcon>

          <DesktopIcon label='GitHub' onClick={() => openNewTab('https://github.com/adityyaraj')}>
            <div className='w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center shadow-lg'>
              <Github className='w-6 h-6 text-white' />
            </div>
          </DesktopIcon>

          <DesktopIcon label='X / Twitter' onClick={() => openNewTab('https://x.com/adityyaraj')}>
            <div className='w-10 h-10 rounded-xl bg-black border border-white/20 flex items-center justify-center shadow-lg'>
              <Twitter className='w-5 h-5 text-white fill-white' />
            </div>
          </DesktopIcon>

          <DesktopIcon label='Old Portfolio' onClick={openClassic}>
            <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg'>
              <Globe className='w-6 h-6 text-white' />
            </div>
          </DesktopIcon>

          <DesktopIcon label='Resume' onClick={() => open('resume')}>
            <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg'>
              <FileText className='w-6 h-6 text-white' />
            </div>
          </DesktopIcon>
        </div>

        {/* Column 2 — Project shortcuts */}
        <div className='flex flex-col gap-1'>
          <p className='text-white/60 text-[9px] text-center uppercase tracking-widest mb-0.5 drop-shadow'>
            Projects
          </p>
          {desktopProjects.map((project) => (
            <DesktopIcon
              key={project.title}
              label={project.title.trim()}
              onClick={() => openProject(project.title.trim())}
            >
              <div className='w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-lg'>
                <Image
                  src={project.image}
                  width={40}
                  height={40}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
              </div>
            </DesktopIcon>
          ))}
        </div>

      </div>

      {/* ── Music Player (right side, desktop only) ── */}
      <div className='hidden md:block absolute right-4 top-12 z-10' style={{ bottom: 88 }}>
        <MusicPlayer />
      </div>

      {/* ── Dock / Taskbar (desktop only) ── */}
      <div className='hidden md:flex absolute bottom-0 left-0 right-0 h-[72px] items-center justify-center z-20'
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)' }}>

        {/* Dock pill */}
        <div className='flex items-end gap-3 px-5 py-2.5 rounded-2xl mb-2 shadow-2xl border'
          style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(40px) saturate(180%)', borderColor: 'rgba(255,255,255,0.18)' }}>

          <DockBtn label='About Me' onClick={() => open('about')} active={win.about}>
            <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg'>
              <User className='w-6 h-6 text-white' />
            </div>
          </DockBtn>

          <DockBtn label='Projects' onClick={() => open('proofofwork')} active={win.proofofwork}>
            <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg'>
              <FolderOpen className='w-6 h-6 text-white' />
            </div>
          </DockBtn>

          <div className='w-px h-8 self-center mx-1' style={{ background: 'rgba(255,255,255,0.2)' }} />

          <DockBtn label='LinkedIn' onClick={() => openNewTab('https://www.linkedin.com/in/adityyaraj/')}>
            <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg'>
              <Linkedin className='w-6 h-6 text-white' />
            </div>
          </DockBtn>

          <DockBtn label='GitHub' onClick={() => openNewTab('https://github.com/adityyaraj')}>
            <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg'>
              <Github className='w-6 h-6 text-white' />
            </div>
          </DockBtn>

          <DockBtn label='X / Twitter' onClick={() => openNewTab('https://x.com/adityyaraj')}>
            <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/20 flex items-center justify-center shadow-lg'>
              <Twitter className='w-5 h-5 text-white fill-white' />
            </div>
          </DockBtn>

          <div className='w-px h-8 self-center mx-1' style={{ background: 'rgba(255,255,255,0.2)' }} />

          <DockBtn label='Resume' onClick={() => open('resume')} active={win.resume}>
            <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg'>
              <FileText className='w-6 h-6 text-white' />
            </div>
          </DockBtn>

          <DockBtn label='Classic Portfolio' onClick={openClassic}>
            <div className='w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg'
              style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' }}>
              <Globe className='w-6 h-6 text-white' />
            </div>
          </DockBtn>

        </div>
      </div>

      {/* ════════════ MOBILE ANDROID HOME SCREEN (< md) ════════════ */}
      <div className='md:hidden absolute inset-0 flex flex-col'>

        {/* Android Status Bar */}
        <div className='flex items-center justify-between px-5 pt-3.5 pb-1.5 relative z-20'
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)' }}>
          <AndroidStatusClock />
          <div className='flex items-center gap-2'>
            <Signal className='w-3.5 h-3.5 text-white' />
            <Wifi className='w-3.5 h-3.5 text-white' />
            <BatteryMedium className='w-4 h-4 text-white' />
          </div>
        </div>

        {/* Home Screen — scrollable */}
        <div className='flex-1 flex flex-col px-5 overflow-y-auto relative z-10 pb-2'>

          {/* Big Clock Widget */}
          <div className='mt-8 mb-10'>
            <AndroidHomeClock />
          </div>

          {/* App Icon Grid */}
          <div className='grid grid-cols-4 gap-x-3 gap-y-7'>
            <AndroidAppIcon label='About' onClick={() => open('about')}>
              <div className='w-14 h-14 rounded-[22px] bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30'>
                <User className='w-7 h-7 text-white' />
              </div>
            </AndroidAppIcon>

            <AndroidAppIcon label='Projects' onClick={() => open('proofofwork')}>
              <div className='w-14 h-14 rounded-[22px] bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30'>
                <FolderOpen className='w-7 h-7 text-white' />
              </div>
            </AndroidAppIcon>

            <AndroidAppIcon label='LinkedIn' onClick={() => openNewTab('https://www.linkedin.com/in/adityyaraj/')}>
              <div className='w-14 h-14 rounded-[22px] bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30'>
                <Linkedin className='w-7 h-7 text-white' />
              </div>
            </AndroidAppIcon>

            <AndroidAppIcon label='GitHub' onClick={() => openNewTab('https://github.com/adityyaraj')}>
              <div className='w-14 h-14 rounded-[22px] bg-gray-800 flex items-center justify-center shadow-lg shadow-black/40'>
                <Github className='w-7 h-7 text-white' />
              </div>
            </AndroidAppIcon>

            <AndroidAppIcon label='Twitter' onClick={() => openNewTab('https://x.com/adityyaraj')}>
              <div className='w-14 h-14 rounded-[22px] bg-black border border-white/20 flex items-center justify-center shadow-lg shadow-black/50'>
                <Twitter className='w-6 h-6 text-white fill-white' />
              </div>
            </AndroidAppIcon>

            <AndroidAppIcon label='Resume' onClick={() => open('resume')}>
              <div className='w-14 h-14 rounded-[22px] bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30'>
                <FileText className='w-7 h-7 text-white' />
              </div>
            </AndroidAppIcon>

            <AndroidAppIcon label='Portfolio' onClick={openClassic}>
              <div className='w-14 h-14 rounded-[22px] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30'>
                <Globe className='w-7 h-7 text-white' />
              </div>
            </AndroidAppIcon>
          </div>

          {/* Section Divider */}
          <div className='border-t border-white/10 my-7 mx-2' />

          {/* Projects Section */}
          <p className='text-white/50 text-[10px] uppercase tracking-widest mb-4'>Projects</p>
          <div className='grid grid-cols-4 gap-x-3 gap-y-7 pb-6'>
            {desktopProjects.map((project) => (
              <AndroidAppIcon
                key={project.title}
                label={project.title.trim()}
                onClick={() => openProject(project.title.trim())}
              >
                <div className='w-14 h-14 rounded-[22px] overflow-hidden border border-white/20 shadow-lg shadow-black/40'>
                  <Image
                    src={project.image}
                    width={56}
                    height={56}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              </AndroidAppIcon>
            ))}
          </div>

        </div>

        {/* Bottom Dock + Android Gesture Bar */}
        <div className='relative z-20 flex flex-col items-center pt-3 pb-6'
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)' }}>
          <div className='flex items-center gap-4 px-6 py-3 rounded-3xl mb-4 border shadow-2xl'
            style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(40px) saturate(180%)', borderColor: 'rgba(255,255,255,0.18)' }}>

            <button onClick={() => open('about')}
              className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg ${win.about ? 'ring-2 ring-white/50' : ''}`}>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600' />
              <User className='relative w-6 h-6 text-white' />
            </button>

            <button onClick={() => open('proofofwork')}
              className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg ${win.proofofwork ? 'ring-2 ring-white/50' : ''}`}>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500' />
              <FolderOpen className='relative w-6 h-6 text-white' />
            </button>

            <button onClick={() => open('resume')}
              className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg ${win.resume ? 'ring-2 ring-white/50' : ''}`}>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600' />
              <FileText className='relative w-6 h-6 text-white' />
            </button>

            <button onClick={openClassic}
              className='relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg'>
              <div className='absolute inset-0 rounded-2xl' style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }} />
              <Globe className='relative w-6 h-6 text-white' />
            </button>

          </div>
          {/* Android gesture indicator */}
          <div className='w-32 h-1 bg-white/55 rounded-full' />
        </div>

      </div>

      {/* ── Windows (shared overlay — works for both layouts) ── */}
      {win.about       && <About           close={() => close('about')} />}
      {win.proofofwork && <ProofOfWork     close={() => close('proofofwork')} />}
      {win.resume      && <ResumeWindow    close={() => close('resume')} />}
      {win.project     && <ProjectBrowserWindow title={win.project} close={closeProject} />}

    </div>
  )
}

export default Desktop
