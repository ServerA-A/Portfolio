import React from "react";
import Image from "next/image";
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
  "MongoDB",
];

const Skill = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-primary font-bold item-center mr-82 mt-20">
          Skills
        </div>
        <div className="flex flex-wrap gap-2 mt-2 md:w-155">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-primary dark:text-black text-white rounded-xl px-4 hover:bg-[#d4d4d4]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="text-primary font-bold item-center mr-82 mt-15">
        Education
      </div>
      <div className="flex mt-2 gap-4">
        <div>
          <Image
            src={"/lpulogo.jpg"}
            width={50}
            height={50}
            alt="APS LOGO"
            className="rounded-full"
          />
        </div>
        <div className="flex justify-between w-full mb-30">
          <div className="text-primary">
            <div className="font-bold">Lovely Professional University</div>
            <div className="font-primary text-xs">
              Bachelor of Technology in Computer Science and Engineering AI/ML
            </div>
          </div>
          <h2 className="text-primary pb-8 text-s">2023-2027</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
