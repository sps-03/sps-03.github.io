import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { darkMode } = useTheme();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const variants = {
    open: {
      x: 0,
      transition: {
        stiffness: 25,
        damping: 25,
      },
    },
    close: {
      x: "-100%",
      transition: {
        stiffness: 25,
        damping: 25,
      },
    },
  };

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: "text-accent-light dark:text-accent-dark",
  };

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(logoDark);
    preloadImage(logoLight);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-primary-light dark:bg-primary-dark">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 text-xl text-secondary-light dark:text-secondary-dark">
        <Link to="home" smooth={true} duration={500}>
          <motion.img
            src={darkMode ? logoDark : logoLight}
            alt="logo"
            className="h-14"
            whileHover={{
              scale: 1.15,
            }}
            aria-label="Logo"
          />
        </Link>

        <div className="flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-8">
          <ul className="hidden gap-10 sm:flex">
            <li className="transition-colors hover:text-accent-light dark:hover:text-accent-dark">
              <Link to="home" {...linkProps}>
                Home
              </Link>
            </li>
            <li className="transition-colors hover:text-accent-light dark:hover:text-accent-dark">
              <Link to="about" {...linkProps}>
                About
              </Link>
            </li>
            <li className="transition-colors hover:text-accent-light dark:hover:text-accent-dark">
              <Link to="projects" {...linkProps}>
                Projects
              </Link>
            </li>
          </ul>

          <div
            onClick={toggleNav}
            className={`${
              isNavOpen ? "" : "sm:hidden"
            } z-50 rounded-lg border border-tertiary-light border-opacity-20 p-2 text-primary-dark shadow-sm dark:border-tertiary-dark/30 dark:text-primary-light`}
            aria-label="Toggle Navigation"
          >
            {isNavOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          <motion.div
            initial={false}
            animate={isNavOpen ? "open" : "close"}
            variants={variants}
            className="fixed left-0 top-0 z-40 flex min-h-screen w-full flex-col items-center justify-center bg-primary-light dark:bg-primary-dark"
          >
            <ul className="space-y-8 text-center text-4xl">
              <li>
                <Link to="home" onClick={closeNav} {...linkProps}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" onClick={closeNav} {...linkProps}>
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" onClick={closeNav} {...linkProps}>
                  Projects
                </Link>
              </li>
            </ul>
          </motion.div>

          <ThemeToggle />
        </div>
      </div>
      <div className="block border-b border-tertiary-light/30 opacity-25 shadow-sm dark:border-tertiary-dark/30"></div>
    </div>
  );
};

export default Navbar;
