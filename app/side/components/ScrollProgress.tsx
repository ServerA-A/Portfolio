"use client"
import { useEffect, useRef } from "react"

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      if (bar.current) bar.current.style.width = `${pct}%`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-white/5">
      <div
        ref={bar}
        style={{ width: "0%", boxShadow: "0 0 8px rgba(99,102,241,0.8)" }}
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400"
      />
    </div>
  )
}
