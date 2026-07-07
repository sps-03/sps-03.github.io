import { workExperience } from "../data/data";
import SectionHeading from "./SectionHeading";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <div className="bg-primary pb-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="work-experience">
        <SectionHeading kicker="Career" title="Work Experience" />

        <div className="flex flex-col gap-4">
          {workExperience.map((workExperienceData, index) => (
            <WorkExperienceCard key={workExperienceData.id} index={index} {...workExperienceData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
