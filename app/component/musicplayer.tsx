"use client"
import React, { useRef, useState, useEffect, useCallback } from 'react'
import {
  Play, Pause, SkipBack, SkipForward,
  Volume2, VolumeX, Music, ChevronDown, ChevronUp,
} from 'lucide-react'

const tracks = [
  {
    title: 'Lofi Study',
    artist: 'Chill Beats',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    color: '#6366f1',
  },
  {
    title: 'Night Code',
    artist: 'Ambient Waves',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    color: '#a855f7',
  },
  {
    title: 'Focus Flow',
    artist: 'Deep Work',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    color: '#14b8a6',
  },
  {
    title: 'Late Hours',
    artist: 'Mellow Keys',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    color: '#f59e0b',
  },
]

function fmt(s: number) {
  if (!isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [idx, setIdx]           = useState(0)
  const [playing, setPlaying]   = useState(false)
  const [current, setCurrent]   = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume]     = useState(0.6)
  const [muted, setMuted]       = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const track = tracks[idx]

  // load new track whenever idx changes
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.src = track.src
    a.load()
    if (playing) a.play().catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = muted ? 0 : volume
  }, [volume, muted])

  const toggle = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play().catch(() => {}); setPlaying(true) }
  }, [playing])

  const prev = () => setIdx((i) => (i - 1 + tracks.length) % tracks.length)
  const next = useCallback(() => setIdx((i) => (i + 1) % tracks.length), [])

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current
    if (!a) return
    a.currentTime = Number(e.target.value)
    setCurrent(Number(e.target.value))
  }

  const pct = duration ? (current / duration) * 100 : 0

  return (
    <div
      className='flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-300'
      style={{
        width: 260,
        background: 'rgba(10,10,20,0.82)',
        backdropFilter: 'blur(40px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
      }}
    >
      {/* ── Header ── */}
      <div
        className='flex items-center justify-between px-4 py-2.5'
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className='flex items-center gap-2'>
          <Music className='w-3.5 h-3.5' style={{ color: track.color }} />
          <span className='text-[11px] font-semibold tracking-widest uppercase' style={{ color: 'rgba(255,255,255,0.4)' }}>
            Now Playing
          </span>
        </div>
        <button
          onClick={() => setCollapsed((c) => !c)}
          className='text-white/30 hover:text-white/70 transition-colors'
        >
          {collapsed ? <ChevronUp className='w-3.5 h-3.5' /> : <ChevronDown className='w-3.5 h-3.5' />}
        </button>
      </div>

      {!collapsed && (
        <>
          {/* ── Album art + info ── */}
          <div className='flex items-center gap-4 px-4 pt-4 pb-3'>
            {/* Art */}
            <div
              className='relative w-14 h-14 rounded-xl shrink-0 flex items-center justify-center shadow-lg overflow-hidden'
              style={{ background: `linear-gradient(135deg, ${track.color}55, ${track.color}22)`, border: `1px solid ${track.color}44` }}
            >
              {/* spinning disc when playing */}
              <div
                className={`w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center ${playing ? 'animate-spin' : ''}`}
                style={{ animationDuration: '3s', background: `${track.color}33` }}
              >
                <div className='w-2 h-2 rounded-full bg-white/60' />
              </div>
            </div>

            {/* Title */}
            <div className='flex-1 min-w-0'>
              <p className='text-white text-sm font-bold truncate'>{track.title}</p>
              <p className='text-[11px] truncate mt-0.5' style={{ color: 'rgba(255,255,255,0.4)' }}>{track.artist}</p>
              {/* track dots */}
              <div className='flex gap-1 mt-2'>
                {tracks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className='rounded-full transition-all'
                    style={{
                      width: i === idx ? 16 : 6,
                      height: 6,
                      background: i === idx ? track.color : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Progress bar ── */}
          <div className='px-4 pb-2'>
            <div className='relative h-1 rounded-full mb-1' style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div
                className='absolute left-0 top-0 h-full rounded-full transition-all'
                style={{ width: `${pct}%`, background: track.color }}
              />
              <input
                type='range'
                min={0}
                max={duration || 100}
                value={current}
                onChange={seek}
                className='absolute inset-0 w-full opacity-0 cursor-pointer h-full'
              />
            </div>
            <div className='flex justify-between text-[9px]' style={{ color: 'rgba(255,255,255,0.3)' }}>
              <span>{fmt(current)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          {/* ── Controls ── */}
          <div className='flex items-center justify-center gap-5 px-4 pb-4'>
            <button onClick={prev} className='text-white/40 hover:text-white/80 transition-colors'>
              <SkipBack className='w-4 h-4' />
            </button>

            <button
              onClick={toggle}
              className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95'
              style={{ background: track.color }}
            >
              {playing
                ? <Pause className='w-4 h-4 text-white' />
                : <Play className='w-4 h-4 text-white ml-0.5' />}
            </button>

            <button onClick={next} className='text-white/40 hover:text-white/80 transition-colors'>
              <SkipForward className='w-4 h-4' />
            </button>
          </div>

          {/* ── Volume ── */}
          <div
            className='flex items-center gap-2 px-4 pb-4'
          >
            <button onClick={() => setMuted((m) => !m)} className='text-white/30 hover:text-white/60 transition-colors shrink-0'>
              {muted || volume === 0
                ? <VolumeX className='w-3.5 h-3.5' />
                : <Volume2 className='w-3.5 h-3.5' />}
            </button>
            <div className='relative flex-1 h-1 rounded-full' style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div
                className='absolute left-0 top-0 h-full rounded-full'
                style={{ width: `${muted ? 0 : volume * 100}%`, background: 'rgba(255,255,255,0.4)' }}
              />
              <input
                type='range'
                min={0}
                max={1}
                step={0.01}
                value={muted ? 0 : volume}
                onChange={(e) => { setVolume(Number(e.target.value)); setMuted(false) }}
                className='absolute inset-0 w-full opacity-0 cursor-pointer h-full'
              />
            </div>
          </div>
        </>
      )}

      {/* ── Collapsed mini bar ── */}
      {collapsed && (
        <div className='flex items-center gap-3 px-4 py-3'>
          <button
            onClick={toggle}
            className='w-7 h-7 rounded-full flex items-center justify-center shrink-0'
            style={{ background: track.color }}
          >
            {playing ? <Pause className='w-3 h-3 text-white' /> : <Play className='w-3 h-3 text-white ml-0.5' />}
          </button>
          <div className='flex-1 min-w-0'>
            <p className='text-white text-xs font-semibold truncate'>{track.title}</p>
          </div>
          <button onClick={next} className='text-white/30 hover:text-white/60 transition-colors shrink-0'>
            <SkipForward className='w-3.5 h-3.5' />
          </button>
        </div>
      )}

      {/* ── Hidden audio element ── */}
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={() => setCurrent(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onEnded={next}
      />
    </div>
  )
}
