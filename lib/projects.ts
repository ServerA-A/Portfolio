export const Projects: Projects[] = [
  {
    title: "VoxBridge",
    description:
      "VoxBridge is a peer-to-peer voice chat app built with React, WebRTC, and WebSockets. Users can join or create groups via unique codes for real-time browser-to-browser audio communication.",
    image: "/img1.png",
    techUsed: [
      "React",
      "Tailwind CSS",
      "WebRTC",
      "WebSockets",
      "Node.js",
      "Lucide React",
    ],
    liveLink: "https://vox-bridge-three.vercel.app/",
    githubLink: "https://github.com/adityyaraj/VoxBridge.git",
  },
  {
    title: "BlockFace ",
    description:
      "BlockFace is a Minecraft skin generator built using WGAN (Wasserstein GAN) on Next.js. It leverages modern web technologies to provide an interactive experience for generating Minecraft skins.",
    image: "/img2.png",
    techUsed: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "WGAN",
      "Tailwind CSS",
      "Node.js",
    ],
    liveLink: "https://blockface.vercel.app/",
    githubLink: "https://github.com/adityyaraj/BlockFace.git",
  },
  {
    title: "Track-DQN",
    description:
      "A Pygame-based self-driving car simulation using Deep Q-Learning (DQN) to train an autonomous vehicle navigating procedurally generated roads.",
    image: "/img3.png",
    techUsed: [
      "Python",
      "Pygame",
      "Deep Q-Learning (DQN)",
      "Neural Networks",
      "Procedural Generation",
    ],
    liveLink: "https://github.com/adityyaraj/Track-DQN.git",
    githubLink: "https://github.com/adityyaraj/Track-DQN.git",
  },
  {
    title: "Snake-DQN",
    description:
      "Snake-DQN is a PyGame implementation of the classic Snake game, trained using a Deep Q-Learning Network (DQN). It combines traditional gameplay with modern reinforcement learning techniques.",
    image: "/img4.png",
    techUsed: [
      "Python",
      "Pygame",
      "Deep Q-Learning (DQN)",
      "Reinforcement Learning",
    ],
    liveLink: "https://github.com/adityyaraj/Snake-DQN.git",
    githubLink: "https://github.com/adityyaraj/Snake-DQN.git",
  },
  {
    title: "LinkScraper ",
    description:
      " LinkScraper is a web application built with Next.js that allows users to scrape links from any provided URL. The application extracts hyperlinks along with their associated text and displays them in a user-friendly interface.",
    image: "/img5.png",
    techUsed: [
       "Next.js",
  "TypeScript",
  "JavaScript",
  "CSS"
    ],
    liveLink: "https://linkscraper-weld.vercel.app/",
    githubLink: "https://github.com/adityyaraj/LinkScraper.git",
  },
];

interface Projects {
  title: string;
  liveLink: string;
  githubLink: string;
  description: string;
  image: string;
  techUsed: string[];
}
