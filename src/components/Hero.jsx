import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaFileLines, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/profile-pic.png";
import resume from "../assets/resume.pdf";
import WaterDropGrid from "./WaterDropGrid";

const Hero = () => {
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(profilePic);
  }, []);

  return (
    <div className="min-h-dvh overflow-x-clip bg-primary">
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
              className="pt-6 text-center text-3xl tracking-tight text-tertiary sm:pt-0 sm:text-left sm:text-4xl md:text-5xl"
            >
              HEY, I AM <br />
              <span className="text-7xl font-medium text-secondary sm:pl-6 sm:text-8xl md:text-9xl lg:pl-10">
                SHAN
              </span>
            </motion.p>

            <TypeAnimation
              sequence={["Developer", 1000, "Creator", 1000, "Problem-Solver", 1000]}
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-b from-accent to-accent-shade bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="my-4 flex flex-row items-center gap-2 sm:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.15 }}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="rounded-md bg-secondary p-2 text-xl text-primary"
              >
                <FaFileLines />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/in/mohammed-shan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-secondary p-2 text-xl text-primary"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/sps-03"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-secondary p-2 text-xl text-primary"
              >
                <FaGithub />
              </motion.a>
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
            src={profilePic}
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
