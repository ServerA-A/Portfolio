import { Projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import MaxWidthContainer from "@/app/component/maxwidthcontainer";

export default function ProjectsPage() {
  return (
    <MaxWidthContainer>
      <div className="flex flex-col items-center p-2 mt-10 mb-10 w-full">
        <div className="w-full flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="font-semibold text-4xl tracking-tight text-primary">All Projects</h1>
          <p className="text-primary/50 text-base mt-3 max-w-2xl text-center">
            A comprehensive list of projects, experiments, tools, and systems I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {Projects.map((e, i) => (
            <div key={i} className="w-full flex flex-col border border-primary/10 bg-primary/5 hover:bg-primary/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden">
              <div className="overflow-hidden h-48 border-b border-primary/10">
                <Image src={e.image} width={1280} height={720} alt={e.title} className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h2 className={`text-xl font-bold text-primary leading-tight`}>{e.title}</h2>
                  <div className="flex gap-2 text-primary/60 shrink-0">
                    <Link href={e.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Github size={20} />
                    </Link>
                    <Link href={e.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-primary/70 mb-5 flex-grow line-clamp-3">{e.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {e.techUsed.map((t, j) => (
                    <span key={j} className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-[10px] font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthContainer>
  );
}