import { motion } from "framer-motion";

const EducationCard = (educationData) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: 0.25 }}
      key={educationData.id}
      className="flex flex-col rounded-lg border border-tertiary-light border-opacity-15 bg-gradient-to-b from-primary-light to-primary-shade-light p-5 text-secondary-light shadow-sm dark:border-tertiary-dark/5 dark:bg-gradient-to-b dark:from-primary-shade-dark/15 dark:to-primary-shade-dark/15 dark:text-secondary-dark dark:opacity-80 sm:flex-row"
    >
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:w-1/3">
        <img
          src={educationData.image}
          alt={educationData.university}
          className="aspect-[5/3] w-full rounded-md object-cover"
        />
      </div>

      <div className="sm:w-2/3 sm:pl-6">
        <div className="flex flex-col">
          <h3 className="text-xl font-medium">{educationData.degree}</h3>

          <p className="text-base">
            {educationData.university} ({educationData.startDate} - {educationData.endDate})
          </p>

          <ul className="list-disc pl-5 text-tertiary-light dark:text-tertiary-dark">
            {educationData.description.map((desc, index) => (
              <li key={index} className="text-base">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
