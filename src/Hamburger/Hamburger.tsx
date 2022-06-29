import React, { SetStateAction } from "react";

import { motion } from "framer-motion";

interface Props {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Hamburger: React.FC<Props> = ({ navIsOpen, setNavIsOpen }) => {
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
    open3: {
      backgroundColor: "black",
    },
    closed: {},
  };

  const transition = { ease: "easeInOut", duration: "0.15" };

  return (
    <div
      className="cursor-pointer z-50"
      onClick={() => setNavIsOpen(!navIsOpen)}
    >
      <motion.span
        className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
        animate={navIsOpen ? "open1" : "closed"}
        variants={variants}
        transition={transition}
      ></motion.span>
      <motion.span
        className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
        animate={navIsOpen ? "open-3" : "closed"}
        variants={variants}
        transition={transition}
      ></motion.span>
      <motion.span
        className={`w-[40px] h-[2px] bg-white block my-2 mx-auto transition duration-150`}
        animate={navIsOpen ? "open2" : "closed"}
        variants={variants}
        transition={transition}
      ></motion.span>
    </div>
  );
};

export default Hamburger;
