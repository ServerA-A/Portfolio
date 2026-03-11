"use client"
import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "motion/react"
import { Github, ExternalLink, Calendar } from "lucide-react"

const projects = [
  {
    title: "Smart Hyperparameter Tuning",
    date: "Nov 2025",
    category: "AI / ML",
    description:
      "Automated ML hyperparameter tuning with Hyperopt and Bayesian Optimization. Improved model accuracy by 18% over baselines by systematically exploring the hyperparameter space.",
    highlights: ["18% accuracy improvement", "Bayesian search algorithms", "Visualized optimization landscape"],
    tech: ["Python", "Scikit-learn", "Bayesian Optimization", "Hyperopt", "PyTorch"],
    github: "https://github.com/adityyaraj",
    gradient: "from-violet-500/10 to-indigo-500/10",
    border: "border-violet-500/20",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    dot: "bg-violet-400",
  },
  {
    title: "Voice AI Game Purchase Assistant",
    date: "Jun 2025",
    category: "LLM / RAG",
    description:
      "Voice-controlled AI assistant using LangChain/LangGraph agent workflows with speech-to-text and vector search retrieval to recommend the optimal platform for purchasing games.",
    highlights: ["Speech-to-text integration", "LangGraph agent workflows", "Vector DB retrieval"],
    tech: ["Python", "LangChain", "LangGraph", "RAG", "Speech Recognition", "Embeddings", "Vector DB"],
    github: "https://github.com/adityyaraj",
    gradient: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
    tag: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    dot: "bg-purple-400",
  },
  {
    title: "BlockFace – Minecraft Skin Generator",
    date: "May 2025",
    category: "AI Web App",
    description:
      "AI web app generating unique Minecraft skins using self-attention, adaptive residual blocks, and adversarial training. Reduced skin generation time by 40% through optimized pipelines.",
    highlights: ["40% faster generation", "WGAN + self-attention", "Next.js full-stack"],
    tech: ["TypeScript", "React", "Next.js", "WGAN", "AI Image Generation"],
    github: "https://github.com/adityyaraj/BlockFace",
    live: "https://blockface.vercel.app/",
    gradient: "from-cyan-500/10 to-teal-500/10",
    border: "border-cyan-500/20",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dot: "bg-cyan-400",
  },
  {
    title: "Track-DQN – Autonomous Navigation",
    date: "Oct 2024",
    category: "Reinforcement Learning",
    description:
      "Deep Q-Network RL agent for autonomous racetrack navigation using OpenAI Gym. Achieved 82% success rate on unseen tracks with experience replay and target networks.",
    highlights: ["82% success rate", "Experience replay", "Computer vision feature extraction"],
    tech: ["Python", "OpenAI Gym", "Deep Q-Learning", "Computer Vision", "PyTorch"],
    github: "https://github.com/adityyaraj/Track-DQN",
    gradient: "from-emerald-500/10 to-green-500/10",
    border: "border-emerald-500/20",
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  {
    title: "Roastumé – AI Résumé Reviewer",
    date: "2025",
    category: "AI Tool",
    description:
      "Brutally honest AI résumé reviewer powered by Google Gemini API. Upload your résumé, get real-time feedback and chat with an AI that tells you what hiring managers really think.",
    highlights: ["Gemini API powered", "Real-time streaming feedback", "Interactive chat UI"],
    tech: ["Next.js", "React", "TypeScript", "Google Gemini API", "Tailwind CSS"],
    github: "https://github.com/adityyaraj/Roastume",
    live: "https://roastume.vercel.app/",
    gradient: "from-orange-500/10 to-red-500/10",
    border: "border-orange-500/20",
    tag: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    dot: "bg-orange-400",
  },
  {
    title: "VoxBridge – P2P Voice Chat",
    date: "2024",
    category: "WebRTC",
    description:
      "Peer-to-peer voice chat app using WebRTC and WebSockets. Users join or create rooms via unique codes for real-time browser-to-browser audio communication with no server relay.",
    highlights: ["WebRTC P2P audio", "Room-based architecture", "Real-time signaling"],
    tech: ["React", "WebRTC", "WebSockets", "Node.js", "Tailwind CSS"],
    github: "https://github.com/adityyaraj/VoxBridge",
    live: "https://vox-bridge-three.vercel.app/",
    gradient: "from-blue-500/10 to-indigo-500/10",
    border: "border-blue-500/20",
    tag: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-400",
  },
]

export default function Projects() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = useState<React.CSSProperties>({})
    const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const r = cardRef.current?.getBoundingClientRect(); if (!r) return
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top)  / r.height - 0.5
      setTilt({ transform: `perspective(600px) rotateY(${x*10}deg) rotateX(${-y*8}deg) scale3d(1.02,1.02,1)`, transition: "transform 0.1s ease-out" })
    }, [])
    const onLeave = useCallback(() => setTilt({ transform: "perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)", transition: "transform 0.5s ease-out" }), [])
    return <div ref={cardRef} style={tilt} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>{children}</div>
  }

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)" }}
      />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Proof of Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Projects</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            From RL agents to LLM-powered apps — built, shipped, and iterated
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <TiltCard className={`relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br ${project.gradient} border ${project.border} backdrop-blur-sm flex flex-col h-full`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${project.tag}`}>{project.category}</span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <Calendar size={11} />{project.date}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-snug">{project.title}</h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-3 sm:mb-4 space-y-1 sm:space-y-1.5">
                  {project.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.dot} shrink-0`} />{h}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/8 text-slate-400">{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/8 text-slate-500">+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className="flex gap-2 sm:gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white active:text-white border border-white/10 hover:border-white/25 px-3 py-2 sm:py-1.5 rounded-full transition-all duration-200 touch-manipulation"
                  >
                    <Github size={12} /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white active:text-white border border-white/10 hover:border-white/25 px-3 py-2 sm:py-1.5 rounded-full transition-all duration-200 touch-manipulation"
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
