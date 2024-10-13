import { motion } from "framer-motion";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{
        scale: 1.15,
      }}
      onClick={toggleTheme}
      className="cursor-none rounded-lg border border-tertiary-light border-opacity-20 p-2 text-primary-dark shadow-sm dark:border-tertiary-dark/30 dark:text-primary-light"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: darkMode ? 180 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {darkMode ? <BsSunFill size={25} /> : <BsMoonStarsFill size={25} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
