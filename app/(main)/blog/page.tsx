import MaxWidthContainer from "@/app/component/maxwidthcontainer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <MaxWidthContainer>
      <div className="flex flex-col items-center p-2 mt-10 mb-10 w-full min-h-[60vh]">
        <div className="w-full flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-10 w-full">
          <h1 className="font-semibold text-4xl tracking-tight text-primary">Blogs</h1>
          <p className="text-primary/50 text-base mt-3 max-w-2xl text-center">
            Thoughts, insights, and lessons learned.
          </p>
        </div>
        
        <div className="flex items-center justify-center h-full w-full flex-grow mt-10">
          <p className="text-primary/40 text-lg border border-primary/10 bg-primary/5 px-6 py-3 rounded-full">
            Coming soon...
          </p>
        </div>
      </div>
    </MaxWidthContainer>
  );
}