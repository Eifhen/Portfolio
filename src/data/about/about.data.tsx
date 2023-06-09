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
    date: string;
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
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud.`,
            ],
            offerts: [
                {
                    title: "Good Design",
                    icon: "ri-palette-fill",
                },
                {
                    title: "Fine Tuning",
                    icon: "ri-compasses-2-line",
                },
                {
                    title: "Save Time",
                    icon: "ri-timer-2-line"
                }
            ]
            
        },

        education: {
            title: "Education",
            subtitle: "My Journey So Far",
            items: [
                {
                    date: "2016 - 2019",
                    title: "Technologist in Software Development",
                    subtitle: "Instituto Tecnológico las Américas (ITLA)",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`,
                    assets: {
                        img: Images.curriculumn.education.cover,
                        link: "https://itla.edu.do",
                    },
                },
                {
                    date: "2016 - 2019",
                    title: "Technologist in Software Development",
                    subtitle: "Instituto Tecnológico las Américas (ITLA)",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`,
                    assets: {
                        img: Images.curriculumn.education.cover,
                        link: "https://itla.edu.do",
                    },
                },
                {
                    date: "2016 - 2019",
                    title: "Technologist in Software Development",
                    subtitle: "Instituto Tecnológico las Américas (ITLA)",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`,
                    assets: {
                        img: Images.curriculumn.education.cover,
                        link: "https://itla.edu.do",
                    },
                },
            ]
        },

        workExpirience: {
            title: "Working Experience",
            subtitle: "My Journey So Far",
            items: [
                {
                    date: "09-2019",
                    title: "Web developer internship",
                    subtitle: "Lancer Group",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`,
                    assets: {
                        img: "#",
                        link: "https://lancergroup.org",
                    }
                }
            ]
        },

        portfolio: {
            description: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud.`,

                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud.`,
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
            pageTitle: "Acerca de mi",
            subtitle: "Por qué contratarme para tu",
            title: "Próximo Proyecto",

            description: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud.`,
            ],

            offerts: [
                {
                    title: "Buen Diseño",
                    icon: "ri-palette-fill",
                },
                {
                    title: "Ajuste Fino",
                    icon: "ri-compasses-2-line",
                },
                {
                    title: "Tiempo",
                    icon: "ri-timer-2-line"
                }
            ]
            
        },

        education: {
            title: "Educación",
            subtitle: "Mi viaje hasta ahora.",
            items: [
                {
                    date: "2016 - 2019",
                    title: "Technologo en Desarrollo de Software",
                    subtitle: "Instituto Tecnológico las Américas (ITLA)",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`,
                    assets: {
                        img: Images.curriculumn.education.cover,
                        link: "https://itla.edu.do",
                    },
                }
            ]
        },

        workExpirience: {
            title: "Experiencia de Trabajo",
            subtitle: "Mi viaje hasta ahora.",
            items: [
                {
                    date: "09-2019",
                    title: "Pasantía Desarrollo Web",
                    subtitle: "Lancer Group",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`,
                    assets: {
                        img: "#",
                        link: "https://lancergroup.org",
                    },
                }
            ]
        },

        portfolio: {
            description: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud.`,

                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud.`,
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