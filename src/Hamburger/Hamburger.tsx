import React, { SetStateAction, useState } from "react";

import { motion } from "framer-motion";
import ActivelySearching from "../ActivelySearching/ActivelySearching";

import { HAMBURGER_ANIMATIONS } from "../animations";

interface Props {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const { HAMBURGER_VARIANTS, FADEIN_RIGHT, HAMBURGER_TRANSITION } =
  HAMBURGER_ANIMATIONS;

const Hamburger: React.FC<Props> = ({ navIsOpen, setNavIsOpen }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <header className="flex justify-between items-center">
      <ActivelySearching />
      <motion.div
        className="cursor-pointer z-50"
        onClick={() => setNavIsOpen(!navIsOpen)}
        variants={FADEIN_RIGHT}
        initial="hide"
        animate="show"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.span
          className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
          animate={[
            navIsOpen ? "open1" : "closed",
            isHovering ? "openReverse1" : "",
          ]}
          variants={HAMBURGER_VARIANTS}
          transition={HAMBURGER_TRANSITION}
        ></motion.span>
        <motion.span
          className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
          animate={navIsOpen ? "open3" : "closed"}
          variants={HAMBURGER_VARIANTS}
          transition={HAMBURGER_TRANSITION}
        ></motion.span>
        <motion.span
          className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
          animate={[
            navIsOpen ? "open2" : "closed",
            isHovering ? "openReverse2" : "",
          ]}
          variants={HAMBURGER_VARIANTS}
          transition={HAMBURGER_TRANSITION}
        ></motion.span>
      </motion.div>
    </header>
  );
};

export default Hamburger;
