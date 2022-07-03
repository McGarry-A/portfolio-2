import { useState } from "react";

import { motion } from "framer-motion";

import { CardInterface } from "../ProjectCategory/ProjectCategory";

interface Props {
  card: CardInterface;
}

const ProjectCard: React.FC<Props> = ({ card }) => {
  const [isHovering, setIsHovering] = useState<boolean>();
  const { title, techStack, github, liveLink, description, Image, responsive } =
    card;

  const renderTechItems = (items: string[]) => {
    return (
      <p className="opacity-60 text-right text-sm">
        {items.map((el) => (
          <>{el} </>
        ))}
      </p>
    );
  };

  const renderResponsiveTag = () => {
    if (responsive) {
      return (
        <div className="absolute top-5 right-0 bg-violet-800 text-gray-50 py-1 px-3 ">
          Responsive
        </div>
      );
    }
  };

  const handleHover = () => {
    const hide = "hidden";
    const show = "flex flex-col space-y-2";
    return (
      <figcaption
        className={`text-gray-200 flex-col transition duration-150 ${
          isHovering ? "px-4 py-1" : "p-0"
        }`}
      >
        <div className={`${isHovering ? hide : show} relative`}>
          <img
            src={Image}
            alt="Project"
            className={`w-full transition duration-150 object-cover `}
          />

          {renderResponsiveTag()}
        </div>
        <div
          className={`transition duration-150 p-2 ${isHovering ? show : hide}`}
        >
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            {renderTechItems(techStack)}
          </div>
          <div>
            <p className="font-normal tracking-tight text-gray-300">
              {description}
            </p>
          </div>
          <div className="absolute bottom-2 space-x-4">
            <a href={liveLink}>
              <button className="border-2 border-gray-300 px-4 py-2 text-sm hover:border-violet-500 hover:text-violet-400">
                Live Instance
              </button>
            </a>
            <a href={github}>
              <button className="border-2 border-gray-300 px-4 py-2 text-sm hover:border-violet-500 hover:text-violet-400">
                Github
              </button>
            </a>
          </div>
        </div>
      </figcaption>
    );
  };

  return (
    <motion.div
      className="min-w-[392px] w-[392px] hover:cursor-pointer transition duration-150 border-white border-2 h-[200px] relative"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {handleHover()}
    </motion.div>
  );
};

export default ProjectCard;
