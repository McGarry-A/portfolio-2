import ProjectCategory from "../ProjectCategory/ProjectCategory";

import cards from "../Cards";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <section className="text-8xl font-bold p-16">
      <h1 className="mb-4">My Projects</h1>
      <main className="space-y-8">
        <ProjectCategory rowTitle="React" cards={cards.React} />
        <ProjectCategory rowTitle="Landing Pages" cards={cards.LandingPages} />
        <ProjectCategory rowTitle="Full Stack" cards={cards.FullStack} />
      </main>
      <div className="w-full flex justify-end text-3xl mt-10">
        <button className="border-2 border-violet-700 px-4 py-3 bg-violet-700 hover:bg-transparent hover:text-violet-400 hover:border-violet-500 transition duration-150">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Projects;
