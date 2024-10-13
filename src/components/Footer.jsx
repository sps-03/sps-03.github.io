import { motion } from "framer-motion";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-primary-light pt-16 dark:bg-primary-dark">
      <div className="border-t border-tertiary-light/30 opacity-25 shadow-sm dark:border-tertiary-dark/30"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-md mx-auto flex max-w-[1200px] flex-col items-center justify-center p-8 sm:p-10 sm:text-lg"
      >
        <h3 className="text-md mb-2 text-tertiary-light dark:text-tertiary-dark">
          Thanks for visiting! Stay connected.
        </h3>
        <div className="flex flex-row gap-3 text-3xl text-tertiary-light dark:text-tertiary-dark sm:gap-4">
          <motion.a
            className="hover:text-secondary-light dark:hover:hover:text-secondary-dark"
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/mohammed-shan"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            className="hover:text-secondary-light dark:hover:text-secondary-dark"
            whileHover={{ scale: 1.15 }}
            href="https://github.com/sps-03"
            target="_blank"
          >
            <FaSquareGithub />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
