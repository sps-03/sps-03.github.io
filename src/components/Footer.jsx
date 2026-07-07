import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-primary pt-8">
      <div className="mx-auto h-px w-full max-w-[1200px] bg-gradient-to-r from-transparent via-tertiary/30 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-md mx-auto flex max-w-[1200px] flex-col items-center justify-center p-8 sm:p-10 sm:text-lg"
      >
        <h3 className="text-md mb-3 text-tertiary">Thanks for visiting! Stay connected.</h3>
        <div className="flex flex-row gap-4 text-3xl text-tertiary sm:gap-5">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/mohammed-shan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md bg-primary-shade p-2 text-xl text-[#0A66C2] shadow-sm transition-colors duration-300 hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_8px_25px_-6px_rgba(10,102,194,0.6)]"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/sps-03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md bg-primary-shade p-2 text-xl text-secondary shadow-sm transition-colors duration-300 hover:bg-white hover:text-black hover:shadow-[0_8px_25px_-6px_rgba(255,255,255,0.35)]"
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
