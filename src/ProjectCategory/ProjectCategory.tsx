import ProjectCard from "../ProjectCard/ProjectCard";

interface Props {
  rowTitle: string;
  cards: Array<CardInterface>;
}

export interface CardInterface {
  title: string;
  techStack: string[];
  github: string;
  liveLink: string;
  description: string;
  Image: string;
}

const ProjectCategory: React.FC<Props> = ({ rowTitle, cards }) => {
  const renderCards = () => {
    return (
      <div className="flex space-x-8">
        {cards.map((el, index) => (
          <ProjectCard card={el} key={index} />
        ))}
      </div>
    );
  };
  return (
    <div>
      <h2 className="text-4xl text-gray-300">{rowTitle}</h2>
      {renderCards()}
    </div>
  );
};

export default ProjectCategory;
