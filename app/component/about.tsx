"use client"
import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail, MapPin, Briefcase, Code2, Brain, Sparkles, Download, ExternalLink } from 'lucide-react'

interface AboutProps {
  close: () => void
}

const skills = [
  {
    label: 'Languages',
    accent: '#60a5fa',
    bg: 'rgba(96,165,250,0.1)',
    border: 'rgba(96,165,250,0.2)',
    items: ['Python', 'TypeScript', 'JavaScript', 'C/C++', 'Java', 'SQL'],
  },
  {
    label: 'Frameworks',
    accent: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.2)',
    items: ['Next.js', 'React', 'Node.js', 'Express.js', 'TensorFlow', 'LangChain'],
  },
  {
    label: 'AI / ML',
    accent: '#c084fc',
    bg: 'rgba(192,132,252,0.1)',
    border: 'rgba(192,132,252,0.2)',
    items: ['RAG', 'Deep Q-Learning', 'Embeddings', 'Vector Databases', 'LangGraph', 'Fine-Tuning'],
  },
  {
    label: 'Tools',
    accent: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.2)',
    items: ['Git', 'PostgreSQL', 'MongoDB', 'Linux', 'Jupyter', 'VS Code'],
  },
]

const stats = [
  { value: '12+', label: 'Projects' },
  { value: '5+', label: 'Years Coding' },
  { value: '6+', label: 'Languages' },
  { value: '∞', label: 'Curiosity' },
]

const socials = [
  { icon: <Github className='w-4 h-4' />,   href: 'https://github.com/adityyaraj',            label: 'GitHub' },
  { icon: <Linkedin className='w-4 h-4' />, href: 'https://linkedin.com/in/adityyaraj',        label: 'LinkedIn' },
  { icon: <Twitter className='w-4 h-4' />,  href: 'https://x.com/adityyaraj',                  label: 'X' },
  { icon: <Mail className='w-4 h-4' />,     href: 'mailto:adityarajwk@gmail.com',              label: 'Mail' },
]

const About = ({ close }: AboutProps) => (
  <div className='absolute inset-0 flex items-center justify-center z-50 p-4'>
    <div
      className='w-full max-w-4xl h-[90%] rounded-2xl flex flex-col overflow-hidden shadow-2xl'
      style={{
        background: 'linear-gradient(145deg, #0d0d18 0%, #111827 60%, #0f172a 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05) inset',
      }}
    >
      {/* ── macOS title bar ── */}
      <div
        className='flex items-center gap-2 px-4 py-3 shrink-0 border-b'
        style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <button onClick={close} className='w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all' />
        <span className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
        <span className='w-3 h-3 rounded-full bg-[#28c840]' />
        <span className='flex-1 text-center text-[11px] font-medium tracking-[0.2em] uppercase' style={{ color: 'rgba(255,255,255,0.3)' }}>
          About Me
        </span>
      </div>

      {/* ── Body ── */}
      <div className='flex-1 overflow-hidden flex flex-col md:flex-row'>

        {/* ── Left panel ── */}
        <div
          className='md:w-60 shrink-0 flex flex-col items-center gap-4 p-6 border-r overflow-y-auto'
          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {/* Avatar */}
          <div className='relative mt-2'>
            <div
              className='absolute -inset-1.5 rounded-full blur-xl opacity-50'
              style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
            />
            <div className='relative rounded-full p-0.5' style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
              <Image
                src='/profile.png'
                width={112}
                height={112}
                alt='Aditya'
                className='rounded-full object-cover block'
                style={{ background: '#1e293b' }}
              />
            </div>
            {/* Online dot */}
            <span className='absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0d0d18] shadow-md' />
          </div>

          {/* Name + title */}
          <div className='text-center'>
            <h1 className='text-white text-lg font-bold tracking-tight leading-tight'>Aditya Raj</h1>
            <p className='text-[11px] mt-1 font-medium' style={{ color: 'rgba(165,180,252,0.8)' }}>
              AI Engineer &amp; Web Dev
            </p>
          </div>

          {/* Status badge */}
          <div
            className='flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold'
            style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}
          >
            <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
            Open to work
          </div>

          {/* Meta */}
          <div className='flex flex-col gap-2 w-full text-[11px]' style={{ color: 'rgba(255,255,255,0.4)' }}>
            <div className='flex items-center gap-2'>
              <MapPin className='w-3.5 h-3.5 shrink-0' />
              <span>India</span>
            </div>
            <div className='flex items-center gap-2'>
              <Briefcase className='w-3.5 h-3.5 shrink-0' />
              <span>Student &amp; Builder</span>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-px' style={{ background: 'rgba(255,255,255,0.07)' }} />

          {/* Social icons */}
          <div className='grid grid-cols-2 gap-2 w-full'>
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] font-medium transition-all hover:scale-[1.03]'
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.55)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>

          {/* Resume buttons */}
          <div className='flex flex-col gap-2 w-full mt-auto'>
            <a
              href='/Aditya_Raj_Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]'
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
            >
              <ExternalLink className='w-3.5 h-3.5' /> View Resume
            </a>
            <a
              href='/Aditya_Raj_Resume.pdf'
              download
              className='flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold transition-all hover:bg-white/10'
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
            >
              <Download className='w-3.5 h-3.5' /> Download
            </a>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className='flex-1 flex flex-col overflow-hidden'>

          {/* Header accent strip */}
          <div className='relative shrink-0 h-24 overflow-hidden'>
            <div
              className='absolute inset-0'
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(168,85,247,0.2) 50%, rgba(20,184,166,0.15) 100%)' }}
            />
            {/* decorative blobs */}
            <div className='absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl' style={{ background: 'rgba(99,102,241,0.3)' }} />
            <div className='absolute -bottom-4 left-16 w-24 h-24 rounded-full blur-2xl' style={{ background: 'rgba(168,85,247,0.25)' }} />
            <div className='absolute inset-0 flex items-center px-6 gap-3'>
              <Sparkles className='w-5 h-5 text-indigo-300' />
              <div>
                <p className='text-white font-bold text-base'>Building the future with AI</p>
                <p className='text-white/50 text-xs mt-0.5'>Passionate about intelligent systems &amp; great products</p>
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <div className='flex-1 overflow-y-auto p-6 flex flex-col gap-6'>

            {/* Stats */}
            <div className='grid grid-cols-4 gap-3'>
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className='rounded-xl p-3 text-center'
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className='text-white text-xl font-bold'>{value}</p>
                  <p className='text-[10px] mt-0.5 uppercase tracking-widest' style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div>
              <div className='flex items-center gap-2 mb-3'>
                <Code2 className='w-3.5 h-3.5 text-indigo-400' />
                <h2 className='text-[11px] font-semibold uppercase tracking-[0.15em]' style={{ color: 'rgba(255,255,255,0.5)' }}>Bio</h2>
              </div>
              <p className='text-sm leading-relaxed' style={{ color: 'rgba(255,255,255,0.65)' }}>
                I&apos;m an <span className='text-indigo-300 font-medium'>AI Engineer</span> and{' '}
                <span className='text-purple-300 font-medium'>Web Developer</span> who loves turning ambitious ideas
                into intelligent, production-ready applications. I work across the full stack — from crafting clean
                UIs with Next.js to building agentic AI pipelines with LangGraph and RAG.
                Currently studying and building cool things at the intersection of{' '}
                <span className='text-teal-300 font-medium'>deep learning</span> and{' '}
                <span className='text-pink-300 font-medium'>modern web development</span>.
              </p>
            </div>

            {/* Skills */}
            <div>
              <div className='flex items-center gap-2 mb-4'>
                <Brain className='w-3.5 h-3.5 text-purple-400' />
                <h2 className='text-[11px] font-semibold uppercase tracking-[0.15em]' style={{ color: 'rgba(255,255,255,0.5)' }}>Skills</h2>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {skills.map((group) => (
                  <div
                    key={group.label}
                    className='rounded-xl p-3'
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <p
                      className='text-[10px] font-semibold uppercase tracking-widest mb-2.5'
                      style={{ color: group.accent }}
                    >
                      {group.label}
                    </p>
                    <div className='flex flex-wrap gap-1.5'>
                      {group.items.map((s) => (
                        <span
                          key={s}
                          className='text-[11px] px-2.5 py-0.5 rounded-full font-medium'
                          style={{ background: group.bg, color: group.accent, border: `1px solid ${group.border}` }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
)

export default About

