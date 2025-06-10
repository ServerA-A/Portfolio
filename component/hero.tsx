import React from 'react'
import Image from 'next/image'
const skills = [
  "C++",
  "C",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React JS",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB"
];

function Hero() {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex flex-row mt-15 gap-15 grid grid-cols-2'>
        <div className='flex flex-col gap-4'>
        <div className='text-white text-4xl font-extrabold '>Hi, I'm Aditya👋</div>
        <div className='text-[#bfbfbf] font-medium '>I'm an AI Engineer and Web Developer, transforming innovative ideas into intelligent, dynamic applications, from concept to deployment with a modern tech stack.</div>
        </div>
        <div>
          <div className="hidden w-full md:block">
                <Image 
                    src={"/profile.jpeg"} 
                    height={200} 
                    width={200} 
                    alt="anurag's image" 
                    className="rounded-full border shadow-xl"
                />
            </div></div>
       </div> 
       <div className='flex flex-col'>
        <div className='text-white font-bold item-center mr-82 mt-5'>Skills</div>
        <div className='flex flex-wrap gap-2 mt-2 w-94'>
         {skills.map((skill,i) => (<div key={i} className='bg-white text-black rounded-xl px-4 hover:bg-[#d4d4d4]'>{skill}</div>
        ))}
        </div>
       </div>
       <div className='text-white font-bold item-center mr-82 mt-5'>Education</div>
       <div className='flex mt-2 gap-4'>
        <div className='bg-g rounded-full w-12 h-12 text-center pt-0.5 text-3xl border-2 border-dashed border-black text-white'>L</div>
        <div className='text-white'>
        <div className='font-bold'>Lovely Professional University</div>
        <div className='font-light'>Bachelor of Technology in Computer Science and Engineering AI/ML</div>
        </div>
        <div className='text-g pb-8'>2023-2027</div>
       </div>
    </div>
  )
}

export default Hero