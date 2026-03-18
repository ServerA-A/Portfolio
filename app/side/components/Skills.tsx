"use client"
import { useRef } from "react"
import { motion, useInView } from "motion/react"

import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"

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

export default function Skills() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 75% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)" }}
      />
      
      <div className="w-full overflow-hidden mb-16 opacity-50">
        <Marquee className="[--duration:50s]" pauseOnHover>
          {skillCategories.flatMap(c => c.skills).map((skill, i) => (
            <span key={`${skill}-${i}`} className="mx-6 text-xl sm:text-2xl font-black text-white/30 tracking-widest uppercase items-center flex whitespace-nowrap shrink-0">
              {skill}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((cat, i) => {
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="h-full"
              >
                <MagicCard
                  className={`relative flex flex-col h-full p-0 rounded-3xl bg-black/20 border ${cat.border} backdrop-blur-sm group overflow-hidden`}
                  gradientColor="rgba(255,255,255,0.05)"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-30`} />
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-2xl sm:text-3xl">
                        {cat.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{cat.title}</h3>
                    </div>

                    <div className="mt-auto relative w-full">
                      <motion.div 
                        className="flex flex-wrap gap-2 sm:gap-3 mt-4"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                          visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 + (i * 0.1) } },
                          hidden: {}
                        }}
                      >
                        {cat.skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8, y: 10 },
                              visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 10 } }
                            }}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium border ${cat.tag} bg-black/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-default shadow-lg`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

