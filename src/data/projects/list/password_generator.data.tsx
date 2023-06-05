import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ PathStorage English ]
*************************************/
export const PasswordGeneratorEN: IProjectData =  {
    id: 14,
    pin: false,
    title: "Password Generator",
    description: "Application that allows us to generate secure passwords.",
    date: "18 / 08 / 2022",
    img:Images.projects.password_generator.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
           `Application that allows us to generate secure passwords. 
           for this we only have to define the length of characters
            that we want for our password and press the "Generate Passwords" button`
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
                link: "https://github.com/Eifhen/Password-Generator",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Password-Generator/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.password_generator.cover,
                page: "Main Page", // name of the page
                project: "Password Generator", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.password_generator.img_1,
                page: "Adding a Password", // name of the page
                project: "Password Generator", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}


/************************************
    [ PathStorage Spanish ]
*************************************/
export const PasswordGeneratorES: IProjectData =  {
    id: 14,
    pin: false,
    title: "Password Generator",
    description: "Aplicación que nos permite generar contraseñas seguras.",
    date: "18 / 08 / 2022",
    img: Images.projects.password_generator.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Aplicación que nos permite generar contraseñas seguras. 
            para esto solo tenemos que definir la longitud de caracteres 
            que queremos para nuestra contraseña y pulsar el botón 
            "Generate Passwords"`
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
                link: "https://github.com/Eifhen/Password-Generator",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Password-Generator/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.password_generator.cover,
                page: "Main Page", // name of the page
                project: "Password Generator", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.password_generator.img_1,
                page: "Adding a Password", // name of the page
                project: "Password Generator", // name of the project
                description: "",
                id: 2,
            },
        ],
    }
}