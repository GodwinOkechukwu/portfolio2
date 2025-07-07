import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import StarfieldBackground from "../components/StarfieldBackground";

const Contact = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center px-4 h-screen" id="contact">
      <Navbar />
      <StarfieldBackground />
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-200 mb-8 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          Get in Touch
        </motion.h2>

        <motion.form
          action="https://formspree.io/f/xzzejolv" // replace with your actual endpoint
          method="POST"
          className="grid gap-6 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded-lg placeholder:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          />
          <motion.textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="p-3 border rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          />
          <motion.button
            type="submit"
            className="!bg-white py-3 text-black rounded-lg hover:bg-gray-800 transition cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}>
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
