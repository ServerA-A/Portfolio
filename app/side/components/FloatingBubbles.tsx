"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

interface Bubble {
  id: number
  size: number
  x: number
  duration: number
  delay: number
  xOffset: number
  popped?: boolean
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const bubbleCount = isMobile ? 10 : 30
    
    // Decreased bubble count for a cleaner, less cluttered look
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 20, // 20px to 140px
      x: Math.random() * 100, // 0% to 100%vw
      duration: Math.random() * 25 + 15, // 15s to 40s
      delay: Math.random() * 15, // 0s to 15s
      xOffset: Math.random() * 200 - 100, // -100px to 100px drift
    }))
    setBubbles(newBubbles)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (bubbles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-70">
      {bubbles.map((bubble) => {
        // Calculate a light parallax/repel effect based on mouse position
        // This creates a subtle interactive feel without aggressive tracking
        const dx = (mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 1000) * (bubble.x / 100)) * 0.05
        const dy = (mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 1000) / 2) * 0.05

        return (
          <motion.div
            key={bubble.id}
            className="absolute pointer-events-none"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              bottom: -200,
            }}
            animate={{
              y: ["0vh", "-120vh"],
              x: [`${dx}px`, `${bubble.xOffset + dx}px`, `${-bubble.xOffset + dx}px`, `${dx}px`]
            }}
            transition={{
              y: {
                duration: bubble.duration,
                repeat: Infinity,
                ease: "linear",
                delay: bubble.delay,
              },
              x: {
                duration: bubble.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bubble.delay,
                times: [0, 0.33, 0.66, 1]
              }
            }}
          >
            <motion.div
              className={`w-full h-full rounded-full pointer-events-none md:pointer-events-auto flex items-center justify-center relative ${
                !bubble.popped ? "bg-gradient-to-tr from-purple-500/20 via-cyan-500/20 to-transparent backdrop-blur-[2px] border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.1)] cursor-pointer" : ""
              }`}
              onClick={() => {
                if (!bubble.popped) {
                  setBubbles(prev => prev.map(b => b.id === bubble.id ? { ...b, popped: true } : b))
                }
              }}
              whileHover={!bubble.popped ? { 
                scale: 1.15, 
                backgroundColor: "rgba(139, 92, 246, 0.4)",
                borderColor: "rgba(52, 211, 238, 0.6)",
                transition: { duration: 0.2 }
              } : {}}
              whileTap={!bubble.popped ? { scale: 0.9 } : {}}
              animate={bubble.popped ? {
                scale: [1, 1.2, 1.5],
                opacity: [1, 0.8, 0],
              } : {
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Sparks when popped */}
              {bubble.popped && (
                <>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-cyan-400/80"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-purple-400/80"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                  />
                </>
              )}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
