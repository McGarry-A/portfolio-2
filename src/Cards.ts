import { CardInterface } from "./ProjectCategory/ProjectCategory"
import ImagePOS from "./images/ProjectsImage.png"

interface CardsInterface {
    [key: string]: CardInterface[]
}

const cards: CardsInterface = {
    React: [
        {
            title: "Point Of Sale",
            techStack: ["Typescript","React","Redux","Tailwind","Context","Router"],
            description: "Inspired by my time at CleanCloud, I decided to create my own ordering and stock management system.",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Audiophile",
            techStack: ["Typescript","React","SCSS","Context","React-Router"],
            description: "Audiophile is a e-commerce business that sells headphones. This website was all about accurately implementing a design, really testing my eye for detail.",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        }
    ],
    LandingPages: [
        {
            title: "Bookmark",
            techStack: ["React","SCSS","React Router"],
            description: "Bookmark is a smart and sleek looking landing page. I was able to use react-router here to switch between components.",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Manage",
            techStack: ["React","SCSS","Swiper"],
            description: "Creating this website was fun working on implementing the Carousel/Swiper that you see for the testimonials.",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Easy Bank",
            techStack: ["React","SCSS"],
            description: "Just another landing page. Practice makes perfect!",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Sunny Side Agency",
            techStack: ["React","SCSS"],
            description: "This was the first page I created using SCSS! There is most definately lots of room for improvement, and I am looking forward to it!",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        }
    ],
    FullStack: [
        {
            title: "JobHack",
            techStack: ["React","MongoDB","Mongoose","Express","Restful API's", "Styled Components","React DND Beautiful, Decrypt, JWT's"],
            description: "Full stack application that allows login and users to search for jobs!",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Baba-Jhons",
            techStack: ["Vue","Express","Typescript","RESTful API's"],
            description: "First real VUE application, with an express and Typescript back-end that supports login functionality.",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        }
    ],
}

export default cards