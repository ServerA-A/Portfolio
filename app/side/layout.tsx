import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aditya Raj | AI/ML Engineer",
  description:
    "Professional portfolio of Aditya Raj – AI/ML Engineer specializing in reinforcement learning, LLM applications, and AI-powered web systems.",
}

export default function SideLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#050508] min-h-screen">{children}</div>
}
