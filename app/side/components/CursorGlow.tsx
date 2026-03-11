"use client"
import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    let cx = window.innerWidth / 2
    let cy = window.innerHeight / 2
    let tx = cx, ty = cy
    let raf: number

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }

    const tick = () => {
      cx += (tx - cx) * 0.07
      cy += (ty - cy) * 0.07
      if (ref.current) {
        ref.current.style.transform = `translate(${cx - 350}px, ${cy - 350}px)`
        ref.current.style.opacity = "1"
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[1] opacity-0"
      style={{
        width: 700,
        height: 700,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.09) 0%, rgba(34,211,238,0.04) 45%, transparent 70%)",
      }}
    />
  )
}
