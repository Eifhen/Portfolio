import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"





/************************************
    [ Project03 English ]
*************************************/
export const Project03EN: IProjectData =  {
    id:6,
    pin: false,
    title: "Project03",
    description: "Practice application: shoe catalog management.",
    date: "04 / 07 / 2022",
    img:Images.projects.project03.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
        { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
            `This project connects to a mysql database to store the information; 
            The idea of this project is to simulate a user management and 
            product management system, in which you can register users, as well 
            as edit and delete them; You can also register products, in this case 
            ideally they should be shoes, edit products and delete them. Among the 
            technologies used are: HTML5, CSS, Bootstrap5, JavaScript, GSAP, Php, Mysql.`,
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "Bootstrap5", icon:"ri-bootstrap-fill color-purple", type: "icon"},
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "GSAP", icon: Images.tecnologies.gsap_icon, type:"image" },
            { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
            { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/AppZapatos",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "http://proyect003.000webhostapp.com/Proyect_03/index.php",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.project03.cover,
                page: "Home Page", // name of the page
                project: "Project03", // name of the project
                description: "On this page we will find instructions that will help us understand how the application works.",
                id: 1,
            },
            {
                img:Images.projects.project03.img_1,
                page: "User Management Page | Banner", // name of the page
                project: "Project03", // name of the project
                description: "On this page you can manage registered users. you can add, edit or delete any user",
                id: 2,
            },
            {
                img:Images.projects.project03.img_2,
                page: "User Management Page | Form and Table", // name of the page
                project: "Project03", // name of the project
                description: "On this page you can manage registered users. you can add, edit or delete any user",
                id: 3,
            },
            {
                img:Images.projects.project03.img_3,
                page: "User Management | Edit User", // name of the page
                project: "Project03", // name of the project
                description: "On this page you can edit user information",
                id: 4,
            },
            {
                img:Images.projects.project03.img_4,
                page: "Products Page | Banner", // name of the page
                project: "Project03", // name of the project
                description: "On this page you can see the list of products",
                id: 5,
            },
            {
                img:Images.projects.project03.img_5,
                page: "Product Page | List", // name of the page
                project: "Project03", // name of the project
                description: "On this page you can see the list of products",
                id: 6,
            },
            {
                img:Images.projects.project03.img_6,
                page: "Add Product", // name of the page
                project: "Project03", // name of the project
                description: "On this page you can add a new product",
                id: 7,
            },
        ],
    }
}


/************************************
    [ Project03 Spanish ]
*************************************/

export const Project03ES: IProjectData =  {
    id:6,
    pin: false,
    title: "Project03",
    description: "Aplicación de práctica: gestión catálogo de zapatos",
    date: "04 / 07 / 2022",
    img: Images.projects.project03.cover,
    highlighted: false,
    mainTechnologies: [
        { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
        { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
            `Este proyecto se conecta a una base de datos en mysql para almacenar la 
            información; la idea de este proyecto es simular un sistema de gestión de 
            usuarios y de gestión de productos, en el mismo podrás registrar usuarios, 
            así como también editarlos y eliminarlos; también podrás registrar productos, 
            en este caso lo ideal es que sean zapatos, editar productos y eliminarlos. 
            dentro de las tecnologías utilizadas están: 
            HTML5, CSS, Bootstrap5, JavaScript, GSAP, Php, Mysql.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "Bootstrap5", icon:"ri-bootstrap-fill color-purple", type: "icon"},
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "GSAP", icon: Images.tecnologies.gsap_icon, type:"image" },
            { name: "PHP", icon: Images.tecnologies.php_icon, type: "image" },
            { name: "Mysql", icon: Images.tecnologies.mysql_icon, type: "image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/AppZapatos",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "http://proyect003.000webhostapp.com/Proyect_03/index.php",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.project03.cover,
                page: "Página de Inicio", // name of the page
                project: "Project03", // name of the project
                description: "En esta página encontraremos instrucciones que nos ayudarán a entender cómo funciona la aplicación.",
                id: 1,
            },
            {
                img:Images.projects.project03.img_1,
                page: "Administración de usuarios | Banner", // name of the page
                project: "Project03", // name of the project
                description: "En esta página puede administrar los usuarios registrados. puede agregar, editar o eliminar cualquier usuario",
                id: 2,
            },
            {
                img:Images.projects.project03.img_2,
                page: "Administración de usuarios | Formulario y Tabla", // name of the page
                project: "Project03", // name of the project
                description: "En esta página puede administrar los usuarios registrados. puede agregar, editar o eliminar cualquier usuario",
                id: 3,
            },
            {
                img:Images.projects.project03.img_3,
                page: "Administración de usuarios | Editar Usuario", // name of the page
                project: "Project03", // name of the project
                description: "En esta página puede editar la información del usuario.",
                id: 4,
            },
            {
                img:Images.projects.project03.img_4,
                page: "Productos | Banner", // name of the page
                project: "Project03", // name of the project
                description: "En esta página puedes ver la lista de productos.",
                id: 5,
            },
            {
                img:Images.projects.project03.img_5,
                page: "Productos | Lista", // name of the page
                project: "Project03", // name of the project
                description: "En esta página puedes ver la lista de productos.",
                id: 6,
            },
            {
                img:Images.projects.project03.img_6,
                page: "Agregar Producto", // name of the page
                project: "Project03", // name of the project
                description: "En esta página puedes agregar un nuevo producto.",
                id: 7,
            },
        ],
    }
}