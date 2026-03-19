"use client"
import Hero from "@/app/component/hero";
import MaxWidthContainer from "@/app/component/maxwidthcontainer";
import Skill from "@/app/component/skils";
import Education from "@/app/component/education";
import Contact from "@/app/component/contact";
import CalEmbed from "@/app/component/cal-embed";
import { Projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function Home() {
  const displayed = Projects.slice(0, 4); // Only show top 4 featured projects

  const featuredBlogs = [
    {
      title: "Building an AI-Powered Resume Parser",
      date: "Oct 24, 2024",
      description: "A deep dive into how I used LangChain and vector databases to parse and evaluate resume contexts effectively.",
      link: "/blog"
    },
    {
      title: "Why I switched from React to Next.js",
      date: "Sep 12, 2024",
      description: "Understanding the benefits of Server-Side Rendering and how it improved my project's performance.",
      link: "/blog"
    }
  ];

  return (
    <MaxWidthContainer>
      <Hero />
      <Skill />

      <div className={`flex flex-col p-2 mt-10 w-full`}>
        <div className="flex flex-row items-end justify-between w-full px-2 mb-4 mx-auto">
          <div className="flex flex-col">
            <h1 className="font-semibold text-3xl text-primary tracking-tight">Featured Projects</h1>
            <p className="text-primary/50 text-sm mt-1">A selection of my best work.</p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-primary/70 hover:text-primary transition-colors mb-1 whitespace-nowrap">
            View All →
          </Link>
        </div>
        
        <div className="flex flex-col w-full gap-5 mt-2 px-2 mx-auto">
          {displayed.map((e, i) => (
            <div key={i} className="w-full flex items-center p-4 border border-primary/10 bg-primary/5 hover:bg-primary/10 hover:shadow-md transition-all duration-300 rounded-xl group relative">
              <div className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 overflow-hidden rounded-lg mr-4 sm:mr-8 relative border border-primary/10 shadow-sm">
                <Image src={e.image} fill alt={e.title} className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-col justify-center flex-grow py-1 pl-1 sm:pl-2">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">{e.title}</h2>
                  <div className="flex gap-2 text-primary/60 shrink-0">
                    <Link href={e.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110">
                      <Github size={18} />
                    </Link>
                    <Link href={e.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110">
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-primary/70 mb-3 line-clamp-2">{e.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {e.techUsed.slice(0, 3).map((t, j) => (
                    <span key={j} className="rounded-md bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wide">
                      {t}
                    </span>
                  ))}
                  {e.techUsed.length > 3 && (
                    <span className="rounded-md bg-transparent text-primary/50 border border-primary/10 px-2 py-0.5 text-[10px] sm:text-xs font-medium">
                      +{e.techUsed.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex flex-col p-2 mt-10 w-full`}>
        <div className="flex flex-row items-end justify-between w-full px-2 mb-4 mx-auto">
          <div className="flex flex-col">
            <h1 className="font-semibold text-3xl text-primary tracking-tight">Featured Blogs</h1>
            <p className="text-primary/50 text-sm mt-1">Thoughts, insights, and lessons learned.</p>
          </div>
          <Link href="/blog" className="text-sm font-medium text-primary/70 hover:text-primary transition-colors mb-1 whitespace-nowrap">
            View All →
          </Link>
        </div>
        
        <div className="flex flex-col w-full gap-5 mt-2 px-2 mx-auto">
          {featuredBlogs.map((b, i) => (
            <Link href={b.link} key={i}>
              <div className="w-full flex items-center p-5 md:p-6 border border-primary/10 bg-primary/5 hover:bg-primary/10 hover:shadow-md transition-all duration-300 rounded-xl group relative">
                <div className="flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h2 className="text-lg sm:text-xl font-bold text-primary leading-tight group-hover:underline">{b.title}</h2>
                    <span className="text-xs sm:text-sm font-medium text-primary/40 shrink-0 border border-primary/10 px-3 py-1 rounded-full">{b.date}</span>
                  </div>
                  <p className="text-sm text-primary/70 mb-1 line-clamp-2">{b.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Education />
      <CalEmbed />
      <Contact />
    </MaxWidthContainer>
  );
}

