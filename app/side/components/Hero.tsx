"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import dynamic from "next/dynamic"
import { Mail, Github, Linkedin, ChevronDown, FileText } from "lucide-react"

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false })

const roles = [
  "AI / ML Engineer",
  "Reinforcement Learning",
  "LLM Applications",
  "Full-Stack Developer",
  "Deep Learning Researcher",
]

function TypewriterText() {
  const [displayed, setDisplayed] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1))
          } else {
            setIsDeleting(false)
            setRoleIndex((i) => (i + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 95,
    )
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <div className="text-xl md:text-3xl font-light h-10 flex items-center justify-center">
      <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
        {displayed}
      </span>
      <span className="animate-pulse text-cyan-400 ml-0.5 font-thin">|</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Radial atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/70 via-transparent to-[#050508] pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 sm:pt-28">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[64px] sm:text-7xl md:text-[110px] font-black tracking-tight mb-3 sm:mb-4 leading-[0.9]"
        >
          <span className="text-white">Aditya </span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Raj
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <TypewriterText />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Building production-ready AI products with{" "}
          <span className="text-indigo-300 font-medium">PyTorch</span>,{" "}
          <span className="text-cyan-300 font-medium">LangChain</span>, RAG
          pipelines, and modern web frameworks. Turning cutting-edge research into
          real-world applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <a
            href="/Aditya_Raj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 transition-all duration-200 text-sm touch-manipulation"
          >
            <FileText size={17} /> View Resume
          </a>
          <a
            href="mailto:adityarajwk@gmail.com"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-white/15 text-white hover:bg-white/5 hover:border-indigo-400/40 hover:scale-105 active:scale-95 transition-all duration-200 text-sm touch-manipulation"
          >
            <Mail size={17} /> Get in Touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex justify-center gap-3 sm:gap-4"
        >
          {[
            { href: "https://github.com/adityyaraj",   icon: Github,   label: "GitHub" },
            { href: "https://linkedin.com/in/adityyaraj", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:adityarajwk@gmail.com",     icon: Mail,     label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 sm:p-3.5 rounded-2xl border border-white/10 text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 active:bg-indigo-500/20 transition-all duration-200 touch-manipulation"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
