import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// CONTAINERS

const NavMenu: React.FC<{
  children: React.ReactNode;
  navIsOpen: boolean;
  setNavIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ children, navIsOpen, setNavIsOpen }) => {
  return (
    <motion.div
      className={`absolute top-0 w-screen bg-white h-screen flex justify-center items-center z-40 transition duration-150`}
      variants={nav}
      initial="closed"
      exit="exit"
      animate={navIsOpen && "open"}
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
        variants={navItem}
        whileHover={hoverState}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <NavLink to={link}>{children}</NavLink>
      </motion.li>
    );
  };
  const navProps = { navIsOpen, setNavIsOpen };

  if (navIsOpen) {
    return (
      <NavMenu {...navProps}>
        <motion.ul
          className="text-center flex flex-col w-full items-center space-y-8"
          variants={navlist}
          initial="hidden"
          animate="show"
        >
          <NavItem link="/">Home</NavItem>
          <NavItem link="/projects">Projects</NavItem>
          <NavItem link="/about">About Me</NavItem>
        </motion.ul>
      </NavMenu>
    );
  }

  return <></>;
};

export default Nav;

// ANIMATIONS

const navlist = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, translateX: "-100px" },
  show: { opacity: 1, translateX: 0 },
};

const hoverState = {
  color: "#6d28d9",
  transition: { duration: 0.2 },
};

const nav = {
  closed: {
    width: 0,
  },
  open: {
    width: "100%",
    transition: {
      delay: 0.1,
    },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      delay: 0.1,
    },
  },
};
