import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Training from "./components/Training"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Footer from "./components/Footer"
import CursorGlow from "./components/CursorGlow"
import ScrollProgress from "./components/ScrollProgress"
import FloatingBubbles from "./components/FloatingBubbles"

export default function SidePage() {
  return (
    <main className="bg-[#050508] text-white overflow-x-hidden transition-all duration-700 ease-in-out relative">
      <FloatingBubbles />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Education />
      <Certifications />
      <Footer />
    </main>
  )
}
