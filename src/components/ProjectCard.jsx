import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";

const ProjectCard = (props) => {
  const projectData = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: 0.25 }}
      className="flex flex-col rounded-lg border border-tertiary/5 bg-gradient-to-b from-primary-shade/15 to-primary-shade/15 p-5 text-secondary opacity-80 shadow-sm sm:flex-row"
    >
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:w-1/3">
        <img src={projectData.image} alt={projectData.title} className="aspect-[5/3] w-full rounded-md object-cover" />
      </div>

      <div className="sm:w-2/3 sm:pl-6">
        <h3 className="text-xl font-medium">{projectData.title}</h3>
        <p className="mb-2 text-base text-tertiary">{projectData.description}</p>

        <div className="mb-2 flex flex-row flex-wrap gap-3">
          {projectData.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-tertiary/5 bg-tertiary/10 px-2 py-0.5 text-sm text-tertiary"
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
              rel="noopener noreferrer"
              className="flex gap-2 text-tertiary hover:text-secondary"
            >
              <FaGithubSquare className="text-xl" />
              <span>Code</span>
            </a>
          ) : null}

          {projectData.liveLink ? (
            <a
              href={projectData.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 text-tertiary hover:text-secondary"
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
