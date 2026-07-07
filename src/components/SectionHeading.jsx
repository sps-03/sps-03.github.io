import { motion } from "framer-motion";

const SectionHeading = ({ kicker, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-10 flex flex-col items-center gap-3 pt-8 text-center"
    >
      {kicker ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{kicker}</span>
      ) : null}
      <h2 className="text-4xl font-bold text-secondary sm:text-5xl">{title}</h2>
      <span className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-shade" />
    </motion.div>
  );
};

export default SectionHeading;
