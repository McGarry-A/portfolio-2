import React, { SetStateAction, useState } from "react";

import { motion } from "framer-motion";
import ActivelySearching from "../ActivelySearching/ActivelySearching";

interface Props {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Hamburger: React.FC<Props> = ({ navIsOpen, setNavIsOpen }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const variants = {
    open1: {
      WebkitTransform: "translateX(-10px) rotate(-45deg)",
      width: "28px",
      backgroundColor: "black",
    },
    open2: {
      WebkitTransform: "translateX(-10px) rotate(45deg)",
      width: "28px",
      backgroundColor: "black",
    },
    openReverse1: {
      WebkitTransform: "translateX(10px) rotate(45deg)",
      width: "28px",
    },
    openReverse2: {
      WebkitTransform: "translateX(10px) rotate(-45deg)",
      width: "28px",
    },
    open3: {
      backgroundColor: "black",
    },
    closed: {},
  };

  const transition = { ease: "easeInOut", duration: "0.15" };

  return (
    <header className="flex justify-between items-center">
      <ActivelySearching />
      <motion.div
        className="cursor-pointer z-50"
        onClick={() => setNavIsOpen(!navIsOpen)}
        variants={fadeIn}
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
          variants={variants}
          transition={transition}
        ></motion.span>
        <motion.span
          className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
          animate={navIsOpen ? "open3" : "closed"}
          variants={variants}
          transition={transition}
        ></motion.span>
        <motion.span
          className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
          animate={[
            navIsOpen ? "open2" : "closed",
            isHovering ? "openReverse2" : "",
          ]}
          variants={variants}
          transition={transition}
        ></motion.span>
      </motion.div>
    </header>
  );
};

export default Hamburger;

// Animation
const fadeIn = {
  hide: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { delay: 0.6 } },
};
