import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

const SkillCard = ({ name, icon: Icon, color, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 300, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 300, damping: 20 });

  const floatDelay = (index % 6) * 0.2;
  const floatDuration = 3.4 + (index % 4) * 0.4;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 40);
    tiltX.set(py * -40);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.6) }}
      className="flex w-16 flex-col items-center gap-2 sm:w-20"
    >
      <div className="relative w-full" style={{ perspective: 400 }}>
        <div
          className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300"
          style={{ backgroundColor: color, opacity: isHovered ? 0.7 : 0 }}
        />

        <motion.div
          animate={isHovered ? { y: 0, scale: 1.15 } : { y: [0, -8, 0], scale: 1 }}
          transition={
            isHovered
              ? { duration: 0.25, ease: "easeOut" }
              : {
                  y: { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3, ease: "easeOut" },
                }
          }
          style={{ rotateX: springTiltX, rotateY: springTiltY, "--glow": color }}
          className="hexagon relative aspect-[0.866] w-full bg-primary-shade p-[2px] transition-colors duration-300 hover:bg-[var(--glow)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hexagon flex h-full w-full items-center justify-center bg-primary-shade text-3xl sm:text-4xl">
            <div
              className="transition-transform duration-300"
              style={{ color, transform: isHovered ? "scale(1.1)" : "scale(1)" }}
            >
              <Icon />
            </div>
          </div>
        </motion.div>
      </div>
      <span
        className={`text-center text-xs transition-colors duration-300 sm:text-sm ${
          isHovered ? "text-secondary" : "text-tertiary"
        }`}
      >
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
