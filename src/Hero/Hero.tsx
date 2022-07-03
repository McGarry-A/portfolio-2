import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaNode } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

import { HERO_ANIMATIONS } from "../animations";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Resume from "../resume/Ahmed_McGarry_Resume.pdf";

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const renderName = () => {
    const name = "Ahmed McGarry";

    return (
      <motion.div
        variants={DIV_VARIANT}
        className="text-8xl font-bold"
        initial="hide"
        animate="show"
      >
        {name.split("").map((el, index) => {
          return (
            <motion.span variants={LETTER_VARIANT} key={index}>
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
      className="space-x-2 text-2xl flex items-center"
      variants={FADEIN_Y}
      viewport={{ once: true }}
      initial="hide"
      animate="show"
    >
      <NavLink to="/projects">
        <motion.button
          className="px-9 py-2 text-xl bg-violet-700 border border-violet-700 hover:bg-transparent transition duration-150"
          whileHover={{
            border: "1px solid white",
          }}
        >
          Projects
        </motion.button>
      </NavLink>
      <a href={Resume} download="Ahmed_McGarry_Resume.pdf">
        <motion.button className="px-6 py-2 text-xl border space-x-2 inline-flex items-center hover:text-violet-500 border-violet-700">
          <AiOutlineCloudDownload className="mx-1" size="1.3rem" />
          Resume
        </motion.button>
      </a>
    </motion.div>
  );

  // const renderDownArrow = () => {
  //   return (
  //     <div className="flex items-center">
  //       <motion.div
  //         className="w-12 h-12 rounded-full border-gray-500 border-2 bg-transparent animate-bounce flex justify-center items-center shadow-md cursor-pointer"
  //         variants={FADEIN_Y}
  //         initial="hide"
  //         animate="show"
  //       >
  //         <AiOutlineArrowDown size={"2em"} className="text-violet-700" />
  //       </motion.div>

  //     </div>
  //   );
  // };

  return loading === false ? (
    <motion.div
      className="text-gray-100 space-y-4 max-h-screen h-full flex flex-col justify-center lg:pl-48 relative"
      exit={{ opacity: 0, y: 600 }}
      transition={{ duration: 0.4 }}
    >
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
          Currenly working as a junior front end developer working at Beaty
          Works, an E-commerce business building webpages and working with
          technologies like React and the React Ecosystem, Magento, Attraqt and
          much more!{" "}
        </p>
        <br />
        <p className="text-gray-400 w-full text-xl max-w-2xl">
          Some of my most recent projects include a{" "}
          <a
            href="https://pos-vert.vercel.app/"
            className="text-violet-500 underline hover:text-violet-400"
          >
            Point of Sale
          </a>{" "}
          web-application that allows for adding and tracking of customers and
          orders, inspired by my time at CleanCloud. I have also created an
          Ecommerce Front-end,{" "}
          <a
            href="https://mcgarry-a.github.io/audiophile/"
            className="text-violet-500 underline hover:text-violet-400"
          >
            Audiophile
          </a>
          .
        </p>
      </motion.div>
      {renderButtons()}
      {renderTechStack()}
      {/* <div className="pt-10">{renderDownArrow()}</div> */}
    </motion.div>
  ) : (
    <div>
      {" "}
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    </div>
  );
};

export default Hero;
