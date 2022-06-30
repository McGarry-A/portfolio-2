import ProjectCard from "../ProjectCard/ProjectCard";

interface Props {}

const ProjectCategory: React.FC<Props> = () => {
  return (
    <div>
      <h2 className="text-4xl text-gray-300">Front-end</h2>
      <div className="flex space-x-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectCategory;
