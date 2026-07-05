import { motion } from "framer-motion";

const SkillCard = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="flex w-16 flex-col items-center gap-2 sm:w-20"
    >
      <div
        className="hexagon flex aspect-[0.866] w-full items-center justify-center bg-primary-shade text-3xl sm:text-4xl"
        style={{ color }}
      >
        <Icon />
      </div>
      <span className="text-center text-xs text-tertiary sm:text-sm">{name}</span>
    </motion.div>
  );
};

export default SkillCard;
