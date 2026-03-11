"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"

const navItems = [
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Training",  href: "#training" },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact" },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Intersection observer for active section
  useEffect(() => {
    const sections = navItems.map(n => document.querySelector(n.href))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`) })
      },
      { rootMargin: "-40% 0px -50% 0px" },
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050508]/85 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 py-1"
            >
              ← Main
            </Link>
            <Link href="/side" className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                AR
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors duration-200 relative group ${
                  active === item.href ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-300 ${
                    active === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          <a
            href="mailto:adityarajwk@gmail.com"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[60] text-slate-300 hover:text-white p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className={`h-px w-full bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] md:hidden bg-[#050508]/97 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-2 w-full px-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full text-center py-4 text-2xl font-bold border-b border-white/5 transition-colors ${
                    active === item.href
                      ? "text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:adityarajwk@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.38, duration: 0.3 }}
                className="mt-6 w-full text-center py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
