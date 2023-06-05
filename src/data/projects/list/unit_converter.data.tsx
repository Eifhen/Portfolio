import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ UnitConverter English ]
*************************************/
export const UnitConverterEN: IProjectData =  {
    id: 12,
    pin: false,
    title: "Unit Converter",
    description: "Application to convert magnitudes to both metric and imperial systems.",
    date: "19 / 10 / 2022",
    img:Images.projects.unit_converter.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
           `Application to convert magnitudes to both metric and imperial systems.`
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
                link: "https://github.com/Eifhen/Unit-Converter",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Unit-Converter/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.unit_converter.cover,
                page: "Main Page", // name of the page
                project: "Unit Converter", // name of the project
                description: "",
                id: 1,
            },
        ],
    }
}


/************************************
    [ UnitConverter Spanish ]
*************************************/
export const UnitConverterES: IProjectData =  {
    id: 12,
    pin: false,
    title: "Unit Converter",
    description: "Aplicación para convertir magnitudes tanto al sistema métrico como al imperial.",
    date: "19 / 10 / 2022",
    img: Images.projects.unit_converter.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Aplicación para convertir magnitudes tanto al sistema métrico como al imperial.`
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
                link: "https://github.com/Eifhen/Unit-Converter",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Unit-Converter/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.unit_converter.cover,
                page: "Main Page", // name of the page
                project: "Unit Converter", // name of the project
                description: "",
                id: 1,
            },
        ],
    }
}