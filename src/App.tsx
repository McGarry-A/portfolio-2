import React, { useState } from "react";
import "./App.css";

import Hamburger from "./Hamburger/Hamburger";
import Hero from "./Hero/Hero";

import { AnimatePresence } from "framer-motion";
// import Links from "./Links/Links";
import SocialsBar from "./SocialsBar/SocialsBar";

import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import Projects from "./Projects/Projects";
import About from "./About/About";

import { motion } from "framer-motion";

import { HAMBURGER_ANIMATIONS } from "./animations";
import Contact from "./Contact/Contact";

const { FADEIN_RIGHT } = HAMBURGER_ANIMATIONS;

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="max-w-[1920px] py-10 px-16 mx-auto relative h-screen">
    {children}
  </div>
);

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const navProps = { navIsOpen, setNavIsOpen };
  const location = useLocation();

  const renderShortDesc = () => {
    return (
      <motion.div
        className={`opacity-50 text-right absolute right-32 bottom-5 z-50 ${
          navIsOpen ? "text-gray-700" : "text-gray-400"
        }`}
        variants={FADEIN_RIGHT}
        initial="hide"
        animate="show"
      >
        <p>
          This website was created and designed soley by Ahmed McGarry using
          Typescript, React, Tailwind and FramerMotion.
        </p>
        <p>
          Click here to view the{" "}
          <a
            href="https://github.com/McGarry-A/portfolio-2"
            className="underline underline-violet-600 text-violet-500 cursor-pointer"
          >
            Source Code
          </a>
        </p>
      </motion.div>
    );
  };
  return (
    <div className="bg-hero h-screen w-screen text-white font-leagueSpartan block relative">
      <AnimatePresence>
        <Nav {...navProps} key="NAV" />
      </AnimatePresence>
      <ContentWrapper>
        <SocialsBar navIsOpen={navIsOpen} />
        <Hamburger {...navProps} />
        {renderShortDesc()}

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </ContentWrapper>
    </div>
  );
};

export default App;
