"use client"
import { motion } from "motion/react"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-5 leading-tight">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Open to AI/ML engineering roles, research collaborations, and exciting
            product builds. Drop a message — I respond fast.
          </p>

          {/* Primary CTA */}
          <div className="mb-8 sm:mb-10">
            <a
              href="mailto:adityarajwk@gmail.com"
              className="inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 transition-all duration-200 text-sm sm:text-base touch-manipulation"
            >
              <Mail size={18} />
              adityarajwk@gmail.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
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
                className="p-3.5 sm:p-4 rounded-2xl border border-white/10 text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 active:bg-indigo-500/20 transition-all duration-200 touch-manipulation"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Back to top + copyright */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200 group"
            >
              <ArrowUp
                size={15}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              Back to top
            </button>
            <p className="text-slate-600 text-sm">
              © 2026 Aditya Raj &nbsp;·&nbsp; Built with Next.js, Three.js &amp; Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
