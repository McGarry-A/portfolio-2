import React from "react";
import { IconType } from "react-icons";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { SOCIAL_ANIMATIONS } from "../animations";

const { FADEIN_LEFT } = SOCIAL_ANIMATIONS;

const FixedBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="absolute h-screen z-50 top-0 left-0 w-20 lg:flex flex-col justify-center items-center space-y-10 hidden">
      {children}
    </div>
  );
};

const IconContainer: React.FC<{
  link: string;
  navIsOpen: boolean;
  Icon: IconType;
}> = ({ link, navIsOpen, Icon }) => {
  return (
    <motion.a href={link} variants={FADEIN_LEFT} initial="hide" animate="show">
      <Icon
        size="3rem"
        className={`cursor-pointer  hover:scale-110 transition duration-150 ${
          navIsOpen
            ? "text-black hover:text-violet-600"
            : "text-white hover:text-violet-600"
        }`}
      />
    </motion.a>
  );
};

interface Props {
  navIsOpen: boolean;
}

const SocialsBar: React.FC<Props> = ({ navIsOpen }) => {
  return (
    <FixedBar>
      <IconContainer
        link="https://www.linkedin.com/in/ahmed-mcgarry-b82438161/"
        navIsOpen={navIsOpen}
        Icon={AiFillGithub}
      />
      <IconContainer
        link="https://github.com/McGarry-A"
        navIsOpen={navIsOpen}
        Icon={AiFillLinkedin}
      />
    </FixedBar>
  );
};

export default SocialsBar;

// Animations
