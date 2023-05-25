import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ Camsoft03 English ]
*************************************/
export const Camsoft03EN: IProjectData =  {
    id:8,
    pin: false,
    title: "Camsoft03",
    description: "Software practice for the company CamSoft.",
    date: "10 / 11 / 2022",
    img:Images.projects.camsoft03.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
        { name: "ASP.NET Core", icon: Images.tecnologies.asp_icon, type: "image" },
        { name: "SQL Server", icon: Images.tecnologies.sql_icon, type: "image" },
    ],
    detail:{
        about: [                    
           `Camsoft03 is a software practice for the camsoft company, which consists of 3 modules. 
           The first module is the departments module. In this module we can list, 
           add, update, delete departments from a list. the second module is the 
           employee module; In this module we can manage our employees by adding, 
           deleting or updating any of them; the third module is the payroll module 
           in this module we can manage the payroll of the employees`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
            { name: "ASP.NET Core", icon: Images.tecnologies.asp_icon, type: "image" },
            { name: "SQL Server", icon: Images.tecnologies.sql_icon, type: "image" },
            { name: "Entity Framework", icon: Images.tecnologies.ef_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Camsoft03",
                type: "icon",
            },
        ],
        galery: [
            {
                img:Images.projects.camsoft03.cover,
                page: "Introduction Page", // name of the page
                project: "Camsoft03", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.camsoft03.img_1,
                page: "Select Module", // name of the page
                project: "Camsoft03", // name of the project
                description: "On this page the available modules appear, from here we can access any of the modules of our application.",
                id: 2,
            },
            {
                img:Images.projects.camsoft03.img_2,
                page: "Department Module", // name of the page
                project: "Camsoft03", // name of the project
                description: "From this module we can manage our departments, by adding, updating or deleting any othem",
                id: 3,
            },
            {
                img:Images.projects.camsoft03.img_3,
                page: "Department Add", // name of the page
                project: "Camsoft03", // name of the project
                description: "If we want to add a new department you can click the green button and then a modal will show up. complete the modal and the record will be added.",
                id: 4,
            },
            {
                img:Images.projects.camsoft03.img_4,
                page: "Employee Module", // name of the page
                project: "Camsoft03", // name of the project
                description: "From this module we can manage all the operations related to the employee",
                id: 5,
            },
            {
                img:Images.projects.camsoft03.img_5,
                page: "Payroll Module", // name of the page
                project: "Camsoft03", // name of the project
                description: "From this module we can manage all the operations related to the payroll",
                id: 6,
            },
            {
                img:Images.projects.camsoft03.img_6,
                page: "Payroll Detail", // name of the page
                project: "Camsoft03", // name of the project
                description: "In this page we can see the detail of a given payroll.",
                id: 7,
            },
        ],
    }
}


/************************************
    [ Camsoft03 Spanish ]
*************************************/
export const Camsoft03ES: IProjectData =  {
    id:8,
    pin: false,
    title: "Camsoft03",
    description: "Práctica de software para la empresa CamSoft.",
    date: "10 / 11 / 2022",
    img: Images.projects.camsoft03.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
        { name: "ASP.NET Core", icon: Images.tecnologies.asp_icon, type: "image" },
        { name: "SQL Server", icon: Images.tecnologies.sql_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `Camsoft03 es una práctica de software para la empresa camsoft, que consta de 3 módulos.
            El primer módulo es el módulo de departamentos. En este módulo podemos enumerar,
            agregar, actualizar, eliminar departamentos de una lista. el segundo modulo es el
            módulo de empleados; En este módulo podemos administrar a nuestros empleados agregando,
            borrar o actualizar cualquiera de ellos; el tercer módulo es el módulo de nómina
            en este módulo podemos gestionar la nómina de los empleados`

        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
            { name: "ASP.NET Core", icon: Images.tecnologies.asp_icon, type: "image" },
            { name: "SQL Server", icon: Images.tecnologies.sql_icon, type: "image" },
            { name: "Entity Framework", icon: Images.tecnologies.ef_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Camsoft03",
                type: "icon",
            },
        ],
        galery: [
            {
                img:Images.projects.camsoft03.cover,
                page: "Introducción", // name of the page
                project: "Camsoft03", // name of the project
                description: "",
                id: 1,
            },
            {
                img:Images.projects.camsoft03.img_1,
                page: "Seleccionar Módulo", // name of the page
                project: "Camsoft03", // name of the project
                description: "En esta página aparecen los módulos disponibles, desde aquí podemos acceder a cualquiera de los módulos de nuestra aplicación.",
                id: 2,
            },
            {
                img:Images.projects.camsoft03.img_2,
                page: "Módulo de Departamentos", // name of the page
                project: "Camsoft03", // name of the project
                description: "Desde este módulo podemos gestionar nuestros departamentos, añadiendo, actualizando o eliminando cualquiera de ellos",
                id: 3,
            },
            {
                img:Images.projects.camsoft03.img_3,
                page: "Agregar Departamentos", // name of the page
                project: "Camsoft03", // name of the project
                description: "Si queremos agregar un nuevo departamento, puede hacer clic en el botón verde y luego aparecerá un modal. complete el modal y se agregará el registro.",
                id: 4,
            },
            {
                img:Images.projects.camsoft03.img_4,
                page: "Módulo de Empleados", // name of the page
                project: "Camsoft03", // name of the project
                description: "Desde este módulo podemos gestionar todas las operaciones relacionadas con el empleado",
                id: 5,
            },
            {
                img:Images.projects.camsoft03.img_5,
                page: "Módulo de Nómina", // name of the page
                project: "Camsoft03", // name of the project
                description: "Desde este módulo podemos gestionar todas las operaciones relacionadas con la nómina",
                id: 6,
            },
            {
                img:Images.projects.camsoft03.img_6,
                page: "Detalle de Nómina", // name of the page
                project: "Camsoft03", // name of the project
                description: "En esta página podemos ver el detalle de una determinada nómina.",
                id: 7,
            },
        ],
    }
}