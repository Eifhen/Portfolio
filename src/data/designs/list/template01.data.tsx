
import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ Template01 English ]
*************************************/
export const Template01EN: IProjectData =  {
    id: 9,
    pin: false,
    title: "Template01",
    description: "Basic Template for a web page.",
    date: "05 / 08 / 2022",
    img:Images.designs.template01.cover,
    highlighted: false,
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
                link: "https://github.com/Eifhen/Template01",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template01",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template01.cover,
                page: "Home Page | Hero", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template01.img_1,
                page: "Home Page | Sections", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template01.img_2,
                page: "Home Page | Cards & Footer", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template01.img_3,
                page: "Contact Page | Contact Info", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 4,
            },
            {
                img:Images.designs.template01.img_4,
                page: "About Page", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 5,
            },
            {
                img:Images.designs.template01.img_5,
                page: "About Page | Mission & Vision", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 6,
            },
            {
                img:Images.designs.template01.img_6,
                page: "About Page | Values", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 7,
            },
        ],
    }
}

/************************************
    [ Template01 Spanish ]
*************************************/
export const Template01ES: IProjectData =  {
    id: 9,
    pin: false,
    title: "Template01",
    description: "Template básico para una página web.",
    date: "05 / 08 / 2022",
    img: Images.designs.template01.cover,
    highlighted: false,
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
                link: "https://github.com/Eifhen/Template01",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template01",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template01.cover,
                page: "Página de inicio | Hero", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template01.img_1,
                page: "Página de inicio | Secciones", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template01.img_2,
                page: "Página de Inicio", // name of the page
                project: "Template01", // name of the project
                description: "Artículos y pie de página",
                id: 3,
            },
            {
                img:Images.designs.template01.img_3,
                page: "Página de Contacto", // name of the page
                project: "Template01", // name of the project
                description: "Información de COntacto",
                id: 4,
            },
            {
                img:Images.designs.template01.img_4,
                page: "Pantalla Acerca de", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 5,
            },
            {
                img:Images.designs.template01.img_5,
                page: "Acerca de | Misión & Visión", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 6,
            },
            {
                img:Images.designs.template01.img_6,
                page: "Acerca de | Valores", // name of the page
                project: "Template01", // name of the project
                description: "",
                id: 7,
            },
        ],
    }
}
