"use client"
import { Bricolage_Grotesque } from "next/font/google";
import { Projects } from "@/lib/projects";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

interface ProofOfWorkProps {
  close: () => void;
}

export default function ProofOfWork({ close }: ProofOfWorkProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? Projects : Projects.slice(0, 6);

  return (
    <div className='absolute inset-0 flex items-center justify-center z-50'>
      <div className='md:w-[88%] md:h-[92%] w-[96%] h-[92%] rounded-xl flex flex-col overflow-hidden shadow-2xl'
        style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>

        {/* macOS title bar */}
        <div className='flex items-center gap-2 px-4 py-3 shrink-0 border-b'
          style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
          <button onClick={close} className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors' />
          <span className='w-3 h-3 rounded-full bg-yellow-400' />
          <span className='w-3 h-3 rounded-full bg-green-500' />
          <span className='flex-1 text-center text-xs font-medium text-white/40 tracking-widest uppercase'>Projects</span>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto p-6'>
          <div className={`${font.className}`}>
            <div className='flex items-center justify-between mb-6'>
              <h1 className='text-white text-2xl font-bold'>Proof Of Work</h1>
              <span className='text-white/30 text-sm'>{Projects.length} projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {displayedProjects.map((e, index) => (
                <div key={index}
                  className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>

                  {/* Image with overlay */}
                  <div className="relative overflow-hidden h-36">
                    <Image
                      src={e.image}
                      width={600}
                      height={340}
                      alt="Project"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                    {/* action buttons on hover */}
                    <div className='absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <Link href={e.liveLink} target='_blank' rel='noopener noreferrer'>
                        <button className='flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg hover:bg-white/90 transition-colors shadow-lg'>
                          <ExternalLink size={12} /> Live
                        </button>
                      </Link>
                      <Link href={e.githubLink} target='_blank' rel='noopener noreferrer'>
                        <button className='flex items-center gap-1.5 px-3 py-1.5 bg-black/80 text-white text-xs font-bold rounded-lg border border-white/20 hover:bg-black transition-colors shadow-lg'>
                          <Github size={12} /> Code
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className='text-white font-bold text-base mb-1.5'>{e.title.trim()}</h2>
                    <p className="text-white/50 text-xs leading-relaxed line-clamp-2 mb-3">{e.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {e.techUsed.slice(0, 4).map((y, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{ background: 'rgba(99,102,241,0.15)', color: 'rgba(165,180,252,1)', border: '1px solid rgba(99,102,241,0.25)' }}>
                          {y}
                        </span>
                      ))}
                      {e.techUsed.length > 4 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full text-white/30" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          +{e.techUsed.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {Projects.length > 6 && (
              <div className='flex justify-center mt-6'>
                <button
                  onClick={() => setShowAll(!showAll)}
                  className='px-6 py-2.5 rounded-lg text-sm font-semibold text-white/70 hover:text-white border transition-all hover:bg-white/5'
                  style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  {showAll ? '↑ Show Less' : `↓ Show All ${Projects.length} Projects`}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
