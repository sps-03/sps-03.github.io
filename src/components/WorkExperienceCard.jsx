import { motion } from "framer-motion";

const WorkExperienceCard = ({ index = 0, ...workExperienceData }) => {
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
          src={workExperienceData.image}
          alt={workExperienceData.company}
          className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="sm:w-2/3 sm:pl-6">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{workExperienceData.title}</h3>

          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
            <span className="font-medium text-accent-shade">{workExperienceData.company}</span>
            <span className="text-tertiary">
              {workExperienceData.startDate} - {workExperienceData.endDate}
            </span>
          </p>

          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-tertiary marker:text-accent-shade">
            {workExperienceData.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;
