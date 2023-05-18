import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ Finanzas Personales English ]
*************************************/
export const FinanzasPersonalesEN: IProjectData =  {
    id: 15,
    pin: true,
    title: "Finance Management",
    description: "Application for personal finance management",
    date: "19 / 12 / 2022",
    img:Images.projects.finanzas_personales.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
        { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
    ],
    detail:{
        about: [                    
           `Through this application we can keep a detailed control of our finances, 
           we can store records per year of each of our expenses and income. 
           The application is developed with ReactJS and pure PHP.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
            { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
            { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        ],
        references: [],
        liveInfo: [],
        galery: [
            {
                img:Images.projects.finanzas_personales.cover,
                page: "Intro Page", // name of the page
                project: "Finanzas Personales", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.finanzas_personales.img_1,
                page: "Global Records", // name of the page
                project: "Finanzas Personales", // name of the project
                description: "On this page you can see the list of all the years registered in the system, together with all the income, expenses and savings made.",
                id: 2,
            },
            {
                img:Images.projects.finanzas_personales.img_2,
                page: "Adding Records", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "To add a record we press the "+" button in our active bar, doing this will open a modal that will allow us to add a new record when completing the form",
                id: 3,
            },
            {
                img:Images.projects.finanzas_personales.img_3,
                page: "Year Record", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "On this page we can see all the records stored during the year in question; we can add a new month to the list, using the add button found in the active bar.",
                id: 4,
            },
            {
                img:Images.projects.finanzas_personales.img_4,
                page: "Month Record", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "On this page we can see all the expenses and income stored during the month",
                id: 5,
            },
            {
                img:Images.projects.finanzas_personales.img_5,
                page: "Record Detail", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "On this page we can see the detail of an expense",
                id: 6,
            },
            {
                img:Images.projects.finanzas_personales.img_6,
                page: "Income Detail", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "On this page we can see the detail of an income",
                id: 6,
            },
        ],
    }
}


/************************************
    [ Finanzas Personales Spanish ]
*************************************/
export const FinanzasPersonalesES: IProjectData =  {
    id: 15,
    pin: true,
    title: "Finanzas Personales",
    description: "Aplicación para la gestión de finanzas personales",
    date: "19 / 12 / 2022",
    img: Images.projects.finanzas_personales.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
        { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
        
    ],
    detail:{
        about: [                    
            `A través de esta aplicación podemos llevar un control detallado de nuestras finanzas,
            podemos almacenar registros por año de cada uno de nuestros gastos e ingresos.
            La aplicación está desarrollada con ReactJS y PHP puro.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
            { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
            { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        ],
        references: [],
        liveInfo: [],
        galery: [
            {
                img:Images.projects.finanzas_personales.cover,
                page: "Página Introductoria", // name of the page
                project: "Finanzas Personales", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.finanzas_personales.img_1,
                page: "Record Global", // name of the page
                project: "Finanzas Personales", // name of the project
                description: "En esta página puede ver la lista de todos los años registrados en el sistema, junto con todos los ingresos, gastos y ahorros realizados.",
                id: 2,
            },
            {
                img:Images.projects.finanzas_personales.img_2,
                page: "Agregando Registros", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "Para agregar un registro presionamos el botón “+” en nuestra barra activa, al hacer esto se abrirá un modal que nos permitirá agregar un nuevo registro al completar el formulario",
                id: 3,
            },
            {
                img:Images.projects.finanzas_personales.img_3,
                page: "Registro Anual", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "En esta página podemos ver todos los registros almacenados durante el año en cuestión; podemos agregar un nuevo mes a la lista, usando el botón agregar que se encuentra en la barra activa.",
                id: 4,
            },
            {
                img:Images.projects.finanzas_personales.img_4,
                page: "Registro Mensual", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "En esta página podemos visualizar los gastos e ingresos ocurridos durante el mes.",
                id: 5,
            },
            {
                img:Images.projects.finanzas_personales.img_5,
                page: "Detalle de Gasto", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "En esta página podemos ver el detalle de un gasto determinado",
                id: 6,
            },
            {
                img:Images.projects.finanzas_personales.img_6,
                page: "Detalle de Ingreso", // name of the page
                project: "Finanzas Personales", // name of the project.
                description: "En esta página podemos ver el detalle de un ingreso determinado",
                id: 6,
            },
        ],
    }
}