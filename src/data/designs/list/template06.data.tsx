import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ Template06 English ]
*************************************/
export const Template06EN: IProjectData =  {
    id: 4,
    pin: false,
    title: "Template06",
    description: "A basic template for a blog",
    date: "23 / 12 / 2022",
    img:Images.designs.template06.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills,
            The page is based on a kind of blog about my journey as software developer`,
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
                link: "https://github.com/Eifhen/Template06",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template06",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template06.cover,
                page: "Hero Section", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template06.img_1,
                page: "Posts", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template06.img_2,
                page: "Blog Entrie", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template06.img_3,
                page: "Blog Entrie | Content", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 4,
            },
        ],
    }
}


/************************************
    [ Template06 Spanish ]
*************************************/
export const Template06ES: IProjectData =  {
    id: 4,
    pin: false,
    title: "Template06",
    description: "Template básico para una página tipo blog.",
    date: "23 / 12 / 2022",
    img: Images.designs.template06.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades de CSS,
            La página está basada en una especie de blog acerca de mi viaje como software developer.`,
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
                link: "https://github.com/Eifhen/Template06",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Template06",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template06.cover,
                page: "Hero", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template06.img_1,
                page: "Publícaciones", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template06.img_2,
                page: "Entradas", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template06.img_3,
                page: "Entradas | Contenido", // name of the page
                project: "Template06", // name of the project
                description: "",
                id: 4,
            },
        ],
    }
}