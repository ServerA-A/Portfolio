import React from "react";
import Image from "next/image";
const skills = {
  languages: [
    "Python",
    "C/C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL"
  ],

  frameworks: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "LangGraph",
    "HuggingFace Transformers"
  ],

  toolsPlatforms: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "VS Code",
    "Jupyter",
    "Linux",
    "Pandas",
    "NumPy",
    "Scikit-learn"
  ],

  aiML: [
    "Deep Q-Learning",
    "Bayesian Optimization",
    "RAG",
    "Embeddings",
    "Vector Databases",
    "Chainlit",
    "LiveKit",
    "Model Training",
    "Hyperparameter Tuning",
    "Neural Networks",
    "Reinforcement Learning",
    "CNNs",
    "Transfer Learning",
    "Data Preprocessing",
    "Feature Engineering"
  ],

  softSkills: [
    "Problem-Solving",
    "Critical Thinking",
    "Team Collaboration",
    "Project Management",
    "Adaptability",
    "Effective Communication",
    "Attention to Detail",
    "Time Management",
    "Self-Directed Learning",
    "Creativity"
  ]
};

const Skill = () => {
  return (
    <div className="p-2">
      <div className="flex flex-col">
        <div className="text-primary font-bold item-center mr-82 mt-20">
          Skills
        </div>
        <div className="flex flex-wrap gap-2 mt-2 md:w-155">
          {skills.languages.map((skill, i) => (
            <div
              key={i}
              className="bg-primary dark:text-black text-white rounded-xl px-4 dark:hover:bg-[#d4d4d4] hover:bg-[#262626]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <div className="text-primary font-bold item-center mr-82">
          Frameworks & Libraries
        </div>
        <div className="flex flex-wrap gap-2 mt-2 md:w-155">
          {skills.frameworks.map((skill, i) => (
            <div
              key={i}
              className="bg-primary dark:text-black text-white rounded-xl px-4 dark:hover:bg-[#d4d4d4] hover:bg-[#262626]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <div className="text-primary font-bold item-center mr-82">
          Tools & Platforms
        </div>
        <div className="flex flex-wrap gap-2 mt-2 md:w-155">
          {skills.toolsPlatforms.map((skill, i) => (
            <div
              key={i}
              className="bg-primary dark:text-black text-white rounded-xl px-4 dark:hover:bg-[#d4d4d4] hover:bg-[#262626]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <div className="text-primary font-bold item-center mr-82">
          AI & Machine Learning
        </div>
        <div className="flex flex-wrap gap-2 mt-2 md:w-155">
          {skills.aiML.map((skill, i) => (
            <div
              key={i}
              className="bg-primary dark:text-black text-white rounded-xl px-4 dark:hover:bg-[#d4d4d4] hover:bg-[#262626]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="text-primary font-bold item-center mr-82 mt-15">
        Education
      </div>
      <div className="flex gap-2 mt-2">
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
