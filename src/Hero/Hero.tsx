import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="text-gray-100 space-y-4 max-h-screen h-full flex flex-col lg:p-48">
      <motion.span
        className="text-5xl"
        variants={fadeIn}
        initial="hide"
        animate="show"
      >
        Hello, I am
      </motion.span>
      <motion.div
        className="text-8xl font-bold"
        variants={divVariant}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={letterVar}>A</motion.span>
        <motion.span variants={letterVar}>h</motion.span>
        <motion.span variants={letterVar}>m</motion.span>
        <motion.span variants={letterVar}>e</motion.span>
        <motion.span variants={letterVar}>d</motion.span>
        <motion.span variants={letterVar}> </motion.span>
        <motion.span variants={letterVar}>M</motion.span>
        <motion.span variants={letterVar}>c</motion.span>
        <motion.span variants={letterVar}>G</motion.span>
        <motion.span variants={letterVar}>a</motion.span>
        <motion.span variants={letterVar}>r</motion.span>
        <motion.span variants={letterVar}>r</motion.span>
        <motion.span variants={letterVar}>y</motion.span>
      </motion.div>
      <motion.div variants={fadeIn} initial="hide" animate="show">
        <p className="text-gray-400 w-full text-xl max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </motion.div>
      <motion.div
        className="space-x-4 text-2xl"
        variants={fadeIn}
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
        <motion.button
          className="px-6 py-2 text-lg border"
          whileHover={{
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
        >
          Resume
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const divVariant = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.9,
      staggerChildren: 0.2,
    },
  },
};

const letterVar = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const fadeIn = {
  hide: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { delay: 2.6 } },
};

export default Hero;
