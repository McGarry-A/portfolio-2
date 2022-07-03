import { CardInterface } from "./ProjectCategory/ProjectCategory"

import POS from "./images/pos.png"
import audiophile from "./images/audiophile.png"
import bookmark from "./images/bookmark.png"
import babajohns from "./images/babajohns.png"
import manage from "./images/manage.png"
import sunnyside from "./images/sunny.png"
import easybank from "./images/easybank.png"


interface CardsInterface {
    [key: string]: CardInterface[]
}

const cards: CardsInterface = {
    React: [
        {
            title: "Point Of Sale",
            techStack: ["Typescript","React","Redux","Tailwind","Context","Router"],
            description: "Inspired by my time at CleanCloud, I decided to create my own ordering and stock management system.",
            github: "https://github.com/McGarry-A/pos",
            liveLink: "https://pos-vert.vercel.app/",
            Image: POS,
            responsive: true
        },
        {
            title: "Audiophile",
            techStack: ["Typescript","React","SCSS","Context","React-Router"],
            description: "Audiophile is a e-commerce business that sells headphones. This website was all about accurately implementing a design, really testing my eye for detail.",
            github: "https://github.com/McGarry-A/audiophile",
            liveLink: "https://mcgarry-a.github.io/audiophile",
            Image: audiophile,
            responsive: false
        }
    ],
    LandingPages: [
        {
            title: "Bookmark",
            techStack: ["React","SCSS","React Router"],
            description: "Bookmark is a smart and sleek looking landing page. I was able to use react-router here to switch between components.",
            github: "https://github.com/McGarry-A/bookmark-landing-page",
            liveLink: "https://mcgarry-a.github.io/bookmark-landing-page/",
            Image: bookmark,
            responsive: true
        },
        {
            title: "Manage",
            techStack: ["React","SCSS","Swiper"],
            description: "Creating this website was fun working on implementing the Carousel/Swiper that you see for the testimonials.",
            github: "https://github.com/McGarry-A/ManageLandingPage",
            liveLink: "https://mcgarry-a.github.io/ManageLandingPage/",
            Image: manage,
            responsive: true
        },
        {
            title: "Easy Bank",
            techStack: ["React","SCSS"],
            description: "Just another landing page. Practice makes perfect!",
            github: "https://github.com/McGarry-A/easy-bank",
            liveLink: "https://mcgarry-a.github.io/easy-bank/",
            Image: easybank,
            responsive: false
        },
        {
            title: "Sunny Side Agency",
            techStack: ["React","SCSS"],
            description: "This was the first page I created using SCSS! There is most definately lots of room for improvement, and I am looking forward to it!",
            github: "https://github.com/McGarry-A/SunnysideAgency",
            liveLink: "https://mcgarry-a.github.io/SunnysideAgency/",
            Image: sunnyside,
            responsive: true
        }
    ],
    Vue: [
        {
            title: "Baba-Jhons",
            techStack: ["Vue","Express","Typescript","RESTful API's"],
            description: "First real VUE application, with full basket functionality",
            github: "https://github.com/McGarry-A/Vue-Baba-Johns",
            liveLink: "https://vue-baba-johns.vercel.app/",
            Image: babajohns,
            responsive: false
        }
    ],
}

export default cards