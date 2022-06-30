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

  const handleHover = () => {
    if (!isHovering) {
      return <img src={ProjectImage} alt="Project" className="" />;
    }

    return (
      <figcaption className="text-gray-200 flex-col space-y-2 p-4">
        <div>
          <h3 className="text-lg">POS Application</h3>
          <p className="opacity-60 text-right text-xs">
            Typescript, tailwind, React-router, Redux
          </p>
        </div>
        <div>
          <p className="text-sm font-normal tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex space-x-2 h-full pt-4">
          <button className="border-2 px-4 py-2 text-sm">Live Instance</button>
          <button className="border-2 px-4 py-2 text-sm">Github</button>
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
