import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ Mountains English ]
*************************************/
export const MountainsEN: IProjectData =  {
    id:3,
    pin: false,
    title: "Mountains",
    description: "Basic Blog about my favorite mountains",
    date: "14 / 01 / 2023",
    img:Images.designs.template07.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills,
            The page is based on a kind of blog about my favorite mountains.`,
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
                link: "https://github.com/Eifhen/Mountains",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Mountains",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template07.cover,
                page: "Hero Section", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template07.img_1,
                page: "Posts", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template07.img_2,
                page: "Blog Entrie", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template07.img_3,
                page: "Blog Entrie | Content", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 4,
            },
            {
                img:Images.designs.template07.img_4,
                page: "Blog Entrie | Footer", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 5,
            },
        ],
    }
}


/************************************
    [ Mountains Spanish ]
*************************************/
export const MountainsES: IProjectData =  {
    id: 3,
    pin: false,
    title: "Mountains",
    description: "Blog básico acerca de mis montañas favoritas",
    date: "14 / 01 / 2023",
    img: Images.designs.template07.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades de CSS,
            La página está basada en una especie de blog acerca de mis montañas favoritas.`,
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
                link: "https://github.com/Eifhen/Mountains",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Mountains",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template07.cover,
                page: "Hero", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template07.img_1,
                page: "Publícaciones", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 2,
            },
            {
                img:Images.designs.template07.img_2,
                page: "Entradas", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template07.img_3,
                page: "Entradas | Contenido", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 4,
            },
            {
                img:Images.designs.template07.img_4,
                page: "Entradas | Pie de Página", // name of the page
                project: "Mountains", // name of the project
                description: "",
                id: 5,
            },
        ],
    }
}