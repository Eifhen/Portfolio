
import { Images } from "../../../assets/img/images"
import { IProjectData } from "../../projects/project.data.interfaces"



/************************************
    [ MyFavoriteCity English ]
*************************************/
export const MyFavoriteCityEN: IProjectData =  {
    id: 8,
    pin: false,
    title: "My Favorite City",
    description: "Basic design of a web about my favorite city.",
    date: "16 / 08 / 2022",
    img:Images.designs.template02.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `I made this template as a practice to improve my CSS skills,
            The page is a basic design of a web about my favorite city`,
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
                link: "https://github.com/Eifhen/MyFavoriteCity",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/MyFavoriteCity/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template02.cover,
                page: "Hero", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template02.img_1,
                page: "Navegation Options", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "in this section you can select any of the options to move to the section where that city is discussed",
                id: 2,
            },
            {
                img:Images.designs.template02.img_2,
                page: "The Notre-Dame Cathedral", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "In this section i talk about the amazing Notre-Dame Cathedral",
                id: 3,
            },
            {
                img:Images.designs.template02.img_3,
                page: "The Eiffel Tower", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "In this section i talk about the Eiffel Tower.",
                id: 4,
            },
            {
                img:Images.designs.template02.img_4,
                page: "The Museum of louvre", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "In this section i talk about the Museum of louvre.",
                id: 5,
            },
        ],
    }
}

/************************************
    [ MyFavoriteCity Spanish ]
*************************************/
export const MyFavoriteCityES: IProjectData =  {
    id: 8,
    pin: false,
    title: "Mi Ciudad Favorita",
    description: "Diseño básico sobre una web acerca de mi ciudad favorita.",
    date: "16 / 08 / 2022",
    img: Images.designs.template02.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
    ],
    detail:{
        about: [                    
            `Hice esta plantilla como una práctica para mejorar mis habilidades de CSS,
            La página es una plantilla básica para una página acerca de mi ciudad favorita.`,
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
                link: "https://github.com/Eifhen/MyFavoriteCity",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/MyFavoriteCity",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.designs.template02.cover,
                page: "Hero", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.designs.template02.img_1,
                page: "Opciones de Navegación", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "en esta sección puede seleccionar cualquiera de las opciones disponibles para pasar a la sección donde se habla de esa ciudad en concreto.",
                id: 2,
            },
            {
                img:Images.designs.template02.img_2,
                page: "La Catedral de Notre-Dame", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "En esta sección hablamos sobre la increible catedral de Notre-Dame.",
                id: 3,
            },
            {
                img:Images.designs.template02.img_3,
                page: "La Eiffel Tower", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "En esta sección hablamos sobre la torre Eiffel.",
                id: 4,
            },
            {
                img:Images.designs.template02.img_4,
                page: "El Museo de louvre", // name of the page
                project: "MyFavoriteCity", // name of the project
                description: "En está sección hablamos sobre el museo de louvre.",
                id: 5,
            },
        ],
    }
}
