import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ Lista de tareas English ]
*************************************/
export const ListaDeTareasEN: IProjectData =  {
    id:7,
    pin: false,
    title: "ToDo List",
    description: "Simple to-do list using pure JavaScript, WebPack, Html and CSS.",
    date: "17 / 02 / 2022",
    img:Images.projects.lista_de_tareas.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "Webpack", icon: Images.tecnologies.webpack_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `This app is a simple to do list made with html5, css, javascript and webpack.`,

            `In this application you will be able to add and remove items from the task list. 
            as well as check or uncheck any item on the list. You can also 
            filter the items on the list according to whether they are completed or not.`,

            `All added tasks are stored in localstorage so that the data can be persistent.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "Webpack", icon: Images.tecnologies.webpack_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/AppListaDeTareas/tree/main",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/AppListaDeTareas/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.lista_de_tareas.cover,
                page: "Main Page", // name of the page
                project: "ToDo List", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.lista_de_tareas.img_1,
                page: "Actions", // name of the page
                project: "ToDo List", // name of the project
                description: "In our task list you can add and remove tasks, mark a task as completed, filter tasks by pending and completed, delete all completed tasks. among other actions.",
                id: 2,
            },
        ],
    }
}


/************************************
    [ Lista de tareas Spanish ]
*************************************/
export const ListaDeTareasES: IProjectData =  {
    id:7,
    pin: false,
    title: "Lista de Tareas",
    description: "Lista de tareas simple, utilizando JavaScript puro, WebPack, Html y CSS.",
    date: "17 / 02 / 2022",
    img: Images.projects.lista_de_tareas.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "Webpack", icon: Images.tecnologies.webpack_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Esta aplicación es una lista de tareas sencilla hecha con 
            html5, css, javascript y webpack`,

            `En esta aplicación podrá agregar y eliminar elementos de la lista de tareas.
            así como marcar o desmarcar cualquier elemento de la lista. Tú también puedes
            filtrar los elementos de la lista según estén completos o no.`,

            `Todas las tareas añadidas se almacenan en el almacenamiento local 
            para que los datos puedan ser persistentes.`

        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "Webpack", icon: Images.tecnologies.webpack_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/AppListaDeTareas/tree/main",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://eifhen.github.io/AppListaDeTareas/",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.lista_de_tareas.cover,
                page: "Página Principal", // name of the page
                project: "Lista de Tareas", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.lista_de_tareas.img_1,
                page: "Acciones", // name of the page
                project: "Lista de Tareas", // name of the project
                description: "En nuestra lista de tareas puede agregar y eliminar tareas, marcar una tarea como completada, filtrar tareas por pendientes y completadas, eliminar todas las tareas completadas. entre otras acciones.",
                id: 2,
            },
        ],
    }
}