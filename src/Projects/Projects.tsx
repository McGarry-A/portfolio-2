import { motion } from "framer-motion";
import Resume from "../resume/Ahmed_McGarry_Resume.pdf";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TAB_MAP from "../Cards";
import Project from "../Project/Project";

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>("JACKED");
  const renderProjectTitles = () => {
    return (
      <div className="space-x-8 my-6 overflow-x-scroll">
        {Object.keys(TAB_MAP).map((el, index) => {
          const isActive = activeProject === el;
          return (
            <span
              key={index}
              onClick={() => setActiveProject(el)}
              className={`text-xl tracking-widest font-semibold hover:cursor-pointer ${
                isActive && "font-semibold border-b-2 border-violet-700"
              }`}
            >
              {el}
            </span>
          );
        })}
      </div>
    );
  };
  const renderTitle = () => (
    <div className="w-full">
      <h1 className="mb-4 font-bold text-5xl md:text-8xl">My Projects</h1>
      <span className="opacity-50 block">
        *You can view many more of my projects on{" "}
        <a
          className="text-violet-400 underline cursor-pointer hover"
          href="www.github.com"
        >
          GitHub!
        </a>
      </span>
    </div>
  );

  const renderProjects = () => {
    const data = TAB_MAP[activeProject]

    return <Project {...data} />
  };

  const renderButtons = () => (
    <div className="w-full flex flex-col items-end text-3xl mt-auto">
      <NavLink to="/contact">
        <button className="border-2 border-violet-700 px-4 py-3 bg-transparent hover:text-violet-400 hover:border-violet-500 transition duration-150 block my-1 w-72">
          Contact
        </button>
        <div className="flex flex-1"></div>
      </NavLink>
      <a
        className="border-2 border-violet-700 px-4 py-3 bg-violet-700 hover:bg-transparent hover:text-violet-400 hover:border-violet-500 transition duration-150 w-72 text-center"
        href={Resume}
        download="AhmedMcGarry_Resume.pdf"
      >
        Resume
      </a>
    </div>
  );

  return (
    <motion.section
      className="py-6 lg:p-16 h-full flex flex-col flex-1"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
    >
      {renderTitle()}
      {renderProjectTitles()}
      {renderProjects()}
      {renderButtons()}
    </motion.section>
  );
};

export default Projects;
