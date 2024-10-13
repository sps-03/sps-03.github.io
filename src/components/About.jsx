import { motion } from "framer-motion";
import { education, workExperience } from "../data/data";
import EducationCard from "./EducationCard";
import WorkExperienceCard from "./WorkExperienceCard";

const About = () => {
  return (
    <div className="bg-primary-light dark:bg-primary-dark">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="about">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="py-8 text-center text-4xl font-semibold text-tertiary-light dark:text-tertiary-dark"
        >
          About Me
        </motion.h2>

        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mb-3 text-2xl font-semibold text-tertiary-light dark:text-tertiary-dark"
          >
            Education
          </motion.h3>
          <div className="flex flex-col gap-4">{education.map((educationData) => EducationCard(educationData))}</div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mb-3 text-2xl font-semibold text-tertiary-light dark:text-tertiary-dark"
          >
            Work Experience
          </motion.h3>
          <div className="flex flex-col gap-4">
            {workExperience.map((workExperienceData) => WorkExperienceCard(workExperienceData))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
