import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const FixedBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="absolute h-screen z-50 top-0 left-0 w-20 flex flex-col justify-center items-center space-y-10">
      {children}
    </div>
  );
};

interface Props {
  navIsOpen: boolean;
}

const SocialsBar: React.FC<Props> = ({ navIsOpen }) => {
  return (
    <FixedBar>
      <AiOutlineTwitter
        size="3rem"
        className={`cursor-pointer  hover:scale-110 transition duration-150 ${
          navIsOpen
            ? "text-black hover:text-violet-900"
            : "text-white hover:text-violet-900"
        }`}
      />
      <AiFillFacebook
        size="3rem"
        className={`cursor-pointer  hover:scale-110 transition duration-150 ${
          navIsOpen
            ? "text-black hover:text-violet-900"
            : "text-white hover:text-violet-900"
        }`}
      />
      <AiFillLinkedin
        size="3rem"
        className={`cursor-pointer  hover:scale-110 transition duration-150 ${
          navIsOpen
            ? "text-black hover:text-violet-900"
            : "text-white hover:text-violet-900"
        }`}
      />
      <AiFillGithub
        size="3rem"
        className={`cursor-pointer  hover:scale-110 transition duration-150 ${
          navIsOpen
            ? "text-black hover:text-violet-900"
            : "text-white hover:text-violet-900"
        }`}
      />
    </FixedBar>
  );
};

export default SocialsBar;
