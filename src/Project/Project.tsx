interface IProject {
  title: string;
  techStack: string[];
  description: string;
  liveLink: string;
  github: string;
  Image: string;
}

const Project = (props: IProject) => {
  const renderImage = () => {
    const { Image, title } = props;
    return (
      <img
        src={Image}
        alt={title}
        title={title}
        className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
      />
    );
  };

  const renderHeader = () => {
    const { title, techStack } = props;

    return (
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-400">Built using:</p>
        {techStack.map((el, index) => {
          const showComma = index !== techStack.length - 1;
          return (
            <span key={index} className={"text-gray-400"}>
              {el}
              {showComma && ","}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  const renderDesription = () => {
    const { description } = props;

    return <p className="text-lg max-w-2xl">{description}</p>;
  };

  const renderButtons = () => {
    const { liveLink, github } = props;
    return (
      <div className="flex space-x-3">
        <a href={liveLink} target={"_blank"} rel={"noreferrer"}>
          <button className="px-9 py-2 text-xl bg-violet-700 border border-violet-700 hover:bg-transparent transition duration-150">
            Live Instance
          </button>
        </a>
        <a
          href={github}
          rel={"noreferrer"}
          className="px-6 py-2 text-xl border space-x-2 inline-flex items-center hover:text-violet-500 border-violet-700"
        >
          <button>Github</button>
        </a>
      </div>
    );
  };

  return (
    <section className="flex flex-col flex-1 space-y-4 my-2">
      {renderImage()}
      {renderHeader()}
      {renderDesription()}
      {renderButtons()}
    </section>
  );
};

export default Project;
