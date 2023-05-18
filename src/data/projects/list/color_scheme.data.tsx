import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ ColorScheme English ]
*************************************/
export const ColorSchemeEN: IProjectData =  {
    id: 11,
    pin: false,
    title: "Color Scheme",
    description: "Color Scheme Generator",
    date: "03 / 10 / 2022",
    img:Images.projects.color_scheme.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
           `Color scheme generator, app made with javascript, css and html5. 
           it asks us to enter a color and select the type of scheme we want. 
           After this, a request will be made to the https://www.thecolorapi.com 
           api to receive the scheme.`
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
                link: "https://github.com/Eifhen/Color-Scheme-Generator",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Color-Scheme-Generator/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.color_scheme.cover,
                page: "Main Page", // name of the page
                project: "Color Scheme", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.color_scheme.img_1,
                page: "Color Scheme Options", // name of the page
                project: "Color Scheme", // name of the project
                description: "by clicking on the dropdown input we can select the type of scheme we want",
                id: 2,
            },
            {
                img:Images.projects.color_scheme.img_2,
                page: "Color Scheme Analogic", // name of the page
                project: "Color Scheme", // name of the project
                description: "If we select the green color rgb(21, 217, 18) and the analog scheme we will have the following result.",
                id: 3,
            },
     
        ],
    }
}


/************************************
    [ ColorScheme Spanish ]
*************************************/
export const ColorSchemeES: IProjectData =  {
    id: 11,
    pin: false,
    title: "Color Scheme",
    description: "Generador de Esquemas de color",
    date: "03 / 10 / 2022",
    img: Images.projects.color_scheme.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Generador de esquemas de color, app realizada con javascript, 
            css y html5. la misma nos pide ingresar un color y seleccionar el 
            tipo de esquema que queremos. Luego de esto se realizará una 
            petición a la api de https://www.thecolorapi.com para 
            recibir el esquema.`

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
                link: "https://github.com/Eifhen/Color-Scheme-Generator",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Color-Scheme-Generator/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.color_scheme.cover,
                page: "Página Principal", // name of the page
                project: "Color Scheme", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.color_scheme.img_1,
                page: "Color Scheme Opciones", // name of the page
                project: "Color Scheme", // name of the project
                description: "haciendo clic en la entrada desplegable podemos seleccionar el tipo de esquema que queremos",
                id: 2,
            },
            {
                img:Images.projects.color_scheme.img_2,
                page: "Esquema Analógico", // name of the page
                project: "Color Scheme", // name of the project
                description: "Si seleccionamos el color verde rgb(21, 217, 18) y el esquema analógico tendremos el siguiente resultado.",
                id: 3,
            },
     
        ],
    }
}