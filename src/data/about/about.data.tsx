import { Images } from '../../assets/img/images';
import { curriculumn } from '../../assets/img/images.curriculumn';
export interface IAboutDataManagement {
    EN: IAboutData;
    ES: IAboutData;
    [key: string] : IAboutData;
}

export interface IAboutData {
    hero: IAboutHero;
    education: IEducationAndWork;
    workExpirience: IEducationAndWork;
    portfolio: IAboutPortfolioData;
}

export interface IAboutHero {
    pageTitle: string;
    title:string;
    subtitle:string;
    description: string[];
    offerts: IAboutHeroOffers[];
}

export interface IAboutHeroOffers {
    icon: string;
    title: string;
}

export interface IEducationAndWork {
    title:string;
    subtitle:string;
    items: IEducationAndWorkItems[];
}

export interface IEducationAndWorkItems {
    date: string[];
    title: string;
    subtitle: string;
    description: string;
    assets: IEducationAndWorkAssets;
}

export interface IEducationAndWorkAssets {
    img: string;
    link: string;
}

export interface IAboutPortfolioData {
    description: string[];
    technologies: IAboutPortfolioTechnologies[];
    links: IAboutPortfolioLinks[];
}

export interface IAboutPortfolioTechnologies {
    name:string;
    icon: string;
    type: "icon" | "img";
}

export interface IAboutPortfolioLinks {
    msg: string;
    type: "icon" | "img";
    icon:string;
    link: string;
}



export const AboutData:IAboutDataManagement = {
    EN:{
        hero: {
            pageTitle: "About Me",
            subtitle: "Why Hire Me For Your",
            title: "Next Project",
            description: [
                `
                    As a passionate software developer, I stand out for my meticulous attention 
                    to detail. My focus is on providing high-quality solutions that fit your 
                    requirements perfectly. My goal is to create software that is not only 
                    functional but also user-friendly, with a precise and detailed refinement 
                    in each of its features to deliver an exceptional experience.
                `,
            ],
            offerts: [
                {
                    title: `Good \nDesign`,
                    icon: "ri-palette-line",
                },
                {
                    title: `Fine \nTuning`,
                    icon: "ri-compasses-2-line",
                },
                {
                    title: `Save \nTime`,
                    icon: "ri-timer-2-line"
                }
            ]
            
        },

        education: {
            title: "Education",
            subtitle: "My Journey So Far",
            items: [
                // ITLA
                {
                    date: [`2016 - 2019`],
                    title: "Technologist in Software Development",
                    subtitle: "Instituto Tecnológico las Américas (ITLA)",
                    description: `
                        I am a graduate of the Las Americas Technological Institute, 
                        I took my subjects between 2016 and 2019. 
                        As a software development technician I am trained 
                        for the development and analysis of systems, development and analysis of databases, 
                        as well as for the development, analysis and software design.
                    `,
                    assets: {
                        img: Images.curriculumn.itla,
                        link: "https://itla.edu.do",
                    },
                },

                // Udemy ES6
                {
                    date: [`01/02/2022`,  `23/02/2022`],
                    title: "Modern JavaScript: A Guide to Mastering the Language",
                    subtitle: "Udemy",
                    description: `
                        Webpack, Classes, Private Properties, ESNext, Node, Npm, Babel, Hot Reload, CRUD, File Upload and more!
                    `,
                    assets: {
                        img: Images.curriculumn.es6,
                        link: "https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17854154#overview",
                    },
                },
                
                // Scrimba
                {
                    date: [`07/07/2022`,  `11/01/2023`],
                    title: "The Frontend Developer Career Path",
                    subtitle: "Scrimba",
                    description: `
                        The Front End Developer Career Path, is a software course made by 
                        the scrimba platform, the goal of the course is to teach you how to develop web 
                        applications with modern web technologies such as ReactJs, 
                        JavaScript ES6, HTML5, CSS3 and others
                    `,
                    assets: {
                        img: Images.curriculumn.scrimba,
                        link: "https://scrimba.com/learn/frontend",
                    },
                },
            ]
        },

        workExpirience: {
            title: "Working Experience",
            subtitle: "My Journey So Far",
            items: [
                {
                    date: [`01/09/2019`, `04/12/2019`],
                    title: "Web developer (Internship)",
                    subtitle: "Lancer Group",
                    description: `
                        In September 2019, I was an intern at Lancer Group. In this internship 
                        I worked on the development of an instance manager for the database of 
                        different projects of the company`,
                    assets: {
                        img: "#",
                        link: "https://lancergroup.org",
                    }
                },

                {
                    date: [`15/12/2020`, `08/02/2022`],
                    title: "Web Developer",
                    subtitle: "Growing Business School",
                    description: `
                        In December 2021 I was hired to work on the development of a website, 
                        an educational platform and a management system (cms) for the 
                        processes related to the website and the educational platform.
                    `,
                    assets: {
                        img: "#",
                        link: "/projects/detail/1/Growing-Business-School",
                    }
                },

                {
                    date: [`18/10/2022`, `Currently ..`],
                    title: "System Engineer Jr.",
                    subtitle: "Camsoft SRL",
                    description: `
                        Currently, I work as a Jr. Software Engineer for Camsoft SRL, 
                        I work in the development of Software for the company, 
                        using technologies such as ASP.Net Core, SQL, Server ReactJS, 
                        Developer Extreme, SAS, among others.
                    `,
                    assets: {
                        img: "#",
                        link: "https://camsoft.com.do",
                    }
                }
            ]
        },

        portfolio: {
            description: [
            `
                I developed this portfolio in my free time over a period of 3 months. 
                The process was divided into 4 stages. The first stage involved planning 
                the portfolio, where I defined the screens that would compose 
                the portfolio and the type of information they should display.
            `,

            `
                The second stage consisted of the graphic design of the portfolio. 
                I used Figma for this stage, where I designed each of the portfolio 
                screens from scratch, both for mobile and desktop versions. 
                I did not use any templates for any of the screens or components. 
                The design of all the components and screens was created from my 
                own imagination.
            `,

            `
                For the third stage, I worked on developing each of the individual 
                components that appear in the portfolio: the different modals, 
                the navbar, the footer, the structure and behavior of the light 
                and dark modes, as well as the functionality of language switching 
                within the application. Everything was developed from scratch.                
            `,

            `
                For the fourth stage, I integrated the components and features that I created 
                in stage three and gave the final adjustments to the application.
            `
            ],
            technologies: [
                {
                    name: "HTML",
                    type: "icon",
                    icon: "ri-html5-fill color-orange",
                },
                {
                    name: "CSS",
                    type: "icon",
                    icon: "ri-css3-fill color-blue"
                },
                {
                    name: "SolidJS",
                    type: "img",
                    icon: Images.tecnologies.solidjs_icon
                },
                {
                    name: "TypeScript",
                    type: "img",
                    icon: Images.tecnologies.typescript_icon
                },
                {
                    name: "JavaScript",
                    type: "img",
                    icon: Images.tecnologies.javascript_icon
                },
                {
                    name: "GitHub",
                    type: "icon",
                    icon: "ri-github-fill"
                },
            ],
            links: [
                {
                    msg: "See in Figma",
                    type: "img",
                    icon: Images.tecnologies.figma_icon,
                    link: "https://www.figma.com/proto/wImSICR5whpii9ZkQZihZe/Portafolio-2?type=design&node-id=1258-2116&t=3xjSth9ek1zeRjJZ-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1258%3A2116",
                },
                {
                    msg: "See on Github",
                    type: "icon",
                    icon: "ri-github-fill",
                    link: "https://github.com/Eifhen/Portfolio"
                }
            ]
        }
    },

    ES: {
        hero: {
            pageTitle: "Acerca de mí",
            subtitle: "Por qué contratarme para tu",
            title: "Próximo Proyecto",

            description: [
                `Como apasionado desarrollador, destaco por mi atención meticulosa a los detalles. 
                Ofrezco soluciones de alta calidad, adaptadas a tus necesidades,
                con un diseño amigable y un ajuste detallado en cada característica. 
                El objetivo es una experiencia excepcional.`,
            ],

            offerts: [
                {
                    title: `Buen \nDiseño`,
                    icon: "ri-palette-line",
                },
                {
                    title: "Ajuste \nFino",
                    icon: "ri-compasses-2-line",
                },
                {
                    title: "Ahorra \nTiempo",
                    icon: "ri-timer-2-line"
                }
            ]
            
        },

        education: {
            title: "Educación",
            subtitle: "Mi viaje hasta ahora.",
            items: [
                // Itla
                {
                    date: [`2016 - 2019`],
                    title: "Technologo en Desarrollo de Software",
                    subtitle: "Instituto Tecnológico las Américas (ITLA)",
                    description: `
                        Soy un egresado del instituto tecnológico las Américas, 
                        cursé mis asignaturas entre los años 2016 y 2019. 
                        Como técnico en desarrollo de software estoy capacitado, 
                        para el desarrollo y análisis de sistemas, desarrollo y análisis de bases de datos, 
                        así como también para el desarrollo, análisis y diseño de software.
                    `,
                    assets: {
                        img: Images.curriculumn.itla,
                        link: "https://itla.edu.do",
                    },
                },

                // Udemy ES6
                {
                    date: [`01/02/2022`,  `23/02/2022`],
                    title: "JavaScript Moderno: Guía para dominar el lenguaje",
                    subtitle: "Udemy",
                    description: `
                        Webpack, Classes, Private Properties, ESNext, Node, Npm, Babel, Hot Reload, CRUD, File Upload y más
                    `,
                    assets: {
                        img: Images.curriculumn.es6,
                        link: "https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17854154#overview",
                    },
                },

                //Scrimba
                {
                    date: [`07/07/2022`,  `11/01/2023`],
                    title: "The Frontend Developer Career Path",
                    subtitle: "Scrimba",
                    description: `
                        La Carrera de Desarrollador Front End, es un curso de software hecho por
                        la plataforma scrimba, el objetivo del curso es enseñarte a desarrollar 
                        aplicaciones web con tecnologías web modernas como ReactJs,
                        JavaScript ES6, HTML5, CSS3 y otros
                    `,
                    assets: {
                        img: Images.curriculumn.scrimba,
                        link: "https://scrimba.com/learn/frontend",
                    },
                },

               
            ]
        },

        workExpirience: {
            title: "Experiencia de Trabajo",
            subtitle: "Mi viaje hasta ahora.",
            items: [
                {
                    date: [`01/09/2019`, `04/12/2019`],
                    title: "Pasantía Desarrollo Web",
                    subtitle: "Lancer Group",
                    description: `
                        En septiembre de 2019, fui pasante en Lancer Group. En esta pasantía trabajé 
                        en el desarrollo de un administrador de instancias para la base de datos 
                        de diferentes proyectos de la empresa.
                    `,
                    assets: {
                        img: "#",
                        link: "https://lancergroup.org",
                    },
                },

                {
                    date: [`01/09/2019`, `04/12/2019`],
                    title: "Desarrollador Web",
                    subtitle: "Growing Business School",
                    description: `
                       En diciembre de 2021 fui contratado para trabajar en el desarrollo de una 
                       página web, una plataforma educativa y un sistema de administración (cms) 
                       para los procesos relacionados con la página web y la plataforma educativa.
                    `,
                    assets: {
                        img: "#",
                        link: "#",
                    },
                },

                {
                    date: [`18/10/2022`, `Currently ..`],
                    title: "System Engineer Jr.",
                    subtitle: "Camsoft SRL",
                    description: `
                        Actualmente, trabajo como Ingeniero de Software Jr. para Camsoft SRL, 
                        trabajo en el desarrollo de Software para la empresa, mediante 
                        tecnologías como ASP.Net Core, SQL, Server ReactJS, 
                        Developer Extreme, SAS, entre otras.
                    `,
                    assets: {
                        img: "#",
                        link: "https://camsoft.com.do",
                    }
                }

            ]
        },

        portfolio: {
            description: [
                `
                    Desarrollé este portafolio durante mi tiempo libre, 
                    en un periodo de 3 meses. El proceso se dividió en 4 etapas. 
                    En la primera etapa, me enfoqué en la planificación del portafolio, 
                    donde definí las pantallas que compondrían el portafolio y qué tipo
                    de información deberían mostrar.
                `,

                `
                    En la segunda etapa, me enfoqué en el diseño gráfico del portafolio. 
                    Para ello, utilicé Figma y diseñé cada una de las pantallas del 
                    portafolio desde cero, tanto en su versión móvil como en su versión
                    de escritorio. No utilicé plantillas en ninguna de las pantallas 
                    ni en ninguno de los componentes. Todo el diseño de los 
                    componentes y pantallas fue creado por mí, basado en mi 
                    propia imaginación.
                `,

                `
                    En la tercera etapa, me enfoqué en el desarrollo de cada uno de los 
                    componentes individuales que se muestran en el portafolio. 
                    Esto incluye los diferentes modales (ventanas emergentes), 
                    la barra de navegación (navbar), el pie de página (footer), 
                    la estructura y el comportamiento de los modos claro y oscuro, 
                    así como la funcionalidad de cambio de idioma dentro de la aplicación. 
                    Todo fue desarrollado desde cero.
                `,

                `
                    Para la cuarta etapa integré los componentes y funcionalidades 
                    que creé en la etapa tres y di los ajustes finales a la aplicación. 
                `
            ],
            
            technologies: [
                {
                    name: "HTML",
                    type: "icon",
                    icon: "ri-html5-fill color-orange",
                },
                {
                    name: "CSS",
                    type: "icon",
                    icon: "ri-css3-fill color-blue"
                },
                {
                    name: "SolidJS",
                    type: "img",
                    icon: Images.tecnologies.solidjs_icon
                },
                {
                    name: "TypeScript",
                    type: "img",
                    icon: Images.tecnologies.typescript_icon
                },
                {
                    name: "JavaScript",
                    type: "img",
                    icon: Images.tecnologies.javascript_icon
                },
                {
                    name: "GitHub",
                    type: "icon",
                    icon: "ri-github-fill"
                },
            ],
            
            links: [
                {
                    msg: "Ver en Figma",
                    type: "img",
                    icon: Images.tecnologies.figma_icon,
                    link: "https://www.figma.com/proto/wImSICR5whpii9ZkQZihZe/Portafolio-2?type=design&node-id=1258-2116&t=3xjSth9ek1zeRjJZ-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1258%3A2116",
                },
                {
                    msg: "Ver en Github",
                    type: "icon",
                    icon: "ri-github-fill",
                    link: "https://github.com/Eifhen/Portfolio",
                }
            ]
        },

      
    }
}