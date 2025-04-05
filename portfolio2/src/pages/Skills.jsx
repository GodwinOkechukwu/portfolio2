import React from "react";
import Navbar from "../components/Navbar";
import skillsbg from "../assets/skillsbg.jpg";
import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiVercel } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 className="text-orange-500 text-4xl" />,
      title: "Frontend Development",
      tools: "HTML5, CSS3, JavaScript, TypeScript",
      description:
        "Clean, semantic code with a focus on performance and accessibility.",
    },
    {
      icon: <FaReact className="text-blue-400 text-4xl" />,
      title: "Frameworks & Libraries",
      tools: "React.js, Next.js",
      description: "Dynamic, fast, and scalable web apps with modern stacks.",
    },
    {
      icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
      title: "Styling",
      tools: "Tailwind CSS, SCSS",
      description: "Utility-first styling for clean, responsive UIs.",
    },
    {
      icon: <FaGitAlt className="text-red-500 text-4xl" />,
      title: "Dev Tools",
      tools: "Git, GitHub, VS Code",
      description: "Efficient workflows, version control, and collaboration.",
    },
    {
      icon: <FaFigma className="text-pink-500 text-4xl" />,
      title: "Design & UX",
      tools: "Figma",
      description: "Pixel-perfect implementation of design systems.",
    },
    {
      icon: <SiVercel className="text-black text-4xl" />,
      title: "Deployment",
      tools: "Vercel, Netlify",
      description: "Fast, seamless deployments and previews.",
    },
  ];

  return (
    <section
      className="px-4 bg-cover bg-no-repeat bg-center h-full pb-4 md:h-screen"
      id="skills"
      style={{ backgroundImage: `url('${skillsbg}')` }}>
      <Navbar />
      <h2 className="text-2xl md:text-3xl text-gray-200 font-bold text-center mb-10">
        My Skillset
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1 * index,
            }}>
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-600 mb-1 font-medium">
              {skill.tools}
            </p>
            <p className="text-gray-500 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
