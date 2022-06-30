import { useState } from "react";
import ProjectImage from "../images/ProjectsImage.png";
import { motion } from "framer-motion";

interface Props {}

const ProjectCard: React.FC<Props> = () => {
  const [isHovering, setIsHovering] = useState<boolean>();

  const handleHover = () => {
    if (isHovering === false) {
      <img
        src={ProjectImage}
        alt="Project"
        className="border-white border-2"
      />;
    }

    return (
      <figcaption className="text-gray-200 border-white border-2 flex-col space-y-2 p-4">
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
        <div className="flex space-x-2">
          <button className="border-2 px-4 py-2 text-sm">Live Instance</button>
          <button className="border-2 px-4 py-2 text-sm">Github</button>
        </div>
      </figcaption>
    );
  };

  return (
    <motion.article
      className="max-w-xl w-full hover:cursor-pointer transition duration-150"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {handleHover()}
    </motion.article>
  );
};

export default ProjectCard;
