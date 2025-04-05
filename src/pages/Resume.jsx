import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import resumebg from "../assets/skillsbg.jpg";
import Navbar from "../components/Navbar";
import {
  FaLaptopCode,
  FaSchool,
  FaTrophy,
  FaFileDownload,
} from "react-icons/fa";
import { SiGithub, SiLinkedin } from "react-icons/si"; // Social icons
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div
      className="bg-gray-100 bg-cover bg-no-repeat bg-center min-h-screen pb-8 text-gray-200"
      style={{ backgroundImage: `url('${resumebg}')` }}>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            Godwin's Resume
          </h2>
          <p className="text-xl text-gray-200">
            Frontend Developer | React | Next.js | Tailwind CSS
          </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">
            Experience
          </h3>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center md:space-x-6 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">
                  Frontend Developer
                </h4>
                <p className="text-gray-500">Next Gen Hub</p>
                <p className="text-gray-600">June 2023 - Present</p>
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Developed and maintained web applications using React and
                    Next.js.
                  </li>
                  <li>
                    Collaborated with designers and backend developers to create
                    responsive layouts.
                  </li>
                  <li>
                    Optimized performance for faster page loads using Tailwind
                    CSS and lazy loading techniques.
                  </li>
                </ul>
              </div>
            </motion.div>
            {/* Repeat for other experiences */}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center">
              <FaLaptopCode className="text-4xl text-blue-500 mb-2" />
              <p className="font-medium">Frontend Development</p>
              <p className="text-gray-200">
                HTML, CSS, JavaScript, TypeScript, React
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center">
              <FaSchool className="text-4xl text-green-500 mb-2" />
              <p className="font-medium">Frameworks & Libraries</p>
              <p className="text-gray-200">Next.js, Tailwind CSS, Redux</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center">
              <FaTrophy className="text-4xl text-yellow-500 mb-2" />
              <p className="font-medium">Dev Tools</p>
              <p className="text-gray-200">Git, GitHub, VS Code</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center">
              <SiGithub className="text-4xl text-gray-800 mb-2" />
              <p className="font-medium">Version Control</p>
              <p className="text-gray-200">GitHub, GitLab, Bitbucket</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Download Resume Button */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center">
          <a
            href={resume}
            download
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
            <FaFileDownload className="inline-block mr-2" />
            Download Resume
          </a>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">
            Connect with Me
          </h3>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://github.com/GodwinOkechukwu"
              target="_blank"
              rel="noopener noreferrer">
              <SiGithub className="text-gray-800 hover:text-gray-600 transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/in/okechukwu-godwin-103818239/"
              target="_blank"
              rel="noopener noreferrer">
              <SiLinkedin className="text-blue-600 hover:text-blue-500 transition-all" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;
