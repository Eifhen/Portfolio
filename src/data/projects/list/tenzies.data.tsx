import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"






/************************************
    [ Tenzies English ]
*************************************/
export const TenziesEN: IProjectData = {
    id:4,
    pin:true,
    title: "Tenzies",
    description: "Dice game made using React and Bootstrap 5",
    date: "22 / 06 / 2022",
    img:Images.projects.tenzies.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
    ],
    detail:{
        about: [                    
            `Tenzies is a dice game made in React, the objective of the game is to roll 
            the dice until all the dice are equal. you can click on a die to freeze it at its 
            current value between rolls.`
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
                link: "https://github.com/Eifhen/Tenzies",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Tenzies/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.tenzies.cover,
                page: "Home Page", // name of the page
                project: "Tenzies", // name of the project
                description: "This is the main page on which you will play the game",
                id: 1,
            },
            {
                img:Images.projects.tenzies.img_1,
                page: "Translated to Spanish", // name of the page
                project: "Tenzies", // name of the project
                description: "By pressing the switch you can translate the game from English to Spanish",
                id: 2,
            },
            {
                img:Images.projects.tenzies.img_2,
                page: "Playing the game", // name of the page
                project: "Tenzies", // name of the project
                description: "you can click on a die to freeze it at its current value between rolls.",
                id: 3,
            },
            {
                img:Images.projects.tenzies.img_3,
                page: "Game Completed", // name of the page
                project: "Tenzies", // name of the project
                description: "when all the dice are equal you will win the game",
                id: 4,
            },
        ],
    }
}



/************************************
    [ Tenzies Spanish ]
*************************************/
export const TenziesES: IProjectData = {
    id:4,
    pin: true,
    title: "Tenzies",
    description: "Juego de dados hecho mediante React y Boostrap5",
    date: "22 / 06 / 2022",
    img:Images.projects.tenzies.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
    ],
    detail:{
        about: [                    
            `Tenzies es un juego de dados hecho en React, el objetivo del juego es tirar
            los dados hasta que todos los dados sean iguales. puede hacer clic en un dado para congelarlo en su
            valor actual entre rollos.`
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
                link: "https://github.com/Eifhen/Tenzies",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Tenzies/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.tenzies.cover,
                page: "Página de Inicio", // name of the page
                project: "Tenzies", // name of the project
                description: "Esta es la página principal en la que jugarás el juego.",
                id: 1,
            },
            {
                img:Images.projects.tenzies.img_1,
                page: "Traducido a Español", // name of the page
                project: "Tenzies", // name of the project
                description: "Presionando el interruptor puedes traducir el juego de ingles a español",
                id: 2,
            },
            {
                img:Images.projects.tenzies.img_2,
                page: "Jugando el juego", // name of the page
                project: "Tenzies", // name of the project
                description: "puedes hacer clic en un dado para congelarlo en su valor actual entre tiradas.",
                id: 3,
            },
            {
                img:Images.projects.tenzies.img_3,
                page: "Juego Completado", // name of the page
                project: "Tenzies", // name of the project
                description: "cuando todos los dados sean iguales ganaras el juego",
                id: 4,
            },
        ],
    }
}