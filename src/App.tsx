import React, { useState } from "react";
import "./App.css";

import Hamburger from "./Hamburger/Hamburger";
import Hero from "./Hero/Hero";

import { AnimatePresence } from "framer-motion";
// import Links from "./Links/Links";
import SocialsBar from "./SocialsBar/SocialsBar";

import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Projects from "./Projects/Projects";

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AnimatePresence>
    <div className="max-w-[1920px] p-10 mx-auto relative h-screen">
      {children}
    </div>
  </AnimatePresence>
);

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const navProps = { navIsOpen, setNavIsOpen };

  return (
    <div className="bg-hero h-screen w-screen text-white font-leagueSpartan block relative">
      <Nav {...navProps} />
      <ContentWrapper>
        <SocialsBar navIsOpen={navIsOpen} />
        <Hamburger {...navProps} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ContentWrapper>
    </div>
  );
};

export default App;
