import React from 'react'

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
    <div className=''>
      <div className='flex justify-center flex-col items-center mt-15 '>
        <div className='text-white text-3xl font-extrabold w-72'>Hi, I'm Aditya 👋</div>
        <div className='text-[#bfbfbf] font-medium  w-72 '>I am a Software Enginer with experties in AI/ML ,Web Development & Web3.</div>
       </div> 
       <div className='flex justify-center items-center flex-col ='>
        <div className='text-white font-bold item-center mr-82 mt-5'>Skills</div>
        <div className='flex flex-wrap gap-2 mt-2 w-94'>
         {skills.map((skill,i) => (<div key={i} className='bg-white text-black rounded-xl px-4 hover:bg-[#d4d4d4]'>{skill}</div>
        ))}
        </div>
       </div>
       <div className='flex justify-center items-center mt-5 gap-4'>
        <div className='bg-[#5c5c5c] rounded-full w-12 h-12 text-center pt-0.5 text-3xl border-2 border-dashed border-black text-white'>L</div>
        <div className='text-white'>
        <div className='font-bold'>Lovely Professional University</div>
        <div className='font-light'>Bachelor of Technology in Computer Science and Engineering AI/ML</div>
        </div>
        <div className='text-[#5c5c5c] pb-8'>2023-2027</div>
       </div>
    </div>
  )
}

export default Hero