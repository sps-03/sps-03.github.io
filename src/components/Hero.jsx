import { motion } from "framer-motion";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import profilePicDark from "../assets/profile-pic-dark.png";
import profilePicLight from "../assets/profile-pic-light.png";
import { useTheme } from "../context/ThemeContext";
import WaterDropGrid from "./WaterDropGrid";

const Hero = () => {
  const { darkMode } = useTheme();
  return (
    <div className="min-h-dvh overflow-x-clip bg-primary-light dark:bg-primary-dark">
      <div
        className="mx-auto flex min-h-screen max-w-[1200px] flex-col-reverse items-center justify-evenly pt-24 sm:flex-row sm:justify-around"
        id="home"
      >
        <div className="z-10 flex w-full items-start justify-center sm:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center sm:items-start"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-6 text-center text-3xl tracking-tight text-tertiary-light dark:text-tertiary-dark sm:pt-0 sm:text-left sm:text-4xl md:text-5xl"
            >
              HEY, I AM <br />
              <span className="bg-gradient-to-b from-accent-light to-accent-shade-light  bg-clip-text text-7xl font-medium text-transparent dark:bg-gradient-to-b dark:from-accent-dark dark:to-accent-shade-dark sm:pl-6 sm:text-8xl md:text-9xl lg:pl-10">
                SHAN
              </span>
            </motion.p>

            <TypeAnimation
              sequence={["Developer", 1000, "Creator", 1000, "Problem-Solver", 1000]}
              speed={50}
              repeat={Infinity}
              className="text-2xl font-semibold text-secondary-light dark:text-secondary-dark sm:text-4xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="my-4 flex flex-row items-center gap-2 sm:gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.15,
                }}
                className="cursor-none rounded-md bg-secondary-light px-3 py-1 font-medium text-primary-light dark:bg-secondary-dark dark:text-primary-dark"
              >
                Resume
              </motion.button>

              <div className="flex flex-row gap-2 text-4xl text-secondary-light dark:text-secondary-dark sm:gap-4">
                <motion.a whileHover={{ scale: 1.15 }} href="https://www.linkedin.com/in/mohammed-shan" target="_blank">
                  <FaLinkedin />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15 }} href="https://github.com/sps-03" target="_blank">
                  <FaSquareGithub />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative flex w-full items-start justify-center sm:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="-z-1 absolute inset-0 flex items-center justify-center"
          >
            <WaterDropGrid />
          </motion.div>
          <motion.img
            src={darkMode ? profilePicDark : profilePicLight}
            className="pointer-events-none relative z-10 w-10/12 sm:w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
