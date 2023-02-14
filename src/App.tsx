import React, { useState } from "react";
import "./App.css";

import Hamburger from "./Hamburger/Hamburger";
import Hero from "./Hero/Hero";

import { AnimatePresence } from "framer-motion";
import SocialsBar from "./SocialsBar/SocialsBar";

import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="max-w-[1920px] py-10 px-16 mx-auto relative h-full min-h-screen flex flex-col flex-1">
    {children}
  </div>
);

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const navProps = { navIsOpen, setNavIsOpen };
  const location = useLocation();


  return (
    <div className="bg-hero h-full min-h-screen text-white font-leagueSpartan block relative">
      <AnimatePresence>
        <Nav {...navProps} key="NAV" />
      </AnimatePresence>
      <ContentWrapper>
        <SocialsBar navIsOpen={navIsOpen} />
        <Hamburger {...navProps} />

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero {...navProps} />} />
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
