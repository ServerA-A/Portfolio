"use client"
import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { Github, ExternalLink, Calendar } from "lucide-react"

import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

const projects = [
  {
    title: "Smart Hyperparameter Tuning",
    date: "Nov 2025",
    category: "AI / ML",
    image: "/img4.png",
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
    image: "/img5.png",
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
    image: "/img2.png",
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
    image: "/img3.png",
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
    image: "/img6.png",
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
    image: "/img1.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, i) => {
            // Bento grid styling
            const isLarge = i === 0 || i === 3 || i === 5;
            const spanClass = isLarge ? "md:col-span-2" : "col-span-1";

            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              className={`h-full ${spanClass}`}
            >
              <MagicCard 
                className={`relative rounded-3xl h-full w-full flex flex-col overflow-hidden bg-[#050508]/40 border ${project.border} cursor-pointer group transition-all duration-300 hover:shadow-xl hover:bg-[#050508]/60`}
                gradientColor="rgba(255,255,255,0.05)"
              >
                {/* Optional glow border */}
                <BorderBeam size={200} duration={12} delay={i} colorFrom={project.dot.split('-')[1]} colorTo="transparent" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project image */}
                <div className="relative w-full h-44 sm:h-52 shrink-0 overflow-hidden">
                  <motion.div 
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-300`} />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10 -mt-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md ${project.tag} transition-transform duration-300 group-hover:scale-105`}>{project.category}</span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md">
                    <Calendar size={12} />{project.date}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-5 space-y-2 hidden sm:block">
                  {project.highlights.slice(0, 2).map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.dot} shrink-0`} />{h}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, isLarge ? 4 : 2).map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide bg-white/5 border border-white/10 text-slate-300 transition-colors duration-300 hover:bg-white/10 hover:text-white cursor-default">{t}</span>
                  ))}
                  {project.tech.length > (isLarge ? 4 : 2) && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide bg-white/5 border border-white/10 text-slate-400">+{project.tech.length - (isLarge ? 4 : 2)}</span>
                  )}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center flex-1 gap-2 text-xs font-semibold text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 px-4 py-2.5 rounded-xl transition-all duration-300 touch-manipulation hover:-translate-y-1"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center flex-1 gap-2 text-xs font-semibold text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 px-4 py-2.5 rounded-xl transition-all duration-300 touch-manipulation hover:-translate-y-1"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
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
