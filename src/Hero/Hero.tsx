import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="text-gray-100 space-y-4 max-h-screen h-full flex flex-col lg:p-48">
      <motion.span className="text-5xl">Hello, I am</motion.span>
      <motion.div className="text-8xl font-bold">
        <motion.span>A</motion.span>
        <motion.span>h</motion.span>
        <motion.span>m</motion.span>
        <motion.span>e</motion.span>
        <motion.span>d</motion.span>
        <motion.span> </motion.span>
        <motion.span>M</motion.span>
        <motion.span>c</motion.span>
        <motion.span>G</motion.span>
        <motion.span>a</motion.span>
        <motion.span>r</motion.span>
        <motion.span>r</motion.span>
        <motion.span>y</motion.span>
      </motion.div>
      <motion.div>
        <p className="text-gray-400 w-full text-xl max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </motion.div>
      <motion.div className="space-x-4 text-2xl">
        <button className="px-6 py-2 text-lg bg-violet-700 border border-violet-700">
          Projects
        </button>
        <button className="px-6 py-2 text-lg border">Resume</button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
