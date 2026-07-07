import { skills } from "../data/data";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="bg-primary pb-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="skills">
        <SectionHeading kicker="What I Know" title="Skills" />

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} index={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
