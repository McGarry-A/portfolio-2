import React from "react";
import { IconType } from "react-icons";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import { motion } from "framer-motion";

const FixedBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="absolute h-screen z-50 top-0 left-0 w-20 flex flex-col justify-center items-center space-y-10">
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
    <motion.a href={link} variants={fadeIn} initial="hide" animate="show">
      <Icon
        size="3rem"
        className={`cursor-pointer  hover:scale-110 transition duration-150 ${
          navIsOpen
            ? "text-black hover:text-violet-900"
            : "text-white hover:text-violet-900"
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
        link="Twitter"
        navIsOpen={navIsOpen}
        Icon={AiOutlineTwitter}
      />
      <IconContainer
        link="Facebook"
        navIsOpen={navIsOpen}
        Icon={AiFillFacebook}
      />
      <IconContainer link="GitHub" navIsOpen={navIsOpen} Icon={AiFillGithub} />
      <IconContainer
        link="Linkedin"
        navIsOpen={navIsOpen}
        Icon={AiFillLinkedin}
      />
    </FixedBar>
  );
};

export default SocialsBar;

// Animations

const fadeIn = {
  hide: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { delay: 2.6 } },
};
