
import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ Template04 English ]
*************************************/
export const Template04EN: IProjectData =  {
    id: 6,
    pin: true,
    title: "Template04",
    description: "basic template for a blog about minimalism.",
    date: "01 / 09 / 2022",
    img:Images.designs.template04.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills,
            The page is a basic template for a blog about minimalism.`,
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
                link: "https://github.com/Eifhen/Template04",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template04",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template04.cover,
                page: "Intro", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template04.img_1,
                page: "Home Page", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template04.img_2,
                page: "Recent Posts", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template04.img_3,
                page: "About Page", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 4,
            },
        ],
    }
}


/************************************
    [ Template04 Spanish ]
*************************************/
export const Template04ES: IProjectData =  {
    id: 6,
    pin: true,
    title: "Template04",
    description: "Template básico para un blog acerca del minimalismo",
    date: "01 / 09 / 2022",
    img: Images.designs.template04.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades de CSS,
            La página es una plantilla básica para un blog acerca del minimalismo.`,
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
                link: "https://github.com/Eifhen/Template04",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template04",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template04.cover,
                page: "Intro", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template04.img_1,
                page: "Página de Inicio", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template04.img_2,
                page: "Publicaciones Recientes", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template04.img_3,
                page: "Acerca de", // name of the page
                project: "Template04", // name of the project
                description: "",
                id: 4,
            },
        ],
    }
}






