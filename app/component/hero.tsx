import React from "react";
import Image from "next/image";
import MaxWidthContainer from "./maxwidthcontainer";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { File, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <MaxWidthContainer>
      <div className="flex mt-15 gap-15 justify-between p-5">
        <div className="flex flex-col gap-4">
          <div className="text-primary font-semibold space-y-2">
           <p className="md:text-2xl text-xl text-primary">Hi 
              <span className="text-primary/80"> there,</span></p>
              <p className="md:text-3xl text-1xl border-2 border-dashed p-2 border-primary/40 ">I Build <span className="text-primary/50">AI-Powered</span> Systems and Practical Products.</p>
          </div>
          <div className="text-primary/50 font-medium max-w-3xl mx-auto space-y-4 p-4 border border-primary/20 rounded-lg hover:bg-primary/5 transition duration-300">
           <p>Developer and <span className="text-primary">Machine Learning Engineer</span> who enjoys building practical AI tools and intelligent systems. I like turning ideas into working products — from AI agents to data-driven applications that solve real problems.</p>
           <p>I work mainly with Python and modern AI tools, and I’ve built projects like <span className="text-primary">sentiment analysis tools</span>, <span className="text-primary">AI automation agents</span>, and <span className="text-primary">ML-powered applications</span>. Always learning, building, and experimenting with machine learning and AI to create useful products people can actually use.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-10">
            <Link href="/Aditya_Raj_Resume.pdf" target="_blank">
              <Button>
                <File />
                My Resume
              </Button>
            </Link>
            <Link href="mailto:adityarajwk@gmail.com" target="_blank">
              <Button variant={'outline'}>
                <Mail/>
                Contact
              </Button>
            </Link>
            <Link href="/side">
              <RainbowButton variant={'outline'}>
                ✦ Portfolio v2
              </RainbowButton>
            </Link>
          </div>
        </div>
        <div>
          <div className="hidden w-full md:block p-2 rounded-xl shadow-lg shadow-gray-500/30 inline-block">
            <Image
              src={"/profile-pic.jpg"}
              height={400}
              width={400}
              alt="aditya_image"
              className=" grayscale hover:grayscale-0 transition duration-300 rounded-md border shadow-xl hover:scale-105 transition-all duration-300 ease-in-out dark:bg-transparent bg-[#212121] object-cover aspect-square" 
            />
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
}

export default Hero;
