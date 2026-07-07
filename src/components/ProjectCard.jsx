import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ index = 0, ...projectData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: Math.min(index * 0.12, 0.6) }}
      whileHover={{ x: -6, y: -6 }}
      className="entry-card group"
    >
      <div className="mb-4 flex-shrink-0 overflow-hidden rounded-lg sm:mb-0 sm:w-1/3">
        <img
          src={projectData.image}
          alt={projectData.title}
          className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="sm:w-2/3 sm:pl-6">
        <h3 className="text-xl font-semibold">{projectData.title}</h3>
        <p className="mb-2 mt-1 text-sm text-tertiary">{projectData.description}</p>

        <div className="mb-2 flex flex-row flex-wrap gap-2">
          {projectData.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent-shade"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          {projectData.githubLink ? (
            <a
              href={projectData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-tertiary/20 px-3 py-1 text-sm text-tertiary transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FaGithubSquare className="text-lg" />
              <span>Code</span>
            </a>
          ) : null}

          {projectData.liveLink ? (
            <a
              href={projectData.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-tertiary/20 px-3 py-1 text-sm text-tertiary transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FaExternalLinkSquareAlt className="text-lg" />
              <span>Live</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
