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

const { DIV_VARIANT, LETTER_VARIANT, FADEIN_Y, FADEIN_RIGHT } = HERO_ANIMATIONS;

interface IHero {
  navIsOpen: boolean;
}

const techIcons = [
  {
    icon: FaHtml5,
    name: "HTML",
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
  },
  {
    icon: FaReact,
    name: "React & React Native",
  },
  {
    icon: SiVuedotjs,
    name: "VueJs",
  },
  {
    icon: FaSass,
    name: "SASS",
  },
  {
    icon: FaNode,
    name: "Node",
  },
  {
    icon: DiJavascript1,
    name: "Javascript",
  },
  {
    icon: DiMongodb,
    name: "MongoDB",
  },
  {
    icon: SiRedux,
    name: "Redux",
  },
  {
    icon: SiTypescript,
    name: "Typescript",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
  },
];

const Hero = ({ navIsOpen }: IHero) => {
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
        className="text-xl flex space-x-3 pt-4 cursor-pointer flex-wrap"
        variants={FADEIN_Y}
        initial="hide"
        animate="show"
      >
        {techIcons.map((item, index) => {
          const { icon: El, name } = item;
          return (
            <motion.span
              className="p-2"
              whileHover={{
                rotate: 360,
                scale: [1, 0.8, 1.7],
                transition: { duration: 0.3 },
              }}
              key={index}
            >
              <El
                size="3rem"
                className="hover:text-violet-700"
                name={name}
                title={name}
              />
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const renderShortDesc = () => {
    return (
      <motion.div
        className={`opacity-50 text-right absolute right-10 sm:max-w-lg lg:right-32 bottom-5 z-50 ${
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

  return loading === false ? (
    <motion.div
      className="text-gray-100 space-y-4 max-h-screen h-full flex flex-1 flex-col justify-center lg:pl-48 relative"
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
        <p className="text-gray-400 w-full text-xl max-w-4xl">
          I am a Front End Developer working at{" "}
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://beautyworksonline.com"
            className="text-violet-500 underline hover:text-violet-400"
          >
            Beautyworks
          </a>
          , an E-commerce business specilizing in hair extensions and styling
          tools. My role consists of building webpages to design, building
          reuseable components with technologies like React and much more.{" "}
        </p>
        <br />
        <p className="text-gray-400 w-full text-xl max-w-4xl">
          Some of my most recent projects include a full stack{" "}
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://job-hack-2-frontend.vercel.app/"
            className="text-violet-500 underline hover:text-violet-400"
          >
            Job board
          </a>{" "}
          web-application that allows for searching for jobs using the Reed api
          and managing those jobs in the application process. The front-end is
          built mainly using React and the backend is built using Express and
          SQLite.
        </p>
        <br />
        <p className="text-gray-400 w-full text-xl max-w-4xl">
          Currently, I am working on a React Native application for active gym
          members! Although that application is still in progress, you can see
          that application{" "}
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"www.google.com"}
            className="text-violet-500 underline hover:text-violet-400"
          >
            here
          </a>
          . Feel free to report any bugs via github issues or E-mail me with any
          suggestions!
        </p>
      </motion.div>
      {renderButtons()}
      {renderTechStack()}
      {renderShortDesc()}
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
