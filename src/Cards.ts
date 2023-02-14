import audiophile from "./images/audiophile.png";
import bookmark from "./images/bookmark.png";
import manage from "./images/manage.png";
import sunnyside from "./images/sunny.png";
import easybank from "./images/easybank.png";
import JACKED from "./images/JACKED.png";
import JOBHACK2 from "./images/JOBHACK2.png";

// interface CardsInterface {
//     [key: string]: CardInterface[]
// }

interface ITAB_MAP {
  [key: string]: {
    title: string;
    techStack: string[];
    description: string;
    github: string;
    liveLink: string;
    Image: string;
    responsive: boolean;
  };
}

const TAB_MAP: ITAB_MAP = {
  JACKED: {
    title: "JACKED",
    techStack: [
      "Typescript",
      "React Native",
      "Redux",
      "Native Base",
      "React Navigation",
      "Supabase",
      "React Native Chart Kit",
    ],
    description:
      "This application is a application created track weightlifting progress for active gym goers. Created using React Native, The application is fully compatible on web and is native to iOS and Andriod. This application is currently still in development, and is being worked on in my spare time. To see what I am working on or report any bugs, please open an issue on github!",
    github: "https://github.com/McGarry-A/Jacked",
    liveLink: "https://pos-vert.vercel.app/",
    Image: JACKED,
    responsive: true,
  },
  JOBHACK: {
    title: "JOBHACK2",
    techStack: [
      "Typescript",
      "React",
      "Redux",
      "Tailwind",
      "React Router",
      "Node",
      "SQL Lite",
      "Express",
      "JWT",
    ],
    description:
      "This is a job board aggregation platform created using React, Redux, Tailwind, and Typescript. The backend is created using Node, Express, and SQL Lite.",
    github: "https://github.com/McGarry-A/job-hack-2-frontend",
    liveLink: "https://job-hack-2-frontend.vercel.app/",
    Image: JOBHACK2,
    responsive: true,
  },
  AUDIOPHILE: {
    title: "AUDIOPHILE",
    techStack: ["Typescript", "React", "SCSS", "Context", "React-Router"],
    description:
      "Audiophile is a e-commerce business that sells headphones. This website was all about accurately implementing a design, really testing my eye for detail.",
    github: "https://github.com/McGarry-A/audiophile",
    liveLink: "https://mcgarry-a.github.io/audiophile",
    Image: audiophile,
    responsive: false,
  },
  BOOKMARK: {
    title: "BOOKMARK",
    techStack: ["React", "SCSS", "React Router"],
    description:
      "Bookmark is a smart and sleek looking landing page. I was able to use react-router here to switch between components.",
    github: "https://github.com/McGarry-A/bookmark-landing-page",
    liveLink: "https://mcgarry-a.github.io/bookmark-landing-page/",
    Image: bookmark,
    responsive: true,
  },
  MANAGE: {
    title: "MANAGE",
    techStack: ["React", "SCSS", "Swiper"],
    description:
      "Creating this website was fun working on implementing the Carousel/Swiper that you see for the testimonials.",
    github: "https://github.com/McGarry-A/ManageLandingPage",
    liveLink: "https://mcgarry-a.github.io/ManageLandingPage/",
    Image: manage,
    responsive: true,
  },
  EASYBANK: {
    title: "EASYBANK",
    techStack: ["React", "SCSS"],
    description: "Just another landing page. Practice makes perfect!",
    github: "https://github.com/McGarry-A/easy-bank",
    liveLink: "https://mcgarry-a.github.io/easy-bank/",
    Image: easybank,
    responsive: false,
  },
  SUNNYSIDE: {
    title: "SUNNYSIDE",
    techStack: ["React", "SCSS"],
    description:
      "This was the first page I created using SCSS! There is most definately lots of room for improvement, and I am looking forward to it!",
    github: "https://github.com/McGarry-A/SunnysideAgency",
    liveLink: "https://mcgarry-a.github.io/SunnysideAgency/",
    Image: sunnyside,
    responsive: true,
  },
};

export default TAB_MAP;
