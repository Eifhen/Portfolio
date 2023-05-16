import { Images } from "../../../assets/img/images";
import { IProjectData } from "../project.data.interfaces";





/************************************
    [ ProjectManager English ]
*************************************/

export const ProjectManagerEN: IProjectData =  {
    id:2,
    pin:true,
    title: "Product Manager",
    description: "The Product Manager app is a project in which i display my skills in the development of web application using modern javascript frameworks like SolidJS",
    date: "01 / 05 / 2023",
    img:Images.projects.product_manager.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
        { name: "SolidJS", icon: Images.tecnologies.solidjs_icon, type: "image" },
    ],
    detail:{
        about: [                    
            `I made this project as a practice for SolidJS the idea of this project is to 
             mimic the behavior of a basic shopping application.`,

             `
             This application is divided into 3 sections. Number one is a management section in which you can add, 
             edit and delete products from our catalog, in the section number two we 
             can find all the products that exists in our catalog, we can go to their 
             detail and add them to our cart. in the section number three we will 
             find our shooping cart, we can see the total amount of our purchase 
             and we can remove any item of our shooping cart`,
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "SolidJS", icon: Images.tecnologies.solidjs_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/ProductManager",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://product-manager3131.netlify.app/home",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.product_manager.cover,
                page: "Home Page", // name of the page
                project: "Project Manager", // name of the project
                description: "On this page we will find instructions that will help us understand how the application is divided.",
                id: 1,
            },
            {
                img:Images.projects.product_manager.img_1,
                page: "Management Page", // name of the page
                project: "Project Manager", // name of the project
                description: "On this page we can manage our product catalogue; adding, editing or removing any product from our catalog",
                id: 2,
            },
            {
                img:Images.projects.product_manager.img_2,
                page: "Management Page Modal Open", // name of the page
                project: "Project Manager", // name of the project
                description: "Pressing any of the add or edit operations will open a modal that will allow us to perform the operation.",
                id: 3,
            },
            {
                img:Images.projects.product_manager.img_3,
                page: "Management Page Table Filled", // name of the page
                project: "Project Manager", // name of the project
                description: "This is the appearance of the table when it contains some products.",
                id: 4,
            },
            {
                img:Images.projects.product_manager.img_4,
                page: "Products Page", // name of the page
                project: "Project Manager", // name of the project
                description: "On this page we will see the list of products from our catalog for the 'customer'",
                id: 5,
            },
            {
                img:Images.projects.product_manager.img_5,
                page: "Product Detail Page", // name of the page
                project: "Project Manager", // name of the project
                description: "On this page we can see the detailed information of a specific product",
                id: 6,
            },
            {
                img:Images.projects.product_manager.img_6,
                page: "Cart Page", // name of the page
                project: "Project Manager", // name of the project
                description: "On this page we can see our shopping cart along with the total amount to pay.",
                id: 7,
            },
        ],
    }
}



/************************************
    [ ProjectManager Spanish ]
*************************************/

export const ProjectManagerES: IProjectData =  {
    id:2,
    pin: true,
    title: "Product Manager",
    description: "La aplicación Product Manager es un proyecto en el que muestro mis habilidades en el desarrollo de aplicaciones web utilizando marcos de JavaScript modernos como SolidJS.",
    date: "01 / 05 / 2023",
    img: Images.projects.product_manager.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
        { name: "SolidJS", icon: Images.tecnologies.solidjs_icon, type: "image" },
    ],
    detail:{
        about: [                    
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "SolidJS", icon: Images.tecnologies.solidjs_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/ProductManager",
                type: "icon",
            },
            {
                nombre: "Live Demo",
                icon: "live-demo",
                link: "https://product-manager3131.netlify.app/home",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.product_manager.cover,
                page: "Página de Inicio", // name of the page
                project: "Project Manager", // name of the project
                description: "En esta página encontraremos instrucciones que nos ayudarán a comprender cómo se divide la aplicación.",
                id: 1,
            },
            {
                img:Images.projects.product_manager.img_1,
                page: "Página de Administración", // name of the page
                project: "Project Manager", // name of the project
                description: "En esta página podemos gestionar nuestro catálogo de productos; agregar, editar o eliminar cualquier producto de nuestro catálogo",
                id: 2,
            },
            {
                img:Images.projects.product_manager.img_2,
                page: "Página de Administración (Modal Abierto)", // name of the page
                project: "Project Manager", // name of the project
                description: "Pulsando cualquiera de las operaciones de añadir o editar se abrirá un modal que nos permitirá realizar la operación.",
                id: 3,
            },
            {
                img:Images.projects.product_manager.img_3,
                page: "Página de Administración (Tabla con algunos datos)", // name of the page
                project: "Project Manager", // name of the project
                description: "Este es el aspecto de la tabla cuando contiene algunos productos.",
                id: 4,
            },
            {
                img:Images.projects.product_manager.img_4,
                page: "Página de Productos", // name of the page
                project: "Project Manager", // name of the project
                description: "En esta página veremos la lista de productos de nuestro catálogo para el 'cliente'",
                id: 5,
            },
            {
                img:Images.projects.product_manager.img_5,
                page: "Detalle del Producto", // name of the page
                project: "Project Manager", // name of the project
                description: "En esta página podemos ver la información detallada de un producto específico",
                id: 6,
            },
            {
                img:Images.projects.product_manager.img_6,
                page: "Carrito de compras", // name of the page
                project: "Project Manager", // name of the project
                description: "En esta página podemos ver nuestro carrito de compras junto con el monto total a pagar.",
                id: 7,
            },
        ],
    }
}