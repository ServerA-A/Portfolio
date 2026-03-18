"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "motion/react"
import { Brain, Cpu, Globe, Zap } from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"

const stats = [
  { value: 18,  suffix: "%", label: "Model accuracy boost",  icon: Brain, color: "text-indigo-400",  ring: "from-indigo-500 to-violet-500",   glow: "hover:shadow-indigo-500/20" },
  { value: 82,  suffix: "%", label: "DQN nav success rate",  icon: Cpu,   color: "text-cyan-400",    ring: "from-cyan-500 to-blue-500",      glow: "hover:shadow-cyan-500/20" },
  { value: 40,  suffix: "%", label: "Rendering speed gain",  icon: Zap,   color: "text-purple-400",  ring: "from-purple-500 to-fuchsia-500", glow: "hover:shadow-purple-500/20" },
  { value: 10,  suffix: "+", label: "Projects shipped",      icon: Globe, color: "text-emerald-400", ring: "from-emerald-500 to-teal-500",   glow: "hover:shadow-emerald-500/20" },
]

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const dur = 1600
    const step = (ts: number) => {
      if (!start) start = ts
      const pct    = Math.min((ts - start) / dur, 1)
      const eased  = 1 - Math.pow(1 - pct, 3)
      setVal(Math.round(eased * target))
      if (pct < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target])
  return <>{val}{suffix}</>
}

export default function About() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 25% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-indigo-400 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Professional Summary
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <MagicCard 
              className="relative p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-sm overflow-hidden group hover:border-indigo-500/30 transition-all duration-500"
              gradientColor="rgba(99,102,241,0.08)"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4 sm:space-y-5">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  I&apos;m an{" "}
                  <span className="text-indigo-300 font-semibold">AI/ML Engineer</span>{" "}
                  specializing in reinforcement learning, LLM applications, and AI-powered web systems.
                  I build production-ready AI products that bridge cutting-edge research with real-world impact.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  With expertise in{" "}
                  <span className="text-cyan-300 font-medium">PyTorch</span>,{" "}
                  <span className="text-cyan-300 font-medium">LangChain</span>,{" "}
                  <span className="text-cyan-300 font-medium">LangGraph</span>, and RAG pipelines, I architect
                  intelligent systems from concept to deployment — integrating{" "}
                  <span className="text-purple-300 font-medium">React</span> and{" "}
                  <span className="text-purple-300 font-medium">Next.js</span> for polished, scalable UX.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  Pursuing B.Tech in CSE (AI/ML) at{" "}
                  <span className="text-white font-semibold">Lovely Professional University</span>, Punjab, India.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {["PyTorch", "LangChain", "RAG", "Next.js", "OpenAI Gym"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 shadow-sm shadow-indigo-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="h-full"
              >
                <MagicCard
                  className={`relative h-full p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05] hover:shadow-xl ${stat.glow} transition-all duration-300 group cursor-default overflow-hidden`}
                  gradientColor="rgba(255,255,255,0.06)"
                >
                  <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${stat.ring} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
                  <div className="relative z-10 flex flex-col items-start h-full">
                    <stat.icon className={`relative w-6 h-6 sm:w-7 sm:h-7 mb-3 ${stat.color} opacity-75 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative text-3xl sm:text-4xl font-black ${stat.color} mb-1 tabular-nums mt-auto`}>
                      <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
                    </div>
                    <div className="relative text-slate-500 text-xs sm:text-sm leading-tight">{stat.label}</div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
