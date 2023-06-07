
import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ Airbnb English ]
*************************************/
export const AirbnbCloneEN: IProjectData =  {
    id: 10,
    pin: true,
    title: "Airbnb Clone",
    description: "basic Airbnb inspired design ",
    date: "25 / 05 / 2022",
    img:Images.designs.airbnb_clone.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills`,
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Airbnb",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/AirBnb",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.airbnb_clone.cover,
                page: "Hero", // name of the page
                project: "Airbnb", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.airbnb_clone.img_1,
                page: "Offers", // name of the page
                project: "Airbnb", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}

/************************************
    [ Airbnb Spanish ]
*************************************/
export const AirbnbCloneES: IProjectData =  {
    id: 10,
    pin: true,
    title: "Airbnb",
    description: "Diseño básico inspirado en Airbnb",
    date: "25 / 05 / 2022",
    img: Images.designs.airbnb_clone.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades de CSS`,
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Airbnb",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/AirBnb",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.airbnb_clone.cover,
                page: "Página de inicio | Hero", // name of the page
                project: "Airbnb", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.airbnb_clone.img_1,
                page: "Ofertas", // name of the page
                project: "Airbnb", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}
