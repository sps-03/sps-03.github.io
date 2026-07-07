import { education } from "../data/data";
import EducationCard from "./EducationCard";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <div className="bg-primary pb-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="education">
        <SectionHeading kicker="Background" title="Education" />

        <div className="flex flex-col gap-4">
          {education.map((educationData, index) => (
            <EducationCard key={educationData.id} index={index} {...educationData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
