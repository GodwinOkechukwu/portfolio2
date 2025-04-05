import React from "react";
import Navbar from "../components/Navbar";
import homebg from "../assets/homebg2.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen w-full"
      style={{ backgroundImage: `url('${homebg}')` }}>
      <Navbar />

      <div className="w-full mt-16 md:mt-11">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-white w-[80%] m-auto md:w-[60%] py-4 text-center md:text-xl font-semibold">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Hi, I'm Godwin.
          </h2>
          <p>
            A Frontend Developer with years of experience building responsive,
            high-quality websites using React, Next.js, TypeScript, and Tailwind
            CSS. I focus on clean code, pixel-perfect UI, and delivering smooth,
            detail-oriented user experiences.
          </p>
        </motion.article>
      </div>
    </div>
  );
};

export default Home;
