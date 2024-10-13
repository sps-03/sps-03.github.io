import { motion } from "framer-motion";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-primary-light pt-8 dark:bg-primary-dark">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="projects">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="py-8 text-center text-4xl font-semibold text-tertiary-light dark:text-tertiary-dark"
        >
          Projects
        </motion.h2>

        <div className="flex flex-col gap-4">{projects.map((project) => ProjectCard(project))}</div>
      </div>
    </div>
  );
};

export default Projects;
