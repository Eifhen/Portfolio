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
                    I'm a passionate software developer with great attention to detail. 
                    I offer quality solutions that fit your needs, thus providing software 
                    solutions that have a friendly design and a fine tuning in 
                    each of its features.
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
                I developed this portfolio in my free time, in a period of 3 months,
                The process was divided into 4 stages, the first stage consisted of the
                portfolio planning, for this stage I defined which screens
                the portfolio would be composed of and what type of information should be displayed in them.
            `,

            `
                The second stage consisted of the graphic design of the portfolio.
                For this I used figma, at this stage I designed each of the portfolio screens,
                both in its mobile version and in its desktop version.
            `,

            `
                For the third stage I worked on the development of each of the components
                Individuals that appear in the portfolio: the different modals (pop-up windows)
                that appear, the navbar, the footer, the structure and behavior of the day and night modes,
                as well as the operation of the language change within the application,
                everything was developed from scratch.
               
                For the fourth stage I integrated the components and functionalities that I created in stage three.
            `,
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
                    link: "https://www.figma.com/proto/wImSICR5whpii9ZkQZihZe/Portafolio-2?page-id=0%3A1&node-id=139-1850&starting-point-node-id=23%3A770",
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
                `Soy un desarrollador de software apasionado y con alta atención a los detalles. 
                Ofrezco soluciones de calidad que se acoplan a tus necesidades, proveyendo así 
                soluciones de software que cuentan con un diseño amigable al usuario y un 
                ajuste fino y detallado en cada una de sus características.`,
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
                    Desarrollé este portafolio en mi tiempo libre, en un periodo de tiempo de 3 meses, 
                    el proceso fue dividido en 4 etapas, la primera etapa consistió en la 
                    planificación del portafolio, para esta etapa definí de cuáles pantallas 
                    estaría compuesto el portafolio y qué tipo de información debía mostrar en ellas.
                `,

                `
                    La segunda etapa consistió en el diseño gráfico del portafolio. 
                    Para esto utilicé figma, en esta etapa diseñé cada una de las pantallas del portafolio, 
                    tanto en su versión móvil como en su versión desktop.
                `,

                `
                    Para la tercera etapa trabajé en el desarrollo de cada uno de los componentes 
                    individuales que aparecen en el portafolio: los diferentes modals (ventanas emergentes) 
                    que aparecen, el navbar, el footer, la estructura y comportamiento de los modos día y noche, 
                    así como también el funcionamiento del cambio de idioma al interior de la aplicación, 
                    todo fue desarrollado desde cero. 
                    
                    Para la cuerta etapa integré los componentes y funcionalidades que creé en la etapa tres. 
                `,
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
                    link: "https://www.figma.com/proto/wImSICR5whpii9ZkQZihZe/Portafolio-2?page-id=0%3A1&node-id=139-1850&starting-point-node-id=23%3A770",
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