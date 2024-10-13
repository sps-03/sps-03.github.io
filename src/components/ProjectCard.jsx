import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";

const ProjectCard = (projectData) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: 0.25 }}
      key={projectData.id}
      className="flex flex-col rounded-lg border border-tertiary-light border-opacity-15 bg-gradient-to-b from-primary-light to-primary-shade-light p-5 text-secondary-light shadow-sm dark:border-tertiary-dark/5 dark:bg-gradient-to-b dark:from-primary-shade-dark/15 dark:to-primary-shade-dark/15 dark:text-secondary-dark dark:opacity-80 sm:flex-row"
    >
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:w-1/3">
        <img src={projectData.image} alt={projectData.title} className="aspect-[5/3] w-full rounded-md object-cover" />
      </div>

      <div className="sm:w-2/3 sm:pl-6">
        <h3 className="text-xl font-medium">{projectData.title}</h3>
        <p className="mb-2 text-base text-tertiary-light dark:text-tertiary-dark">{projectData.description}</p>

        <div className="mb-2 flex flex-row flex-wrap gap-3">
          {projectData.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border bg-tertiary-light/5 px-2 py-0.5 text-sm text-tertiary-light dark:border-tertiary-dark/5 dark:bg-tertiary-dark/10 dark:text-tertiary-dark"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-6">
          {projectData.githubLink ? (
            <a
              href={projectData.githubLink}
              target="_blank"
              className="flex gap-2 text-tertiary-light hover:text-secondary-light dark:text-tertiary-dark dark:hover:text-secondary-dark"
            >
              <FaGithubSquare className="text-xl" />
              <span>Code</span>
            </a>
          ) : null}

          {projectData.liveLink ? (
            <a
              href={projectData.liveLink}
              target="_blank"
              className="flex gap-2 text-tertiary-light hover:text-secondary-light dark:text-tertiary-dark dark:hover:text-secondary-dark"
            >
              <FaExternalLinkSquareAlt className="text-xl" />
              <span>Live</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
