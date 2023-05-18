import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"






/************************************
    [ legendsAndFantasy English ]
*************************************/
export const LegendsAndFantasyEN: IProjectData = {
    id:10,
    pin: false,
    title: "Legends And Fantasy",
    description: "Role-playing game made in React inspired by the characters of the clash of clans game",
    date: "19 / 10 / 2022",
    img: Images.projects.legends_and_fantasy.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
    ],
    detail:{
        about: [                    
            `Role-playing game made in React inspired by the characters of the clash of clans game`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Legends-And-Fantasy",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Legends-And-Fantasy/#/home",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.legends_and_fantasy.cover,
                page: "Intro", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.legends_and_fantasy.img_1,
                page: "Select Character", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "On this screen you can select the character you want to play as.",
                id: 2,
            },
            {
                img:Images.projects.legends_and_fantasy.img_2,
                page: "Playing the game", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.projects.legends_and_fantasy.img_3,
                page: "Loser Screen", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 4,
            },
            {
                img:Images.projects.legends_and_fantasy.img_4,
                page: "Winner Screen", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 5,
            },
        ],
    }
}



/************************************
    [ legendsAndFantasy Spanish ]
*************************************/
export const LegendsAndFantasyES: IProjectData = {
    id:10,
    pin: false,
    title: "Legends And Fantasy",
    description: "Juego de rol hecho en React inspirado en los personajes del juego Clash of Clans.",
    date: "19 / 10 / 2022",
    img: Images.projects.legends_and_fantasy.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
    ],
    detail:{
        about: [                    
            `Juego de rol hecho en React inspirado en los personajes del juego Clash of Clans.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Legends-And-Fantasy",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Legends-And-Fantasy/#/home",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.legends_and_fantasy.cover,
                page: "Introducción", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.legends_and_fantasy.img_1,
                page: "Seleccionar Personaje", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "En esta pantalla puedes seleccionar el personaje con el que quieres jugar.",
                id: 2,
            },
            {
                img:Images.projects.legends_and_fantasy.img_2,
                page: "Jugando el juego", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 3,
            },
            {
                img:Images.projects.legends_and_fantasy.img_3,
                page: "Pantalla de Derrota", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 4,
            },
            {
                img:Images.projects.legends_and_fantasy.img_4,
                page: "Pantalla de Victoria", // name of the page
                project: "Legends And Fantasy", // name of the project
                description: "",
                id: 5,
            },
        ],
    }
}