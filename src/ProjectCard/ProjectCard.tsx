import { useState } from "react";
import ProjectImage from "../images/ProjectsImage.png";
import { motion } from "framer-motion";

import { CardInterface } from "../ProjectCategory/ProjectCategory";

interface Props {
  card: CardInterface;
}

const ProjectCard: React.FC<Props> = ({ card }) => {
  const [isHovering, setIsHovering] = useState<boolean>();
  const { title, techStack, github, liveLink, description } = card;

  const renderTechItems = (items: string[]) => {
    return (
      <p className="opacity-60 text-right text-xs">
        {items.map((el) => (
          <>{el} </>
        ))}
      </p>
    );
  };

  const handleHover = () => {
    const hide = "hidden";
    const show = "flex flex-col space-y-2";
    return (
      <figcaption
        className={`text-gray-200 flex-col space-y-2 transition duration-150 ${
          isHovering ? "px-4 py-1" : "p-0 h-auto"
        }`}
      >
        <img
          src={ProjectImage}
          alt="Project"
          className={`object-cover w-full transition duration-150 ${
            isHovering ? hide : show
          }`}
        />
        <div className={`transition duration-150 ${isHovering ? show : hide}`}>
          <div>
            <h3 className="text-lg">{title}</h3>
            {renderTechItems(techStack)}
          </div>
          <div>
            <p className="text-sm font-normal tracking-tight">{description}</p>
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
      className="max-w-xs w-full hover:cursor-pointer transition duration-150 shadow-md border-white border-2 h-[200px] overflow-hidden relative"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {handleHover()}
    </motion.div>
  );
};

export default ProjectCard;
