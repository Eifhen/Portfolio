import { Images } from "../../assets/img/images";




export interface ISkillsDataManager {
    ES: ISkillsData[];
    EN: ISkillsData[];
    [key:string]: ISkillsData[];
}

export interface ISkillsData {
    title: string;
    icon: string;
    list : ISkillData[];
}

export interface ISkillData {
    title: string;
    img: string;
    icon: string;
    type: "icon" | "img";
    description: string;
}


export const SkillsData: ISkillsDataManager = {

    ES: [
        {
            title: "Desarrollo Web",
            icon: "ri-code-s-slash-fill",
            list: [
                {
                    title: "HTML",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-html5-fill color-orange",
                    img: ""
                },
                {
                    title: "CSS",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-css3-fill color-blue",
                    img: ""
                },
                {
                    title: "Bootstrap",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-bootstrap-fill color-purple",
                    img: ""
                },
                {
                    title: "JavaScript",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.JavaScript
                },
                {
                    title: "TypeScript",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.TypeScript
                },
                {
                    title: "React",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-reactjs-line color-react",
                    img: ""
                },
                {
                    title: "SolidJS",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.Solidjs
                },
                {
                    title: "Jquery",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.JQUERY_ICON
                },
          
            ]
        },
        {
            title: "Desarrollo de API's",
            icon: "ri-database-2-fill",
            list: [
                {
                    title: "C#",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.C_ICON
                },
                {
                    title: "ASP.Net",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.ASP_ICON
                },
                {
                    title: "Entity Framework",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.EF_ICON
                },
                {
                    title: "SignalR.",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.SIGNALR_ICON
                },
                {
                    title: "SendGrid",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.SENDGRID_ICON
                },
                {
                    title: "PHP",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-github-fill",
                    img: Images.PHP
                },
                {
                    title: "SQL",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.SQL
                },
                {
                    title: "MySql",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.MySql
                },
                {
                    title: "Git",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-github-fill",
                    img: ""
                },        
            ]
        },
        {
            title: "Diseño Web",
            icon: "ri-palette-fill",
            list: [
                {
                    title: "Figma",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.FigmaBlack
                },
                {
                    title: "Canva",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.Canva
                },
            ]
        }

    ],
    EN: [
        {
            title: "Web Development",
            icon: "ri-code-s-slash-fill",
            list: [
                {
                    title: "HTML",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-html5-fill color-orange",
                    img: ""
                },
                {
                    title: "CSS",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-css3-fill color-blue",
                    img: ""
                },
                {
                    title: "Bootstrap",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-bootstrap-fill color-purple",
                    img: ""
                },
                {
                    title: "JavaScript",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-javascript-fill color-yellow",
                    img: Images.JavaScript
                },
                {
                    title: "TypeScript",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.TypeScript
                },
                {
                    title: "React",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-reactjs-line color-react",
                    img: ""
                },
                {
                    title: "SolidJS",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.Solidjs
                },
                {
                    title: "Jquery",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.JQUERY_ICON
                },
            ]
        },
        {
            title: "API Development",
            icon: "ri-database-2-fill",
            list: [
                {
                    title: "C#",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.C_ICON
                },
                {
                    title: "ASP.Net",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.ASP_ICON
                },
                {
                    title: "Entity Framework",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.EF_ICON
                },
                {
                    title: "SignalR.",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.SIGNALR_ICON
                },
                {
                    title: "SendGrid",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.SENDGRID_ICON
                },
                {
                    title: "PHP",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-github-fill",
                    img: Images.PHP
                },
                {
                    title: "SQL",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.SQL
                },
                {
                    title: "MySql",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.MySql
                },
                {
                    title: "Git",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-github-fill",
                    img: ""
                },
               
            ]
        },
        {
            title: "Web Design",
            icon: "ri-palette-fill",
            list: [
                {
                    title: "Figma",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.FigmaBlack
                },
                {
                    title: "Canva",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "",
                    img: Images.Canva
                },
            ]
        }
    ]

}