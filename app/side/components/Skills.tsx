"use client"
import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "motion/react"

const skillCategories = [
  {
    title: "Languages", icon: "⚡",
    gradient: "from-yellow-500/10 to-orange-500/10",
    border: "border-yellow-500/20",
    tag: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300 hover:bg-yellow-500/20 hover:text-yellow-100",
    skills: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks", icon: "🚀",
    gradient: "from-indigo-500/10 to-purple-500/10",
    border: "border-indigo-500/20",
    tag: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-100",
    skills: ["React", "Next.js", "Node.js", "Express.js", "TensorFlow", "PyTorch", "LangChain", "LangGraph", "HuggingFace Transformers"],
  },
  {
    title: "AI / ML", icon: "🤖",
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/20",
    tag: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-100",
    skills: ["Deep Q-Learning", "Bayesian Optimization", "RAG", "Embeddings", "Vector Databases", "Neural Networks", "CNNs", "Reinforcement Learning", "Transfer Learning", "Hyperparameter Tuning", "Feature Engineering"],
  },
  {
    title: "Tools & Platforms", icon: "🛠️",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub", "Jupyter", "Linux", "Pandas", "NumPy", "Scikit-learn", "LiveKit", "Chainlit"],
  },
]

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    setStyle({
      transform: `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1)`,
      transition: "transform 0.1s ease-out",
    })
  }, [])

  const onLeave = useCallback(() => {
    setStyle({ transform: "perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)", transition: "transform 0.5s ease-out" })
  }, [])

  return (
    <div ref={cardRef} style={style} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {children}
    </div>
  )
}

export default function Skills() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 75% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)" }}
      />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-cyan-400 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Technical Skills</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A comprehensive toolkit spanning AI/ML research to full-stack production deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <TiltCard
                className={`h-full p-5 sm:p-7 rounded-3xl bg-gradient-to-br ${cat.gradient} border ${cat.border} backdrop-blur-sm group`}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="text-2xl sm:text-3xl">{cat.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border ${cat.tag} transition-colors duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

