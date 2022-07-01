import { motion } from "framer-motion";
import { AiOutlineCloudDownload } from "react-icons/ai";

const About = () => {
  const renderTitle = () => (
    <motion.h2
      className="text-5xl text-white"
      variants={fadeIn}
      initial="hide"
      animate="show"
    >
      About Me
    </motion.h2>
  );

  const renderBody = () => (
    <motion.div
      variants={fadeIn}
      initial="hide"
      animate="show"
      className="space-y-2"
    >
      <h3 className="text-2xl text-white border-b-4 border-violet-700 w-max">
        My Current Role
      </h3>
      <p className="text-gray-400 w-full text-xl max-w-2xl">
        I am a developer based in Preston, United Kingdom. Currently working at
        BeautyWorksOnline.com I am responsible for creating new webpages that
        will be visited by thousands of customers daily. Working closely with
        the Graphic Design team, I create these pages to spec. I also assist the
        E-Commerce team, fixing visual bugs that appear on the page and am the
        first line of technical support for the team.
      </p>
    </motion.div>
  );

  const renderBodyTwo = () => (
    <motion.div
      variants={fadeIn}
      initial="hide"
      animate="show"
      className="space-y-2"
    >
      <h3 className="text-2xl text-white border-b-4 border-violet-700 w-max">
        My Interests
      </h3>
      <p className="text-gray-400 w-full text-xl max-w-2xl">
        I am a developer based in Preston, United Kingdom. Currently working at
        BeautyWorksOnline.com I am responsible for creating new webpages that
        will be visited by thousands of customers daily. Working closely with
        the Graphic Design team, I create these pages to spec. I also assist the
        E-Commerce team, fixing visual bugs that appear on the page and am the
        first line of technical support for the team.
      </p>
    </motion.div>
  );

  const renderBullets = () => (
    <>
      <motion.ul
        variants={divVariant}
        initial="hidden"
        animate="show"
        className="text-right text-lg"
      >
        <motion.li variants={bulletVar} initial="hide" animate="show">
          Bachelors Degree From A Russel Group University
        </motion.li>
        <motion.li variants={bulletVar} initial="hide" animate="show">
          Graduated From CodeNation, Coding Bootcamp
        </motion.li>
        <motion.li variants={bulletVar} initial="hide" animate="show">
          Based in Preston, England
        </motion.li>
        <motion.li variants={bulletVar} initial="hide" animate="show">
          Full UK Drivers License
        </motion.li>
      </motion.ul>
    </>
  );

  const renderResume = () => (
    <motion.button
      className="bg-violet-700 border border-violet-700 w-max flex px-8 py-2 text-2xl items-center flex-end ml-auto hover:bg-transparent hover:text-violet-500"
      variants={buttonVar}
      initial="hide"
      animate="show"
    >
      <AiOutlineCloudDownload size={"1.4rem"} className="mr-1" />
      Resume
    </motion.button>
  );

  return (
    <motion.div className="text-gray-100 space-y-6 max-h-screen h-full flex flex-col justify-center lg:pl-48 max-w-4xl mx-auto w-full text-justify">
      {renderTitle()}
      {renderBody()}
      {renderBullets()}
      {renderBodyTwo()}
      {renderResume()}
    </motion.div>
  );
};

export default About;

const divVariant = {
  hidden: {
    opacity: 0,
  },
  showEarly: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.6,
    },
  },
};

const bulletVar = {
  hide: { opacity: 0, translateX: "-100px" },
  show: { opacity: 1, translateX: 0 },
};

const fadeIn = {
  hide: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { delay: 0.6 } },
};

const buttonVar = {
  hide: { opacity: 0, translateX: "100px" },
  show: { opacity: 1, translateX: 0, transition: { delay: 0.6 } },
};
