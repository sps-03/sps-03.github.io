import { motion } from "framer-motion";
import { education } from "../data/data";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16" id="education">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="py-8 text-center text-4xl font-semibold text-tertiary"
        >
          Education
        </motion.h2>

        <div className="flex flex-col gap-4">
          {education.map((educationData) => (
            <EducationCard key={educationData.id} {...educationData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
