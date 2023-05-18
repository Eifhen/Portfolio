
import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ Template03 English ]
*************************************/
export const Template03EN: IProjectData =  {
    id: 7,
    pin: false,
    title: "Template03",
    description: "Basic design of a page about a pizzeria",
    date: "23 / 08 / 2022",
    img:Images.designs.template03.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills,
            The page is a basic template for a page about a pizzeria.`,
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
                link: "https://github.com/Eifhen/Template03",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template03",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template03.cover,
                page: "Header of the page", // name of the page
                project: "Template03", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template03.img_1,
                page: "Body of the page", // name of the page
                project: "Template03", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}

/************************************
    [ Template03 Spanish ]
*************************************/
export const Template03ES: IProjectData =  {
    id: 7,
    pin: false,
    title: "Template03",
    description: "Diseño básico de una página web acerca de una pizzería.",
    date: "01 / 09 / 2022",
    img: Images.designs.template03.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades de CSS,
            La página es una plantilla básica para una página acerca de una pizzería.`,
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
                link: "https://github.com/Eifhen/Template03",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template03",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template03.cover,
                page: "Header of the page", // name of the page
                project: "Template03", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template03.img_1,
                page: "Body of the page", // name of the page
                project: "Template03", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}


