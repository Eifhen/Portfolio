import { Images } from "../../../assets/img/images";
import { IProjectData } from "../project.data.interfaces";


/************************************
  [ WriteLine English ]
*************************************/
export const WriteLineEN: IProjectData = {
  id: 16,
  title: "WriteLine",
  description: "Messaging app made with React JS, Express JS, MongoDB, Mongoose JS and Socket.io",
  img: Images.projects.writeline.cover,
  date: "20 / 02 / 2024",
  highlighted: true,
  pin: true,
  mainTechnologies: [
    { name: "ExpressJS", icon: Images.tecnologies.express_js_icon, type: "image" },
    { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
    { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
  ],
  detail: {
    about: [
      `Messaging app with socket.io, express, and React. The reason I decided to make this app was to practice 
      my skills with Node.js and React. It ended up being a great learning experience as I was able to 
      improve my knowledge of websockets and non-relational databases like MongoDB.`,

      `The application features various functionalities, such as user registration, image management through the services 
      provided by the cloudinary API, authentication, real-time messaging via websockets, 
      creation of group chat/rooms, among other features.`
    ],
    technologies:  [
      { name: "MongooseJS", icon: Images.tecnologies.mongoose_icon, type: "image" },
      { name: "ExpressJS", icon: Images.tecnologies.express_js_icon, type: "image" },
      { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
      { name: "Socket.IO", icon: Images.tecnologies.socket_io_icon, type: "image" },
      { name: "NodeJS", icon: Images.tecnologies.nodejs_icon, type: "image" },
      { name: "TypeScript", icon: Images.tecnologies.typescript_icon, type: "image" },
      { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
      { name: "Cloudinary", icon: Images.tecnologies.cloudinary_icon, type: "image" }
    ],
    references: [],
    liveInfo: [
      {
        nombre: "Github",
        icon: "ri-github-fill",
        link: "https://github.com/Eifhen/WriteLine",
        type: "icon",
      },
      {
        nombre: "Live",
        icon: "live-demo",
        link: "https://writeline.onrender.com/home",
        type: "icon",
      }
    ],
    galery: [
      {
        img:Images.projects.writeline.cover,
        page: "Main Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Main page, from there we can move to the registration or login screens",
        id: 1,
      },
      {
        img:Images.projects.writeline.img_1,
        page: "Signup Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Registration screen, through this screen we will register our data in WriteLine",
        id: 2,
      },
      {
        img:Images.projects.writeline.img_2,
        page: "Signup Page", // name of the page
        project: "WriteLine", // name of the project
        description: "This would be the appearance of the screen if the form is filled",
        id: 3,
      },
      {
        img:Images.projects.writeline.img_3,
        page: "Login Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Login screen, from this screen we authenticate our user to access the application.",
        id: 4,
      },
      {
        img:Images.projects.writeline.img_4,
        page: "Chat Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Chat page",
        id: 5,
      },
      {
        img:Images.projects.writeline.img_5,
        page: "Chat Page | Searching friends", // name of the page
        project: "WriteLine", // name of the project
        description: `From the chat screen, if we enter the contact bar and enter the command @all, we will 
                      get a list of all registered users.`,
        id: 6,
      },
      {
        img:Images.projects.writeline.img_6,
        page: "Chat Page | Chating", // name of the page
        project: "WriteLine", // name of the project
        description: "From the chat screen we can chat with our friends and send fun emojis.",
        id: 7,
      },
      {
        img:Images.projects.writeline.img_7,
        page: "Chat Page | User Config", // name of the page
        project: "WriteLine", // name of the project
        description: "From the chat screen we can configure our user, changing our name or profile photo",
        id: 8,
      },
      {
        img:Images.projects.writeline.img_8,
        page: "Chat Page | Password Config", // name of the page
        project: "WriteLine", // name of the project
        description: "From the chat screen we can configure our password",
        id: 9,
      },
      {
        img:Images.projects.writeline.img_9,
        page: "Chat Page | Profile", // name of the page
        project: "WriteLine", // name of the project
        description: "From the chat screen we can see a person's profile by clicking on their name.",
        id: 10,
      },
      {
        img:Images.projects.writeline.img_10,
        page: "Chat Page | New Group", // name of the page
        project: "WriteLine", // name of the project
        description: "From the chat screen we can create groups and add our friends",
        id: 11,
      },
      {
        img:Images.projects.writeline.img_11,
        page: "Chat Page | Group Panel", // name of the page
        project: "WriteLine", // name of the project
        description: "Group Chat Appearance",
        id: 12,
      },
      {
        img:Images.projects.writeline.img_12,
        page: "Chat Page | Group Info", // name of the page
        project: "WriteLine", // name of the project
        description: "From the chat screen we can see the information of a certain group by clicking on the group name",
        id: 13,
      },
      {
        img:Images.projects.writeline.img_13,
        page: "Chat Page | Add contact to group", // name of the page
        project: "WriteLine", // name of the project
        description: "From the group modal we can add new members by clicking the add members button",
        id: 14,
      },
      {
        img:Images.projects.writeline.img_14,
        page: "Chat Page | Logout", // name of the page
        project: "WriteLine", // name of the project
        description: "Logout modal",
        id: 15,
      },
      {
        img:Images.projects.writeline.img_15,
        page: "Error 404", // name of the page
        project: "WriteLine", // name of the project
        description: "404 error screen in case any navigation error occurs",
        id: 16,
      },
    ],
  }
}


/************************************
  [ WriteLine Spanish ]
*************************************/
export const WriteLineES: IProjectData = {
  id: 16,
  title: "WriteLine",
  description: "App de mensajería hecha con React JS, Express JS, MongoDB, Mongoose JS y Socket.io",
  img: Images.projects.writeline.cover,
  date: "20 / 02 / 2024",
  highlighted: true,
  pin: true,
  mainTechnologies: [
    { name: "ExpressJS", icon: Images.tecnologies.express_js_icon, type: "image" },
    { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
    { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
  ],
  detail: {
    about: [
      `App de mensajería con socket.io, express y react, la razón por la que decidí hacer 
      esta app fue para practicar mis habilidades con nodejs y react, terminó siendo una experiencia
      de gran aprendizaje, ya que pude perfeccionar mis conocimientos acerca de websockets y bases de datos
      no relacionales como MongoDB.`,

      `La aplicación cuenta con varias funcionalidades, tales como el registro de usuarios, el manejo de imágenes mediante 
      los servicios prestados por parte de la API de cloudinary, autenticación, envío de mensajes en tiempo real 
      mediante websockets, creación salas/chats grupales, entre otras características.`
    ],
    technologies:  [
      { name: "MongooseJS", icon: Images.tecnologies.mongoose_icon, type: "image" },
      { name: "ExpressJS", icon: Images.tecnologies.express_js_icon, type: "image" },
      { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
      { name: "Socket.IO", icon: Images.tecnologies.socket_io_icon, type: "image" },
      { name: "NodeJS", icon: Images.tecnologies.nodejs_icon, type: "image" },
      { name: "TypeScript", icon: Images.tecnologies.typescript_icon, type: "image" },
      { name: "React", icon: "ri-reactjs-fill color-react", type: "icon" },
      { name: "Cloudinary", icon: Images.tecnologies.cloudinary_icon, type: "image" }
    ],
    references: [],
    liveInfo: [
      {
        nombre: "Github",
        icon: "ri-github-fill",
        link: "https://github.com/Eifhen/WriteLine",
        type: "icon",
      },
      {
        nombre: "Live",
        icon: "live-demo",
        link: "https://writeline.onrender.com/home",
        type: "icon",
      }
    ],
    galery: [
      {
        img:Images.projects.writeline.cover,
        page: "Main Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Página principal, desde ella podemos movilizarnos hacia las pantallas de registro o de login",
        id: 1,
      },
      {
        img:Images.projects.writeline.img_1,
        page: "Signup Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Pantalla de registro, mediante esta pantalla registraremos nuestros datos en WriteLine",
        id: 2,
      },
      {
        img:Images.projects.writeline.img_2,
        page: "Signup Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Esta sería la apariencia de la pantalla si el formulario está lleno",
        id: 3,
      },
      {
        img:Images.projects.writeline.img_3,
        page: "Login Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Pantalla de inicio de sesión, desde esta pantalla autenticamos a nuestro usuario para poder acceder a la aplicación.",
        id: 4,
      },
      {
        img:Images.projects.writeline.img_4,
        page: "Chat Page", // name of the page
        project: "WriteLine", // name of the project
        description: "Pantalla de chat.",
        id: 5,
      },
      {
        img:Images.projects.writeline.img_5,
        page: "Chat Page | Buscando Amigos", // name of the page
        project: "WriteLine", // name of the project
        description: `Desde la pantalla de chat si ingresamos en la barra de contacto e 
                      ingresamos el comando @all nos saldrá una lista de todos los usuarios registrados.`,
        id: 6,
      },
      {
        img:Images.projects.writeline.img_6,
        page: "Chat Page | Chateando", // name of the page
        project: "WriteLine", // name of the project
        description: "Desde la pantalla de chat podemos chatear con nuestros amigos y enviar divertidos emojis.",
        id: 7,
      },
      {
        img:Images.projects.writeline.img_7,
        page: "Chat Page | Configuración usuario", // name of the page
        project: "WriteLine", // name of the project
        description: "Desde la pantalla de chat podemos configurar nuestro usuario, cambiando nuestro nombre o foto de perfil",
        id: 8,
      },
      {
        img:Images.projects.writeline.img_8,
        page: "Chat Page | Configuración contraseña", // name of the page
        project: "WriteLine", // name of the project
        description: "Desde la pantalla de chat podemos configurar nuestra contraseña",
        id: 9,
      },
      {
        img:Images.projects.writeline.img_9,
        page: "Chat Page | Perfil", // name of the page
        project: "WriteLine", // name of the project
        description: "Desde la pantalla de chat podemos ver el perfil de una persona dando click en su nombre.",
        id: 10,
      },
      {
        img:Images.projects.writeline.img_10,
        page: "Chat Page | Nuevo Grupo", // name of the page
        project: "WriteLine", // name of the project
        description: "Desde la pantalla de chat podemos crear grupos y añadir a nuestros amigos",
        id: 11,
      },
      {
        img:Images.projects.writeline.img_11,
        page: "Chat Page | Panel de grupos", // name of the page
        project: "WriteLine", // name of the project
        description: "Apariencia del chat grupal",
        id: 12,
      },
      {
        img:Images.projects.writeline.img_12,
        page: "Chat Page | Información del grupo", // name of the page
        project: "WriteLine", // name of the project
        description: "Desde la pantalla de chat podemos ver la información de un determinado grupo al dar click en el nombre del grupo",
        id: 13,
      },
      {
        img:Images.projects.writeline.img_13,
        page: "Chat Page | Agregar contacto al grupo", // name of the page
        project: "WriteLine", // name of the project
        description: "Desde el modal de grupo podemos agregar nuevos miembros al pulsar el botón de añadir miembros",
        id: 14,
      },
      {
        img:Images.projects.writeline.img_14,
        page: "Chat Page | Cerrar sesión", // name of the page
        project: "WriteLine", // name of the project
        description: "Modal de cerrar sesión",
        id: 15,
      },
      {
        img:Images.projects.writeline.img_15,
        page: "Error 404", // name of the page
        project: "WriteLine", // name of the project
        description: "Pantalla de error 404 en el caso de que ocurra algún error de navegación",
        id: 16,
      },
    ],
  }
}

