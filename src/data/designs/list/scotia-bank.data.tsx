import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"






/************************************
    [ ScotiaBank English ]
*************************************/
export const ScotiaBankEN: IProjectData =  {
    id:1,
    pin: true,
    title: "ScotiaBank",
    description: "Template about the ScotiaBank bank",
    date: "26 / 01 / 2023",
    img:Images.designs.template09.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
           `I made this template as a practice to improve my css skills, 
           the page is based on the website of the scotiabank bank 
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
                link: "https://github.com/Eifhen/ScotiaBank",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/ScotiaBank",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template09.cover,
                page: "Hero Section", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template09.img_1,
                page: "Menu", // name of the page
                project: "ScotiaBank", // name of the project
                description: "Clicking on the menu icon will bring up a modal with all our navigation options.",
                id: 2,
            },
            {
                img:Images.designs.template09.img_2,
                page: "Search Screen", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template09.img_3,
                page: "Comunication Section", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 4,
            },
            {
                img:Images.designs.template09.img_4,
                page: "Services Section", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 5,
            },
            {
                img:Images.designs.template09.img_5,
                page: "Recent News Section", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 6,
            },
            {
                img:Images.designs.template09.img_6,
                page: "Footer", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 7,
            },
        ],
    }
}


/************************************
    [ ScotiaBank Spanish ]
*************************************/
export const ScotiaBankES: IProjectData =  {
    id: 1,
    pin: true,
    title: "ScotiaBank",
    description: "Plantilla web acerca del banco ScotiaBank",
    date: "26 / 01 / 2023",
    img: Images.designs.template09.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades con CSS,
            la página está basada en el sitio web del banco scotiabank
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
                link: "https://github.com/Eifhen/ScotiaBank",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/ScotiaBank",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template09.cover,
                page: "Hero Section", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template09.img_1,
                page: "Menú", // name of the page
                project: "ScotiaBank", // name of the project
                description: "Al hacer clic en el icono de menu aparecerá un modal con todas nuestras opciones de navegación.",
                id: 2,
            },
            {
                img:Images.designs.template09.img_2,
                page: "Pantalla de búsqueda", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.designs.template09.img_3,
                page: "Sección de Comunicación", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 4,
            },
            {
                img:Images.designs.template09.img_4,
                page: "Sección de Servicios", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 5,
            },
            {
                img:Images.designs.template09.img_5,
                page: "Noticias Destacadas", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 6,
            },
            {
                img:Images.designs.template09.img_6,
                page: "Pie de Página", // name of the page
                project: "ScotiaBank", // name of the project
                description: "",
                id: 7,
            },
        ],
    }
}