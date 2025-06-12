import React from "react";
import Image from "next/image";
import MaxWidthContainer from "./maxwidthcontainer";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { File, Mail } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <MaxWidthContainer>
      <div className="flex mt-15 gap-15 justify-between p-5">
        <div className="flex flex-col gap-4">
          <div className="text-primary md:text-4xl  text-2xl font-semibold">
            Hi, I'm{" "}
            <AuroraText colors={["green", "orange"]} className="font-bold">
              Aditya
            </AuroraText>
            👋
          </div>
          <div className="text-primary font-medium ">
            I'm an AI Engineer and Web Developer, transforming innovative ideas
            into intelligent, dynamic applications, from concept to deployment
            with a modern tech stack.
          </div>
          <div className="flex gap-2">
            <Link href="https://drive.google.com/file/d/1BxyVSgpDgKb3_AVxfEpl44qabg0ma5U-/view?usp=sharing" target="_blank">
              <RainbowButton>
                <File />
                My Resume
              </RainbowButton>
            </Link>
            <Link href="mailto:adityarajwk@gmail.com" target="_blank">
              <RainbowButton variant={'outline'}>
                <Mail/>
                Contact
              </RainbowButton>
            </Link>
          </div>
        </div>
        <div>
          <div className="hidden w-full md:block">
            <Image
              src={"/profile.png"}
              height={400}
              width={400}
              alt="aditya's image"
              className="rounded-full border shadow-xl hover:scale-105 transition-all duration-300 ease-in-out dark:bg-transparent bg-[#212121]" 
            />
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
}

export default Hero;
