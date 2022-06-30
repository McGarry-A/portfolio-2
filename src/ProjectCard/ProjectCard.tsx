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
    if (!isHovering) {
      return <img src={ProjectImage} alt="Project" className="" />;
    }

    return (
      <figcaption className="text-gray-200 flex-col space-y-2 p-4">
        <div>
          <h3 className="text-lg">{title}</h3>
          {renderTechItems(techStack)}
        </div>
        <div>
          <p className="text-sm font-normal tracking-tight">{description}</p>
        </div>
        <div className="flex space-x-2 h-full pt-4">
          <a href={liveLink}>
            <button className="border-2 px-4 py-2 text-sm">
              Live Instance
            </button>
          </a>
          <a href={github}>
            <button className="border-2 px-4 py-2 text-sm">Github</button>
          </a>
        </div>
      </figcaption>
    );
  };

  return (
    <motion.div
      className="max-w-xl w-full hover:cursor-pointer transition duration-150 shadow-md border-white border-2 h-max"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {handleHover()}
    </motion.div>
  );
};

export default ProjectCard;
