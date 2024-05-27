




/************************************
    [ Camsoft03 English ]
*************************************/

import { Images } from "../../../assets/img/images";
import { IProjectData } from "../project.data.interfaces";

export const cleanAPIEN: IProjectData = {
  id: 17,
  title: "Clean API",
  img: Images.projects.cleanAPI.cover,
  date: "27 / 05 / 2024",
  highlighted: true,
  pin: true,
  description: "Test API to put the principles of Clean Architecture into practice",
  mainTechnologies: [
    { name: "NodeJS", icon: Images.tecnologies.nodejs_icon, type: "image" },
    { name: "TypeScript", icon: Images.tecnologies.typescript_icon, type: "image" },
    { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
  ],
  detail: {
    about: [
      `The API has the following maintenance:`,
      `- User maintenance: List users, Add, Edit and Delete users.`,
      `- Brand maintenance: List brands, add, edit and delete brands.`,
      `- Sales maintenance: List sales, add, edit and delete sales.`,
      `- Sales detail maintenance: List sales detail, add, edit and delete sales detail.`,
      `\n`,
      `The API has functionalities for handling errors which are written in a text file in order to have a record 
      of them (see ErrorHandler and ErrorManager class) and the logging of all the operations 
      that are carried out, the API also has generic repositories, transactions for write 
      operations in mongodb, data pagination, authentication, 
      management of environment variables and much more.`
    ],
    technologies:[
      { name: "NodeJS", icon: Images.tecnologies.nodejs_icon, type: "image" },
      { name: "TypeScript", icon: Images.tecnologies.typescript_icon, type: "image" },
      { name: "ExpressJS", icon: Images.tecnologies.express_js_icon, type: "image" },
      { name: "MongooseJS", icon: Images.tecnologies.mongoose_icon, type: "image" },
      { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
      { name: "Awilix", icon:"ri-window-fill", type: "icon"},
      { name: "Awilix-Express", icon: "ri-window-fill", type: "icon"},
    ],
    references: [],
    liveInfo: [
      {
        nombre: "Github",
        icon: "ri-github-fill",
        link: "https://github.com/Eifhen/Clean-API",
        type: "icon",
      },
    ],
    galery: [
      {
        img:Images.projects.cleanAPI.cover,
        page: "Clean API", // name of the page
        project: "Clean API", // name of the project
        description: "",
        id: 1,
      },
    ],
  }
}


/************************************
    [ Camsoft03 Spanish ]
*************************************/

export const cleanAPIES: IProjectData = {
  id: 17,
  title: "Clean API",
  img: Images.projects.cleanAPI.cover,
  date: "27 / 05 / 2024",
  highlighted: true,
  pin: true,
  description: "Test API para poner en práctica los principios de la Clean Arquitecture",
  mainTechnologies: [
    { name: "NodeJS", icon: Images.tecnologies.nodejs_icon, type: "image" },
    { name: "TypeScript", icon: Images.tecnologies.typescript_icon, type: "image" },
    { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
  ],
  detail: {
    about: [
      `La API cuenta con los siguientes mantenimientos:`,
      `- Mantenimiento de usuarios: Listar usuarios, Agregar, Editar y Eliminar usuarios.`,
      `- Mantenimiento de marcas: Listar marcas, agregar, editar y eliminar marcas.`,
      `- Mantenimiento de ventas: Listar ventas, agregar, editar y eliminar ventas.`,
      `- Mantenimiento detalle de venta: Listar, agregar, editar y eliminar el detalle de venta.`,
      `\n`,
      `La API cuenta con funcionalidades para el manejo de errores los cuales se escriben en un 
      fichero de texto para poder tener un registro de los mismos ( ver clase ErrorHandler y ErrorManager ) y 
      el logeo de todas las operaciones que se realizan, la API también cuenta con repositorios genéricos, 
      transacciones para las operaciones de escritura en mongodb, paginación de la data, autenticación, 
      manejo de variables de entorno y mucho más.`
    ],
    technologies:[
      { name: "NodeJS", icon: Images.tecnologies.nodejs_icon, type: "image" },
      { name: "TypeScript", icon: Images.tecnologies.typescript_icon, type: "image" },
      { name: "ExpressJS", icon: Images.tecnologies.express_js_icon, type: "image" },
      { name: "MongooseJS", icon: Images.tecnologies.mongoose_icon, type: "image" },
      { name: "MongoDB", icon: Images.tecnologies.mongodb_icon, type: "image" },
      { name: "Awilix", icon:"ri-window-fill", type: "icon"},
      { name: "Awilix-Express", icon: "ri-window-fill", type: "icon"},
    ],
    references: [],
    liveInfo: [
      {
        nombre: "Github",
        icon: "ri-github-fill",
        link: "https://github.com/Eifhen/Clean-API",
        type: "icon",
      },
    ],
    galery: [
      {
        img:Images.projects.cleanAPI.cover,
        page: "Clean API", // name of the page
        project: "Clean API", // name of the project
        description: "",
        id: 1,
      },
    ],
  }
}

