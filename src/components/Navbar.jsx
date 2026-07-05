import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    close: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: "text-accent",
  };

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(logo);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-primary">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 text-xl text-secondary">
        <Link to="home" smooth={true} duration={500}>
          <motion.img
            src={logo}
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
            <li className="transition-colors hover:text-accent">
              <Link to="home" {...linkProps}>
                Home
              </Link>
            </li>
            <li className="transition-colors hover:text-accent">
              <Link to="skills" {...linkProps}>
                Skills
              </Link>
            </li>
            <li className="transition-colors hover:text-accent">
              <Link to="work-experience" {...linkProps}>
                Experience
              </Link>
            </li>
            <li className="transition-colors hover:text-accent">
              <Link to="education" {...linkProps}>
                Education
              </Link>
            </li>
            <li className="transition-colors hover:text-accent">
              <Link to="projects" {...linkProps}>
                Projects
              </Link>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggleNav}
            className={`${
              isNavOpen ? "" : "sm:hidden"
            } z-50 rounded-lg border border-tertiary/30 p-2 text-cream shadow-sm`}
            aria-label="Toggle Navigation"
          >
            {isNavOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>

          <motion.div
            initial={false}
            animate={isNavOpen ? "open" : "close"}
            variants={variants}
            className="fixed left-0 top-0 z-40 flex min-h-screen w-full flex-col items-center justify-center bg-primary"
          >
            <ul className="space-y-8 text-center text-4xl">
              <li>
                <Link to="home" onClick={closeNav} {...linkProps}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="skills" onClick={closeNav} {...linkProps}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="work-experience" onClick={closeNav} {...linkProps}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="education" onClick={closeNav} {...linkProps}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="projects" onClick={closeNav} {...linkProps}>
                  Projects
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="block border-b border-tertiary/30 opacity-25 shadow-sm"></div>
    </div>
  );
};

export default Navbar;
