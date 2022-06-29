import React, { Dispatch, SetStateAction, useState } from "react";
import "./App.css";

import Hamburger from "./Hamburger/Hamburger";
import Hero from "./Hero/Hero";

import { motion } from "framer-motion";
import Links from "./Links/Links";
import SocialsBar from "./SocialsBar/SocialsBar";

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="max-w-[1920px] p-10 mx-auto relative h-screen">
    {children}
  </div>
);

const NavMenu: React.FC<{
  children: React.ReactNode;
  navIsOpen: boolean;
  setNavIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ children, navIsOpen, setNavIsOpen }) => {
  const openNavClass = "translate-x-full";

  return (
    <div
      className={`absolute top-0 -right-34 w-screen bg-white h-screen transition duration-200 flex justify-center items-center z-50 ${
        navIsOpen ? "" : openNavClass
      }`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const navProps = { navIsOpen, setNavIsOpen };

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
    show: { opacity: 1, translateX: "100px" },
  };

  const hoverState = {
    color: "#6d28d9",
    transition: { duration: 0.2 },
  };

  return (
    <div className="App bg-hero h-screen w-screen text-white font-leagueSpartan block relative">
      {navIsOpen && (
        <NavMenu {...navProps}>
          <motion.ul
            className="text-center flex flex-col "
            variants={navlist}
            initial="hidden"
            animate="show"
          >
            <motion.li
              className="text-gray-900 text-6xl cursor-pointer my-8"
              variants={navItem}
              whileHover={hoverState}
            >
              Projects
            </motion.li>
            <motion.li
              className="text-gray-900 text-6xl cursor-pointer my-8"
              variants={navItem}
              whileHover={hoverState}
            >
              About Me
            </motion.li>
            <motion.li
              className="text-gray-900 text-6xl cursor-pointer my-8"
              variants={navItem}
              whileHover={hoverState}
            >
              Resume
            </motion.li>
          </motion.ul>
        </NavMenu>
      )}

      <ContentWrapper>
        <SocialsBar navIsOpen={navIsOpen} />
        <header className="flex justify-end">
          <Hamburger {...navProps} />
        </header>

        <Hero />
        <Links />
      </ContentWrapper>
    </div>
  );
};

export default App;
