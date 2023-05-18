import { Images } from "../../../assets/img/images";
import { IProjectData } from "../project.data.interfaces";



/************************************
    [ Quizzical English ]
*************************************/
export const QuizzicalEN:IProjectData =    {
    id:3,
    pin:true,
    title: "Quizzical",
    description: "Trivia game made with React and Bootstrap 5",
    date: "21 / 06 / 2022",
    img:Images.projects.quizzical.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
    ],
    detail:{
        about: [                    
            `This is an application made on 21-06-2022
            as a React practice.`,

            `This practice generates a trivia of 5 questions, making a request to an API to 
            obtain the trivia. Complete the questions and you will win.`
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
                link: "https://github.com/Eifhen/Quizzical",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Quizzical/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.quizzical.cover,
                page: "Home Page", // name of the page
                project: "Quizzical", // name of the project
                description: "In this page you will find an introduction to the app",
                id: 1,
            },
            {
                img:Images.projects.quizzical.img_1,
                page: "Trivia Page", // name of the page
                project: "Quizzical", // name of the project
                description: "On this screen you can play the trivia game",
                id: 2,
            },
            {
                img:Images.projects.quizzical.img_2,
                page: "Trivia Paga (Trivia Completed)", // name of the page
                project: "Quizzical", // name of the project
                description: "This is how it looks when we complete the game",
                id: 3,
            },
        ],
    }
}


/************************************
    [ Quizzical Spanish ]
*************************************/

export const QuizzicalES: IProjectData = 
{
    id:3,
    pin: true,
    title: "Quizzical",
    description: "Juego de trivia hecho con React y Bootstrap 5",
    date: "21 / 06 / 2022",
    img:Images.projects.quizzical.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
    ],
    detail:{
        about: [                    
            `Esta es una app realizada el 21-06-2022 como práctica de React.`,

            `Esta práctica genera una trivia de 5 preguntas, realizando una petición hacia una API 
            para obtener la trivia. Completa las preguntas y ganarás`,
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
                link: "https://github.com/Eifhen/Quizzical",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/Quizzical/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.quizzical.cover,
                page: "Página de Inicio", // name of the page
                project: "Quizzical", // name of the project
                description: "En esta página encontrará una introducción a la aplicación.",
                id: 1,
            },
            {
                img:Images.projects.quizzical.img_1,
                page: "Página de Trivia", // name of the page
                project: "Quizzical", // name of the project
                description: "En esta pantalla puedes jugar el juego de trivia.",
                id: 2,
            },
            {
                img:Images.projects.quizzical.img_2,
                page: "Página de Trivia (Trivia Completada)", // name of the page
                project: "Quizzical", // name of the project
                description: "Así se ve cuando completamos el juego.",
                id: 3,
            },
        ],
    }
}