import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ Template08 English ]
*************************************/
export const Template08EN: IProjectData =  {
    id:2,
    pin: true,
    title: "Template08",
    description: "Santa Cruz bank website template",
    date: "17 / 01 / 2023",
    img:Images.designs.template08.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills,
            The page is based on the Santa Cruz bank website
            in the Dominican Republic.`,
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Template08",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template08",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template08.cover,
                page: "Hero Section", // name of the page
                project: "Template08", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template08.img_1,
                page: "Services", // name of the page
                project: "Template08", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template08.img_2,
                page: "Recent News", // name of the page
                project: "Template08", // name of the project
                description: "",
                id: 3,
            },
       
        ],
    }
}


/************************************
    [ Template08 Spanish ]
*************************************/
export const Template08ES: IProjectData =  {
    id: 2,
    pin: true,
    title: "Template08",
    description: "Plantilla web banco Santa Cruz",
    date: "17 / 01 / 2023",
    img: Images.designs.template08.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades con CSS,
            la pagina esta basada en el sitio web del banco Santa Cruz
            en la República Dominicana.`,
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Template08",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template08",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template08.cover,
                page: "Hero", // name of the page
                project: "Template08", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template08.img_1,
                page: "Servicios", // name of the page
                project: "Template08", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template08.img_2,
                page: "Noticias Recientes", // name of the page
                project: "Template08", // name of the project
                description: "",
                id: 3,
            },
        ],
    }
}