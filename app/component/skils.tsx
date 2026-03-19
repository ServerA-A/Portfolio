import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

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
  const firstRow = [...skills.languages, ...skills.frameworks];
  const secondRow = [...skills.toolsPlatforms, ...skills.aiML];

  return (
    <div className="p-2 px-4 w-full mt-10">
      <div className="flex flex-col mb-4">
        <h2 className="text-3xl font-semibold text-primary">Technical Arsenal</h2>
        <p className="text-primary/50 text-sm mt-1">Tools, languages, and frameworks I use to build things.</p>
      </div>
      
      <div className="relative flex flex-col items-center justify-center overflow-hidden w-full py-4">
        <Marquee pauseOnHover style={{ "--duration": "45s" } as React.CSSProperties}>
          {firstRow.map((skill, i) => (
            <div
              key={i}
              className="px-5 py-2.5 mx-2 rounded-full border border-primary/20 bg-primary/5 text-primary/80 text-sm font-medium shadow-sm hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
            >
              {skill}
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover style={{ "--duration": "45s" } as React.CSSProperties} className="mt-4">
          {secondRow.map((skill, i) => (
            <div
              key={i}
              className="px-5 py-2.5 mx-2 rounded-full border border-primary/20 bg-primary/5 text-primary/80 text-sm font-medium shadow-sm hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
            >
              {skill}
            </div>
          ))}
        </Marquee>
        
        {/* Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
      </div>
    </div>
  );
};

export default Skill;
