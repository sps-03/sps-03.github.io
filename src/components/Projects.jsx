import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <div className="bg-primary pb-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="projects">
        <SectionHeading kicker="My Work" title="Projects" />

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
