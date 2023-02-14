import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { NAV_ANIMATIONS } from "../animations";

import Resume from "../resume/Ahmed_McGarry_Resume.pdf";

const { NAV_VARIANT, NAV_ITEM, NAV_LIST, HOVER_STATE } = NAV_ANIMATIONS;

const NavMenu: React.FC<{
  children: React.ReactNode;
  navIsOpen: boolean;
  setNavIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ children, navIsOpen, setNavIsOpen }) => {
  return (
    <motion.div
      className={`absolute top-0 bg-white h-screen flex justify-center items-center z-40`}
      variants={NAV_VARIANT}
      initial="closed"
      exit="closed"
      animate={navIsOpen ? "open" : "closed"}
    >
      {children}
    </motion.div>
  );
};

// INTERFACE

interface Props {
  navIsOpen: boolean;
  setNavIsOpen: Dispatch<SetStateAction<boolean>>;
}

// COMPONENT

const Nav: React.FC<Props> = ({ navIsOpen, setNavIsOpen }) => {
  const NavItem: React.FC<{ children: React.ReactNode; link: string }> = ({
    children,
    link,
  }) => {
    return (
      <motion.li
        className="text-gray-900 text-6xl cursor-pointer"
        variants={NAV_ITEM}
        whileHover={HOVER_STATE}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <NavLink to={link}>{children}</NavLink>
      </motion.li>
    );
  };
  const navProps = { navIsOpen, setNavIsOpen };

  return (
    <NavMenu {...navProps}>
      <motion.ul
        className="text-center flex flex-col w-full items-center space-y-8"
        variants={NAV_LIST}
        initial="hidden"
        animate="show"
      >
        <NavItem link="/">Home</NavItem>
        <NavItem link="/projects">Projects</NavItem>
        <NavItem link="/about">About Me</NavItem>
        <NavItem link="/contact">Contact</NavItem>
        <motion.div variants={NAV_ITEM}>
          <a
            className="text-violet-500 text-3xl cursor-pointer border-violet-700 px-6 py-2 border-2 hover:bg-violet-600 hover:border-violet-600 hover:text-gray-100 rounded-sm transition duration-150 flex items-center"
            href={Resume}
            download="AhmedMcGarry_Resume.pdf"
          >
            <AiOutlineCloudDownload size={"2.4rem"} className="mr-1" />
            Resume
          </a>
        </motion.div>
      </motion.ul>
    </NavMenu>
  );
};

export default Nav;
