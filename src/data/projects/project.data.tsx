import { Images } from "../../assets/img/images";



export interface IProjectDataManager {
    EN:IProjectData[];
    ES:IProjectData[];
    [key:string]:IProjectData[];
}

export interface IProjectData {
    id: number;
    title: string;
    img:string;
    description:string;
    date: string;
    mainTechnologies:IProjectTechnologies[];
    detail:IProjectDetail;
    [key:string]:string | Object;
}

export interface IProjectDetail {
    about: string[];
    technologies: IProjectTechnologies[];
    references: IProjectReferences[];
    galery: IProjectGalery[];
    liveInfo: IProjectLiveInfo[];
    [key:string]:string | Object;
}

export interface IProjectTechnologies {
    name:string;
    icon:string;
    type: "image" | "icon";
}

export interface IProjectReferences {
    name:string;
    title:string;
    phone:string;
    icon:string;
}

export interface IProjectLiveInfo {
    nombre:string;
    icon:string;
    link: string;
    type: 'icon' | "image";
}

export interface IProjectGalery {
    img:string; // path of the image
    page:string; // name of the page
    project: string; // name of the project
    description: string; // description of the image
    id: number;
}


const obj:IProjectData = {
    id:0,
    title: "",
    description: "",
    date: "",
    img:"",
    mainTechnologies: [],
    detail:{
        about: [],
        technologies: [],
        references: [],
        galery: [],
        liveInfo: []
    }
}

export const ProjectData: IProjectDataManager = {
    EN: [
        {   
            id: 1,
            title: "Growing Business School",
            description: "In December 2021 I was hired to work on the development of an educational platform.",
            date: "12 / 2020 | 04 / 2022",
            img:Images.GrowingCampusPage,
            mainTechnologies: [
                { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
                { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
                { name: "C#", icon: Images.C_ICON, type: "image" },
                { name: "ASP.NET", icon: Images.ASP_ICON, type:"image" },
            ],
            detail: {
                about:[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                ],
                technologies: [
                    { name: "ASP.NET", icon: Images.ASP_ICON, type:"image" },
                    { name: "C#", icon: Images.C_ICON, type: "image" },
                    { name: "HTML", icon:"ri-html5-fill color-orange", type: "icon" },
                    { name: "CSS", icon: "ri-css3-fill color-blue", type: "icon" },
                    { name: "SendGrid", icon: Images.SENDGRID_ICON, type: "image" },
                    { name: "Entity Framework", icon: Images.EF_ICON, type: "image" },
                    { name: "JQuery", icon: Images.JQUERY_ICON, type: "image" },
                    { name: "SignalR", icon: Images.SIGNALR_ICON, type: "image" },
                    { name: "JavaScript", icon: "ri-javascript-fill color-yellow", type: "icon" }
                ],
                references: [
                    {
                        name:"Flabia Yannet",
                        title:"Project Owner",
                        phone:"829-222-3323",
                        icon: "ri-phone-fill",
                    }
                ],
                liveInfo: [
                    {
                        nombre: "Github",
                        icon: "ri-github-fill",
                        link: "#",
                        type: "icon",
                    },
                    {
                        nombre: "Live Demo",
                        icon: "live-demo",
                        link: "#",
                        type: "icon",
                    }
                ],
                galery: [
                    {
                        img:Images.GrowingHomePage,
                        page: "Home Page", // name of the page
                        project: "Growing Business School", // name of the project
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        id: 1,
                    },
                    {
                        img:Images.GrowingHomePage2,
                        page: "Home Page", // name of the page
                        project: "Growing Business School", // name of the project
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        id: 2,
                    },
                    {
                        img:Images.GrowingEducationPage,
                        page: "Education Page", // name of the page
                        project: "Growing Business School", // name of the project
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        id: 3,
                    },
                    {
                        img:Images.GrowingCampusPage,
                        page: "Campus Page", // name of the page
                        project: "Growing Business School", // name of the project
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        id: 4,
                    }
                ]
            }
        }
    ], 
    ES:[

    ],
}