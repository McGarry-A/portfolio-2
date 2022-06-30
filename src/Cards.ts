import { CardInterface } from "./ProjectCategory/ProjectCategory"
import ImagePOS from "./images/ProjectsImage.png"

interface CardsInterface {
    [key: string]: CardInterface[]
}

const cards: CardsInterface = {
    React: [
        {
            title: "Point Of Sale",
            techStack: ["Typescript","React","Redux","Tailwind","Context","React-Router"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Audiophile",
            techStack: ["Typescript","React","SCSS","Context","React-Router"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        }
    ],
    LandingPages: [
        {
            title: "Bookmark",
            techStack: ["React","SCSS","React Router"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Manage",
            techStack: ["React","SCSS","Swiper"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Easy Bank",
            techStack: ["React","SCSS"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Sunny Side Agency",
            techStack: ["React","SCSS"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        }
    ],
    FullStack: [
        {
            title: "JobHack",
            techStack: ["React","MongoDB","Mongoose","Express","Restful API's", "Styled Components","React DND Beautiful"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        },
        {
            title: "Baba-Jhons",
            techStack: ["Vue","Express","Typescript","RESTful API's"],
            description: "Loren Ipsum",
            github: "www.github.com",
            liveLink: "www.vercel.com",
            Image: ImagePOS
        }
    ],
}

export default cards