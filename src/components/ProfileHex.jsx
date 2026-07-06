import { motion, useMotionValue, useSpring } from "framer-motion";
import { useId, useState } from "react";

const ProfileHex = ({ src }) => {
  return (
    <div className="relative flex w-5/12 items-center justify-center sm:w-7/12">
      <MiniHex
        wrapperClassName="absolute -left-3 -top-8 w-9 sm:-left-6 sm:-top-10 sm:w-11 md:w-14"
        floatDuration={5}
        floatDelay={0.2}
        entranceDelay={0.7}
      />

      <MiniHex
        wrapperClassName="absolute -left-10 -bottom-4 w-7 sm:-left-14 sm:-bottom-6 sm:w-8 md:w-10"
        floatDuration={4.2}
        floatDelay={0.9}
        entranceDelay={1.1}
      />

      <MainHex src={src} />

      <MiniHex
        wrapperClassName="absolute -bottom-10 -right-4 w-14 sm:-bottom-12 sm:-right-10 sm:w-16 md:w-20"
        floatDuration={6.5}
        floatDelay={0.6}
        entranceDelay={0.9}
      />
    </div>
  );
};

const MainHex = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 250, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 20);
    tiltX.set(py * -20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full"
      style={{ perspective: 800 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={isHovered ? { y: 0, scale: 1.06 } : { y: [0, -14, 0], scale: 1 }}
        transition={
          isHovered
            ? { duration: 0.3, ease: "easeOut" }
            : {
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.4, ease: "easeOut" },
              }
        }
        style={{ rotateX: springTiltX, rotateY: springTiltY }}
        className="hexagon aspect-[0.866] w-full bg-gradient-to-br from-accent to-accent-shade p-[5px] drop-shadow-[0_0_25px_rgba(14,165,233,0.55)] transition-[filter] duration-300 hover:drop-shadow-[0_0_40px_rgba(14,165,233,0.85)] sm:p-2"
      >
        <div className="hexagon h-full w-full overflow-hidden bg-primary">
          <img src={src} alt="Shan" className="pointer-events-none h-full w-full object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const MiniHex = ({ wrapperClassName, floatDuration, floatDelay, entranceDelay }) => {
  const gradientId = useId();
  const [isHovered, setIsHovered] = useState(false);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 300, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 35);
    tiltX.set(py * -35);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: entranceDelay }}
      className={wrapperClassName}
      style={{ perspective: 400 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={isHovered ? { y: 0, rotate: 0, scale: 1.25 } : { y: [0, -10, 0], rotate: [0, 8, 0], scale: 1 }}
        transition={
          isHovered
            ? { duration: 0.25, ease: "easeOut" }
            : {
                y: { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3, ease: "easeOut" },
              }
        }
        style={{ rotateX: springTiltX, rotateY: springTiltY }}
        className="aspect-[0.866] w-full drop-shadow-[0_0_10px_rgba(14,165,233,0.55)]"
      >
        <svg viewBox="0 0 86.6 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>
          <polygon
            points="43.3,0 86.6,25 86.6,75 43.3,100 0,75 0,25"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ProfileHex;
