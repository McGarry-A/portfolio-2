import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaNode,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

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
        variants={divVariant}
        viewport={{ once: true }}
        className="text-8xl font-bold"
        initial="hidden"
        animate="show"
      >
        {name.split("").map((el) => (
          <motion.span
            style={{ x: 100 }}
            variants={letterVar}
            initial="hidden"
            animate="show"
          >
            {el}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const renderTechStack = () => {
    return (
      <motion.div
        className="text-xl flex space-x-3 pt-4 cursor-pointer"
        variants={fadeIn}
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
      variants={fadeIn}
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

  return (
    <motion.div className="text-gray-100 space-y-4 max-h-screen h-full flex flex-col justify-center lg:pl-48">
      <motion.span
        className="text-5xl"
        variants={fadeIn}
        initial="hide"
        animate="show"
        viewport={{ once: true }}
      >
        Hello, I am
      </motion.span>
      {renderName()}
      <motion.div variants={fadeIn} initial="hide" animate="show">
        <p className="text-gray-400 w-full text-xl max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </motion.div>
      {renderButtons()}
      {renderTechStack()}
    </motion.div>
  );
};

// Animations

const divVariant = {
  hidden: {},
  show: {
    transition: { delay: 0, staggerChildren: 0.15 },
  },
};

const letterVar = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hide: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { delay: 2.6 } },
};

export default Hero;
