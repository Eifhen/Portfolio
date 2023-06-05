import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ BlackJack English ]
*************************************/
export const BlackJackEN: IProjectData =  {
    id:9,
    pin: false,
    title: "BlackJack",
    description: "Black jack game also known as 21; created using pure JavaScript and bootstrap 4",
    date: "08 / 02 / 2022",
    img:Images.projects.blackjack.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
           `To start a New Game, press the red "Nuevo Juego" button, then we must press 
           the blue "Pedir Carta" button, when doing this we will take a 
           card from the deck, if we want to take another card we must press the 
           "Pedir Carta" button again.`,
           
           `Once satisfied with the cards we have, we must press the "Detener" button by 
           doing this the computer's turn will start and a winner will be decided.`
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
                link: "https://github.com/Eifhen/AppBlackJack/tree/main",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/AppBlackJack/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.blackjack.cover,
                page: "Game", // name of the page
                project: "BlackJack", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.blackjack.img_1,
                page: "Loser Screen", // name of the page
                project: "BlackJack", // name of the project
                description: "When we lose a modal will appear indicating that we have lost.",
                id: 2,
            },
            {
                img:Images.projects.blackjack.img_2,
                page: "Winner Screen", // name of the page
                project: "BlackJack", // name of the project
                description: "when we win a modal will appear indicating that we have won.",
                id: 3,
            },
     
        ],
    }
}


/************************************
    [ BlackJack Spanish ]
*************************************/
export const BlackJackES: IProjectData =  {
    id:9,
    pin: false,
    title: "BlackJack",
    description: "Juego de black jack también conocido como 21; creado utilizando JavaScript puro y bootstrap 4",
    date: "08 / 02 / 2022",
    img: Images.projects.blackjack.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Para iniciar un Nuevo Juego, presione el botón rojo "Nuevo Juego", 
            luego debemos presionar el botón azul "Pedir Carta", al hacerlo tomaremos una
            carta de la baraja, si queremos sacar otra carta debemos pulsar el botón
            "Pedir Carta" de nuevo.`,

            `Una vez satisfechos con las tarjetas que tenemos, debemos pulsar el botón "Detener"
            haciendo esto comenzará el turno de la computadora y se decidirá un ganador.`

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
                link: "https://github.com/Eifhen/AppBlackJack/tree/main",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/AppBlackJack/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.blackjack.cover,
                page: "Pantalla de Juego", // name of the page
                project: "BlackJack", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.blackjack.img_1,
                page: "Pantalla de Derrota", // name of the page
                project: "BlackJack", // name of the project
                description: "Cuando perdamos aparecerá un modal indicando que hemos perdido.",
                id: 2,
            },
            {
                img:Images.projects.blackjack.img_2,
                page: "Pantalla de Victoria", // name of the page
                project: "BlackJack", // name of the project
                description: "cuando ganemos aparecerá un modal indicando que hemos ganado.",
                id: 3,
            },
     
        ],
    }
}