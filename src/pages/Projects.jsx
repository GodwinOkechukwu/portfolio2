import React from "react";
import projectbg from "../assets/projectbg.jpg";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import payina from "../assets/payina.png";
import jobHub from "../assets/nxgJobHub.png";
import nextgen from "../assets/nextgenhub.png";
import port from "../assets/portscreenshot.jpg";

const projects = [
  {
    title: "Payina",
    description:
      "A Fintech Web App that allows users to register personal or business accounts and manage their finances. Key features include secure money transfers, easy bill payments, and full control over financial transactions, providing a seamless and efficient experience for users to handle their financial needs online.",
    tech: "React, Tailwind CSS, Redux, Java, Springboot",
    image: payina,
    link: "https://payina.com.ng/",
  },
  {
    title: "Job Hub Website",
    description:
      "A Job Hub Website where users can register as either talents or employers. Talents can apply for jobs, while employers can post job openings. The platform includes search and filter features, along with a subscription payment plan for added functionality.",
    tech: "React, Tailwind CSS, Redux, Java, Springboot, MongoDB",
    image: jobHub,
    link: "https://nxgjobhub.com/",
  },
  {
    title: "IT Company Website",
    description:
      "A Tech Company Landing Page designed to present key information to visitors in an attractive and user-friendly manner, highlighting the company's services, values, and offerings in a visually appealing layout.",
    tech: "React, Tailwind CSS,",
    image: nextgen,
    link: "https://nextgenhub.com.ng/",
  },
  {
    title: "Porfolio 1.0",
    description: "My previous Portfolio",
    tech: "React, Tailwind CSS,",
    image: port,
    link: "https://my-portfolio-eight-wheat-64.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="pb-16 bg-gray-100 bg-cover bg-no-repeat bg-center h-full"
      style={{ backgroundImage: `url('${projectbg}')` }}>
      <Navbar />
      <motion.h2
        className="text-3xl font-bold text-center text-gray-200 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2 + index * 0.1,
            }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500">Tech: {project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 inline-block">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
