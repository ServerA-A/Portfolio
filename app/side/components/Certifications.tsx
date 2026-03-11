"use client"
import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Award, Trophy, Star } from "lucide-react"

const certifications = [
  {
    title: "AI-Powered NLP",
    issuer: "AlgoTutor",
    date: "Jun 2025",
    icon: "🧠",
    border: "border-purple-500/25",
    bg: "bg-purple-500/8",
    accent: "text-purple-300",
    hover: "hover:border-purple-500/50 hover:bg-purple-500/15",
  },
  {
    title: "Microsoft AI Applied Skills",
    issuer: "Microsoft – Azure",
    date: "Aug 2024",
    icon: "☁️",
    border: "border-blue-500/25",
    bg: "bg-blue-500/8",
    accent: "text-blue-300",
    hover: "hover:border-blue-500/50 hover:bg-blue-500/15",
  },
  {
    title: "AI For India 2.0",
    issuer: "GUVI",
    date: "Sept 2023",
    icon: "🇮🇳",
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/8",
    accent: "text-emerald-300",
    hover: "hover:border-emerald-500/50 hover:bg-emerald-500/15",
  },
]

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 70%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-yellow-400 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Certifications &amp; Achievements
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {/* Certifications column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <Award className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`p-5 rounded-2xl border ${cert.border} ${cert.bg} ${cert.hover} flex items-center gap-4 transition-all duration-200`}
                >
                  <span className="text-2xl shrink-0">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold ${cert.accent} text-sm leading-tight`}>{cert.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-slate-500 text-xs shrink-0">{cert.date}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Achievements</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-7 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/8 to-orange-500/5 relative overflow-hidden group hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-yellow-500/10 rounded-full blur-3xl group-hover:opacity-150 transition-opacity" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 shrink-0">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-2 leading-tight">
                    Top 20 – Cyber Security Hack-quest
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    Secured Top 20 rank out of{" "}
                    <span className="text-yellow-300 font-semibold">100+ participants</span>{" "}
                    in a competitive cybersecurity hackathon, demonstrating strong
                    problem-solving and technical depth under pressure.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                    Jan 2024
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
