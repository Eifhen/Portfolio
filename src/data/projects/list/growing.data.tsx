import { Images } from "../../../assets/img/images";
import { IProjectData } from "../project.data.interfaces";



/************************************
    [ Growing English ]
************************************/

export const GrowingEN: IProjectData = {   
    id: 1,
    pin:true,
    title: "Growing Business School",
    highlighted:true,
    description: "In December 2021 I was hired to work on the development of an educational platform.",
    date: "12 / 2020 | 04 / 2022",
    img:Images.projects.growing.cover,
    mainTechnologies: [
        { name: "JQuery", icon: Images.tecnologies.jquery_icon, type: "image" },
        { name: "C#", icon: Images.tecnologies.c_icon, type: "image" },
        { name: "ASP.NET", icon: Images.tecnologies.asp_icon, type:"image" },
    ],
    detail: {
        about:[  
            `In december 2021 i was hire as a software developer for the educational 
            institution Growing Business School for the development of an education platform,
            a web page and an administration system in which the institution would have a 
            total control over all the other systems.`,

            `for the development of this  3 apps i used the technologies listed in the "technologies" 
            section, but basically the app was made using the ASP.NET Mvc framework powered by RazorPages, 
            EntityFramework, Jquery, SQL Server and others  `,

            `Within the functionalities of the applications we have that in the educational 
            platform we can perform diverse operations  soch as the matriculation of a 
            given student to a particular course or program, the management of 
            diferent types of assignments soch as examns, forums, homeworks and others. 
            inside the platform the studens can upload and download files,  
            for the resolution of their assignments and many other operations.`,

            `The administration system allows us to have full control over all the operations that 
            can be done inside the system. We can add studens, and professors, we can create diferents 
            types of education programs and courses and add groups to them an then add students 
            to those groups, we can move studens from one group to another an so forth.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "JQuery", icon: Images.tecnologies.jquery_icon, type: "image" },
            { name: "ASP.NET", icon: Images.tecnologies.asp_icon, type:"image" },
            { name: "C#", icon: Images.tecnologies.c_icon, type: "image" },
            { name: "Entity Framework", icon: Images.tecnologies.ef_icon, type: "image" },
            { name: "SendGrid", icon: Images.tecnologies.sendgrid_icon, type: "image" },
            { name: "SignalR", icon: Images.tecnologies.signalr_icon, type: "image" },
            { name: "SQL Server", icon: Images.tecnologies.sql_icon, type: "image" },
        ],
        references: [
            {
                name:"Flabia Yannet",
                title:"Project Owner",
                phone:"829-222-3323",
                icon: "ri-phone-fill",
            }
        ],
        liveInfo: [],
        galery: [
            {
                img:Images.projects.growing.img_1,
                page: "Home Page", // name of the page
                project: "Growing Business School", // name of the project
                description: "Home page of the website of growing business school",
                id: 1,
            },
            {
                img:Images.projects.growing.img_2,
                page: "Academic Offer", // name of the page
                project: "Growing Business School", // name of the project
                description: "academic offer, on this page the user finds all the educational offers of the institution",
                id: 2,
            },
            {
                img:Images.projects.growing?.img_3,
                page: "Student Platform Login Page", // name of the page
                project: "Growing Business School", // name of the project
                description: "On this screen, the user can log in to access the student platform.",
                id: 3,
            },
            {
                img:Images.projects.growing?.img_4,
                page: "Student Platform Home Page (As Student)", // name of the page
                project: "Growing Business School", // name of the project
                description: "This is the initial screen when entering as a student",
                id: 4,
            },
            {
                img:Images.projects.growing?.img_5,
                page: "Student Platform Profile Page (As Student)", // name of the page
                project: "Growing Business School", // name of the project
                description: "On this screen, the student can see his user profile, as well as the information related to the courses in which he is.",
                id: 5,
            },
            {
                img:Images.projects.growing?.img_6,
                page: "Student Platform Home Page (As Teacher)", // name of the page
                project: "Growing Business School", // name of the project
                description: "on this screen the teacher can see all the courses and programs in which he is participating",
                id: 6,
            },
            {
                img:Images.projects.growing?.img_7,
                page: "Student Platform Profile Page (As Teacher)", // name of the page
                project: "Growing Business School", // name of the project
                description: "On this screen, the teacher will be able to see their personal information as well as perform actions, such as modifying their profile photo, adding a comment about their work experience, changing their password, among other actions.",
                id: 7,
            },
            {
                img:Images.projects.growing?.img_8,
                page: "Administration Page (Login Screen)", // name of the page
                project: "Growing Business School", // name of the project
                description: "This is the login screen to the system administration section.",
                id: 8,
            }
        ]
    }
}


/************************************
    [ Growing Spanish ]
************************************/

export const GrowingES: IProjectData =  {   
    id: 1,
    pin:true,
    title: "Growing Business School",
    highlighted:true,
    description: "En diciembre de 2021 fui contratado para trabajar en el desarrollo de una plataforma educativa.",
    date: "12 / 2020 | 04 / 2022",
    img:Images.projects.growing.cover,
    mainTechnologies: [
        { name: "JQuery", icon: Images.tecnologies.jquery_icon, type: "image" },
        { name: "C#", icon: Images.tecnologies.c_icon, type: "image" },
        { name: "ASP.NET", icon: Images.tecnologies.asp_icon, type:"image" },
    ],
    detail: {
        about:[
            `En diciembre de 2021 fui contratado como desarrollador de software para la 
            institución educativa Growing Business School para el desarrollo de una 
            plataforma educativa, una página web y un sistema de administración 
            en el cual la institución tendría un control total sobre todos los 
            demás sistemas.`,

            `Para el desarrollo de estas 3 aplicaciones, utilicé las tecnologías 
            enumeradas en la sección "tecnologías", pero básicamente la aplicación se 
            creó utilizando el marco ASP.NET Mvc con tecnología de RazorPages, 
            EntityFramework, Jquery, SQL Server y otros.`,
            
            `Dentro de las funcionalidades de las aplicaciones tenemos que en la plataforma 
            educativa podemos realizar diversas operaciones como la matriculación de un 
            determinado estudiante a un determinado curso o programa, la gestión de 
            diferentes tipos de tareas como exámenes, foros, tareas y otros. 
            dentro de la plataforma los alumnos pueden cargar y descargar archivos, 
            para la resolución de sus trabajos y muchas otras operaciones.`,

            `El sistema de administración nos permite tener un control total sobre todas 
            las operaciones que se pueden realizar dentro del sistema. Podemos 
            agregar estudiantes y profesores, podemos crear diferentes tipos de 
            programas educativos y cursos y agregarles grupos y luego agregar 
            estudiantes a esos grupos, podemos mover estudiantes de un 
            grupo a otro, etc.`

        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
            { name: "JQuery", icon: Images.tecnologies.jquery_icon, type: "image" },
            { name: "ASP.NET", icon: Images.tecnologies.asp_icon, type:"image" },
            { name: "C#", icon: Images.tecnologies.c_icon, type: "image" },
            { name: "Entity Framework", icon: Images.tecnologies.ef_icon, type: "image" },
            { name: "SendGrid", icon: Images.tecnologies.sendgrid_icon, type: "image" },
            { name: "SignalR", icon: Images.tecnologies.signalr_icon, type: "image" },
            { name: "SQL Server", icon: Images.tecnologies.sql_icon, type: "image" },
        ],
        references: [
            {
                name:"Flabia Yannet",
                title:"Project Owner",
                phone:"829-222-3323",
                icon: "ri-phone-fill",
            }
        ],
        liveInfo: [],
        galery: [
            {
                img:Images.projects.growing.img_1,
                page: "Página de Inicio", // name of the page
                project: "Growing Business School", // name of the project
                description: "Página de inicio del sitio web de la escuela de negocios en crecimiento",
                id: 1,
            },
            {
                img:Images.projects.growing.img_2,
                page: "Oferta Académica", // name of the page
                project: "Growing Business School", // name of the project
                description: "oferta académica, en esta página el usuario encuentra toda la oferta educativa de la institución.",
                id: 2,
            },
            {
                img:Images.projects.growing?.img_3,
                page: "Plataforma Estudiantil (Inicio de Sesión)", // name of the page
                project: "Growing Business School", // name of the project
                description: "En esta pantalla, el usuario puede iniciar sesión para acceder a la plataforma de estudiantes.",
                id: 3,
            },
            {
                img:Images.projects.growing?.img_4,
                page: "Plataforma Estudiantil Página de Inicio (Como Estudiante)", // name of the page
                project: "Growing Business School", // name of the project
                description: "Esta es la pantalla inicial al ingresar como alumno",
                id: 4,
            },
            {
                img:Images.projects.growing?.img_5,
                page: "Plataforma Estudiantil Página de Perfil (Como Estudiante)", // name of the page
                project: "Growing Business School", // name of the project
                description: "En esta pantalla, el alumno puede ver su perfil de usuario, así como la información relacionada con los cursos en los que se encuentra.",
                id: 5,
            },
            {
                img:Images.projects.growing?.img_6,
                page: "Plataforma Estudiantil Página de inicio (Como Profesor)", // name of the page
                project: "Growing Business School", // name of the project
                description: "En esta pantalla el profesor puede ver todos los cursos y programas en los que está participando",
                id: 6,
            },
            {
                img:Images.projects.growing?.img_7,
                page: "Plataforma Estudiantil Página de Perfil (Como Profesor)", // name of the page
                project: "Growing Business School", // name of the project
                description: "En esta pantalla, el docente podrá ver su información personal así como realizar acciones, como modificar su foto de perfil, agregar un comentario sobre su experiencia laboral, cambiar su contraseña, entre otras acciones.",
                id: 7,
            },
            {
                img:Images.projects.growing?.img_8,
                page: "Plataforma de Administración (Inicio de Sessión)", // name of the page
                project: "Growing Business School", // name of the project
                description: "Esta es la pantalla de ingreso a la sección de administración del sistema.",
                id: 8,
            }
        ]
    }
}