"use client"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Mail, Github, Linkedin, ChevronDown, FileText } from "lucide-react"

import { ShimmerButton } from "@/components/ui/shimmer-button"
import { BorderBeam } from "@/components/ui/border-beam"

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false })
const MiniOrb = dynamic(() => import("./MiniOrb"), { ssr: false })

const roles = [
  "AI / ML Engineer",
  "Reinforcement Learning",
  "LLM Applications",
  "Full-Stack Developer",
  "Deep Learning Researcher",
]

function TypewriterText({ className = "" }: { className?: string }) {
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
    <div className={`text-xl md:text-3xl font-light h-10 flex items-center justify-center ${className}`}>
      <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent font-semibold">
        {displayed}
      </span>
      <span className="animate-pulse text-sky-300 ml-0.5 font-thin">|</span>
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
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,185,129,0.14) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/70 via-transparent to-[#050508] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-6 max-w-6xl mx-auto pt-24 sm:pt-28">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-14">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="shrink-0 flex flex-col items-center"
          >
            <div className="relative rounded-full p-1.5 bg-gradient-to-br from-emerald-400/35 via-sky-400/25 to-cyan-400/25 shadow-2xl shadow-emerald-500/20">
              <Image
                src="/profile-pic.jpg"
                alt="Aditya Raj profile photo"
                width={260}
                height={260}
                priority
                className="h-40 w-40 sm:h-52 sm:w-52 rounded-full object-cover border-2 border-white/20 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm tracking-[0.18em] uppercase text-emerald-300/80">AI Builder</p>
            <div className="mt-4">
              <MiniOrb />
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 sm:mb-7"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight mb-3 sm:mb-4 leading-[0.92]"
            >
              <span className="text-white">Aditya </span>
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Raj
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 sm:mb-7"
            >
              <TypewriterText className="lg:justify-start" />
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-300/90 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
            >
              Building production-ready AI products with{" "}
              <span className="text-emerald-200 font-medium">PyTorch</span>,{" "}
              <span className="text-sky-200 font-medium">LangChain</span>, RAG
              pipelines, and modern web frameworks. Turning cutting-edge research into
              real-world applications.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10 sm:mb-12"
            >
              <a href="/Aditya_Raj_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <ShimmerButton className="flex items-center justify-center gap-2 font-semibold text-sm h-[50px] px-8 hover:scale-105 active:scale-95 transition-all duration-200">
                  <FileText size={17} /> View Resume
                </ShimmerButton>
              </a>
              <a
                href="mailto:adityarajwk@gmail.com"
                className="flex items-center justify-center gap-2 px-8 h-[50px] rounded-full font-semibold border border-white/15 text-white hover:bg-white/5 hover:border-sky-300/40 hover:scale-105 active:scale-95 transition-all duration-200 text-sm touch-manipulation"
              >
                <Mail size={17} /> Get in Touch
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {[
                { href: "https://github.com/adityyaraj", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/adityyaraj", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:adityarajwk@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 sm:p-3.5 rounded-2xl border border-white/10 text-slate-400 hover:text-white hover:border-emerald-300/40 hover:bg-emerald-500/10 active:bg-emerald-500/20 transition-all duration-200 touch-manipulation"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
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
