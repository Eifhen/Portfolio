import { Images } from "../../../assets/img/images"
import { IProjectData } from "../project.data.interfaces"


/************************************
    [ Find Your Film English ]
*************************************/
export const FindYourFilmEN: IProjectData = {
    id:5,
    pin:true,
    title: "Find Your Film",
    description: "This is an application to search for movies that interest us and store them in a list.",
    date: "06 / 10 / 2022",
    img:Images.projects.find_your_film.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
            `In this application you can create a list of movies to watch. In the search engine 
            you can search for any movie and add it to your watchlist.`,

            `This application makes a request to the API http://www.omdbapi.com to retrieve the data of the movies we are looking for`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Find-your-film",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Find-your-film/index.html",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.find_your_film.cover,
                page: "Home Page", // name of the page
                project: "Find Your Film", // name of the project
                description: "This is the main screen of the application, from it you can perform different operations such as: search for movies, add movies to your watchlist or clear the search.",
                id: 1,
            },
            {
                img:Images.projects.find_your_film.img_1,
                page: "Find Movies", // name of the page
                project: "Find Your Film", // name of the project
                description: "When searching for a movie, its information will appear below in the form of a card",
                id: 2,
            },
            {
                img:Images.projects.find_your_film.img_2,
                page: "Adding a movie to the Watchlist", // name of the page
                project: "Find Your Film", // name of the project
                description: "By clicking on the 'watchlist' button we can add a movie to our list.",
                id: 3,
            },
            {
                img:Images.projects.find_your_film.img_3,
                page: "Movie Added", // name of the page
                project: "Find Your Film", // name of the project
                description: "After adding the movie to the watchlist, a notification will appear indicating that the movie was added successfully and next to the 'watchlist' option, a counter will appear indicating the total number of movies we have added.",
                id: 4,
            },
            {
                img:Images.projects.find_your_film.img_4,
                page: "Watchlist Page", // name of the page
                project: "Find Your Film", // name of the project
                description: "By clicking on the watchlist option in the header we will be redirected to that screen, where we will find the list of movies we have selected.",
                id: 5,
            },
        ],
    }
}



/************************************
    [ Find Your Film Spanish ]
*************************************/
export const FindYourFilmES: IProjectData = {
    id:5,
    pin: true,
    title: "Find Your Film",
    description: "Esta es una aplicación para buscar las películas que nos interesan y almacenarlas en una lista.",
    date: "06 / 10 / 2022",
    img:Images.projects.find_your_film.cover,
    highlighted: true,
    mainTechnologies: [
        { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
        { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
        { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
    ],
    detail:{
        about: [                    
            `En esta aplicación podrás crear una lista de películas para ver, en el 
            buscador podrás buscar cualquier película y agregarla a tu watchlist.`,

            `Esta aplicación realiza una petición a la API http://www.omdbapi.com para 
            recuperar los datos de las películas que buscamos.`
        ],
        technologies: [
            { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
            { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
            { name: "JavaScript", icon: Images.tecnologies.javascript_icon, type:"image" },
        ],
        references: [],
        liveInfo: [
            {
                nombre: "Github",
                icon: "ri-github-fill",
                link: "https://github.com/Eifhen/Find-your-film",
                type: "icon",
            },
            {
                nombre: "Live",
                icon: "live-demo",
                link: "https://eifhen.github.io/Find-your-film/index.html",
                type: "icon",
            }
        ],
        galery: [
            {
                img:Images.projects.find_your_film.cover,
                page: "Página de Inicio", // name of the page
                project: "Find Your Film", // name of the project
                description: "Esta es la pantalla principal de la aplicación, desde ella puedes realizar diferentes operaciones como: buscar películas, agregar películas a tu lista de observación o borrar la búsqueda.",
                id: 1,
            },
            {
                img:Images.projects.find_your_film.img_1,
                page: "Buscar Películas", // name of the page
                project: "Find Your Film", // name of the project
                description: "Al buscar una película, su información aparecerá debajo en forma de tarjeta",
                id: 2,
            },
            {
                img:Images.projects.find_your_film.img_2,
                page: "Agregar Películas a la Watchlist", // name of the page
                project: "Find Your Film", // name of the project
                description: "Al hacer clic en el botón 'watchlist', podemos agregar una película a nuestra lista.",
                id: 3,
            },
            {
                img:Images.projects.find_your_film.img_3,
                page: "Película Agregada", // name of the page
                project: "Find Your Film", // name of the project
                description: "Luego de agregar la película a la watchlist, aparecerá una notificación indicando que la película se agregó con éxito y junto a la opción 'Watchlist', aparecerá un contador que indicará el número total de películas que hemos agregado.",
                id: 4,
            },
            {
                img:Images.projects.find_your_film.img_4,
                page: "Watchlist", // name of the page
                project: "Find Your Film", // name of the project
                description: "Al hacer clic en la opción de Watchlist desde el header de la página, seremos redirigidos a esa pantalla, donde encontraremos la lista de películas que hemos seleccionado.",
                id: 5,
            },
        ],
    }
}


