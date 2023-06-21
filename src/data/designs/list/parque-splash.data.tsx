import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ ParqueSplash English ]
*************************************/
export const ParqueSplashEN: IProjectData =  {
    id: 5,
    pin: true,
    title: "ParqueSplash",
    description: "Basic template for the home screen of an application for a water park",
    date: "12 / 09 / 2022",
    img:Images.designs.template05.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills,
            The page is a basic template for the home screen of an application for a water park.`,
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
                link: "https://github.com/Eifhen/ParqueSplash",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/ParqueSplash",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template05.cover,
                page: "ParqueSplash", // name of the page
                project: "ParqueSplash", // name of the project
                description: "",
                id: 1,
            },
        ],
    }
}


/************************************
    [ ParqueSplash Spanish ]
*************************************/
export const ParqueSplashES: IProjectData =  {
    id: 5,
    pin: true,
    title: "ParqueSplash",
    description: "Template básico para la pantalla de inicio de una aplicación para un parque aquatico",
    date: "12 / 09 / 2022",
    img: Images.designs.template05.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades de CSS,
            La página es una plantilla básica para la pantalla de inicio de una aplicación para un parque acuático.`,
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
                link: "https://github.com/Eifhen/ParqueSplash",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/ParqueSplash",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template05.cover,
                page: "ParqueSplash", // name of the page
                project: "ParqueSplash", // name of the project
                description: "",
                id: 1,
            },
        ],
    }
}