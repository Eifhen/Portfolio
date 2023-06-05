import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ PathStorage English ]
*************************************/
export const PathStorageEN: IProjectData =  {
    id: 13,
    pin: false,
    title: "PathStorage",
    description: "Extension for google chrome, which allows to store urls",
    date: "19 / 08 / 2022",
    img:Images.projects.pathstorage.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
           `Extension for google chrome, which allows to store and delete urls, 
           for any purpose we want. you can install this extension locally in your 
           browser and make use of it.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/PathStorage---Chrome-Extension",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/PathStorage---Chrome-Extension/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.pathstorage.cover,
                page: "Main Page", // name of the page
                project: "PathStorage", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.pathstorage.img_1,
                page: "With stored urls", // name of the page
                project: "PathStorage", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}


/************************************
    [ PathStorage Spanish ]
*************************************/
export const PathStorageES: IProjectData =  {
    id: 13,
    pin: false,
    title: "PathStorage",
    description: "Extensión para google chrome, que permite almacenar urls",
    date: "19 / 08 / 2022",
    img: Images.projects.pathstorage.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Extensión para google chrome, que permite almacenar y borrar urls,
            para cualquier propósito que queramos. puedes instalar esta extensión localmente en tu
            navegador y hacer uso de ella.`
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
                link: "https://github.com/Eifhen/PathStorage---Chrome-Extension",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/PathStorage---Chrome-Extension/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.pathstorage.cover,
                page: "Main Page", // name of the page
                project: "PathStorage", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.pathstorage.img_1,
                page: "With stored urls", // name of the page
                project: "PathStorage", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}