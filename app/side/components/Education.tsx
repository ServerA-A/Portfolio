"use client"
import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech – Computer Science & Engineering",
    spec: "AI / ML Specialization",
    grade: "CGPA: 7.6",
    location: "Punjab, India",
    period: "Aug 2023 – May 2027",
    gradient: "from-indigo-500/10 to-blue-500/10",
    border: "border-indigo-500/25",
    accent: "text-indigo-400",
    glow: "bg-indigo-500",
  },
  {
    institution: "Saint Joseph's School",
    degree: "Intermediate (Class XII)",
    spec: "Matriculation (Class X)",
    grade: "XII: 67% • X: 86%",
    location: "Kahalgaon, Bihar",
    period: "Apr 2019 – Mar 2023",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/25",
    accent: "text-emerald-400",
    glow: "bg-emerald-500",
  },
]

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 60%, rgba(52,211,238,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-emerald-400 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Education</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative p-5 sm:p-8 rounded-3xl bg-gradient-to-br ${edu.gradient} border ${edu.border} hover:border-opacity-70 hover:shadow-xl transition-all duration-300 group overflow-hidden`}
            >
              {/* Decorative glow blob */}
              <div
                className={`absolute -top-8 -right-8 w-32 h-32 ${edu.glow} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative">
                <GraduationCap className={`w-8 h-8 sm:w-10 sm:h-10 ${edu.accent} opacity-80 mb-4 sm:mb-5`} />

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {edu.institution}
                </h3>
                <p className={`font-semibold ${edu.accent} text-sm mb-0.5`}>{edu.degree}</p>
                <p className="text-slate-400 text-sm mb-5">{edu.spec}</p>

                <div className="space-y-2.5">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-xs">
                      {edu.grade}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={13} className="shrink-0" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={13} className="shrink-0" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
