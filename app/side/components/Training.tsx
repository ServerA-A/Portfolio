"use client"
import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { BookOpen, Calendar, ExternalLink } from "lucide-react"

const tech = [
  "Python", "LangChain", "LangGraph", "LiveKit",
  "Chainlit", "RAG", "Embeddings", "Vector DBs", "HuggingFace",
]

export default function Training() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="training" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 20% 60%, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Training</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative pl-6 sm:pl-10"
          >
            <div className="absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-purple-500/70 via-indigo-500/40 to-transparent" />
            <div className="absolute left-[-6px] top-6 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg shadow-purple-500/40 ring-4 ring-purple-500/15" />

            <div className="p-5 sm:p-8 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/8 to-indigo-500/8 backdrop-blur-sm group hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">AI-Powered NLP – Summer Training</h3>
                  <p className="text-purple-300 font-semibold mt-1 text-sm">AlgoTutor</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm shrink-0">
                  <Calendar size={13} />Jun 2025
                </div>
              </div>

              <div className="space-y-3 mb-5 sm:mb-6">
                {[
                  "Built intelligent pipelines using LangChain, LangGraph, LiveKit, and RAG workflows; developed and deployed a resume-analysis system with chunking, vector search, and contextual evaluation.",
                  "Integrated Chainlit-powered conversational interface for real-time interaction with AI pipelines, and deployed HuggingFace embedding models for semantic document retrieval."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${i === 0 ? "bg-purple-400" : "bg-indigo-400"}`} />
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {tech.map(t => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 transition-colors duration-200 cursor-default">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
