import { motion } from "framer-motion";

import ProjectCategory from "../ProjectCategory/ProjectCategory";

import cards from "../Cards";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <motion.section
      className="p-16"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-end justify-between w-full">
        <h1 className="mb-4 font-bold text-8xl">My Projects</h1>
        <span className="opacity-50">
          *You can view much more of my projects on{" "}
          <a
            className="text-violet-400 underline cursor-pointer hover"
            href="www.github.com"
          >
            GitHub!
          </a>
        </span>
      </div>
      <main className="space-y-8">
        <ProjectCategory rowTitle="React" cards={cards.React} />
        <ProjectCategory rowTitle="Full Stack" cards={cards.FullStack} />
        <ProjectCategory rowTitle="Landing Pages" cards={cards.LandingPages} />
      </main>
      <div className="w-full flex justify-end text-3xl mt-10">
        <button className="border-2 border-violet-700 px-4 py-3 bg-violet-700 hover:bg-transparent hover:text-violet-400 hover:border-violet-500 transition duration-150">
          Download Resume
        </button>
      </div>
    </motion.section>
  );
};

export default Projects;
