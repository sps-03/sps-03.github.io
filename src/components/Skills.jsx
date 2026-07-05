import { motion } from "framer-motion";
import { skills } from "../data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="bg-primary pt-8">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="skills">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="py-8 text-center text-4xl font-semibold text-tertiary"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
