import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaNode } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { AiOutlineArrowDown, AiOutlineCloudDownload } from "react-icons/ai";
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

import { HERO_ANIMATIONS } from "../animations";

const { DIV_VARIANT, LETTER_VARIANT, FADEIN_Y } = HERO_ANIMATIONS;

const techIcons = [
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNode,
  DiJavascript1,
  DiMongodb,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
];

const Hero = () => {
  const renderName = () => {
    const name = "Ahmed McGarry";

    return (
      <motion.div
        variants={DIV_VARIANT}
        className="text-8xl font-bold"
        initial="hidden"
        animate="show"
      >
        {name.split("").map((el, index) => {
          return (
            <motion.span
              variants={LETTER_VARIANT}
              initial="hide"
              animate="show"
            >
              {el}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const renderTechStack = () => {
    return (
      <motion.div
        className="text-xl flex space-x-3 pt-4 cursor-pointer"
        variants={FADEIN_Y}
        viewport={{ once: true }}
        initial="hide"
        animate="show"
      >
        {techIcons.map((El, index) => (
          <motion.span
            className="p-2"
            whileHover={{
              rotate: 360,
              scale: [1, 0.8, 1.7],
              transition: { duration: 0.3 },
            }}
            key={index}
          >
            <El size="3rem" className="hover:text-violet-700" />
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const renderButtons = () => (
    <motion.div
      className="space-x-4 text-2xl flex items-center"
      variants={FADEIN_Y}
      viewport={{ once: true }}
      initial="hide"
      animate="show"
    >
      <motion.button
        className="px-6 py-2 text-lg bg-violet-700 border border-violet-700"
        whileHover={{
          backgroundColor: "transparent",
          border: "1px solid white",
        }}
      >
        Projects
      </motion.button>
      <motion.button className="px-6 py-2 text-lg border space-x-2 inline-flex items-center hover:text-violet-500 border-violet-700">
        <AiOutlineCloudDownload className="mx-1" size="1.3rem" />
        Resume
      </motion.button>
    </motion.div>
  );

  const renderDownArrow = () => {
    return (
      <motion.div
        className="w-12 h-12 rounded-full border-gray-500 border-2 bg-transparent animate-bounce flex justify-center items-center shadow-md cursor-pointer"
        variants={FADEIN_Y}
        initial="hide"
        animate="show"
      >
        <AiOutlineArrowDown size={"2em"} className="text-violet-700" />
      </motion.div>
    );
  };

  return (
    <motion.div className="text-gray-100 space-y-4 max-h-screen h-full flex flex-col justify-center lg:pl-48 relative">
      <motion.span
        className="text-5xl"
        variants={FADEIN_Y}
        initial="hide"
        animate="show"
        viewport={{ once: true }}
      >
        Hello, I am
      </motion.span>
      {renderName()}
      <motion.div variants={FADEIN_Y} initial="hide" animate="show">
        <p className="text-gray-400 w-full text-xl max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </motion.div>
      {renderButtons()}
      {renderTechStack()}
      <div className="pt-10">{renderDownArrow()}</div>
    </motion.div>
  );
};

export default Hero;
