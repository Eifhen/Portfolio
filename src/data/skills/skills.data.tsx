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
    icon: string;
    type: "icon" | "img";
    description: string;
}


export const SkillsData: ISkillsDataManager = {

    ES: [
        // Desarrollo Web
        {
            title: "Desarrollo Web",
            icon: "ri-code-s-slash-fill",
            list: [
                {
                    title: "HTML",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-html5-fill color-orange",
                },
                {
                    title: "CSS",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-css3-fill color-blue",
                },
                {
                    title: "Bootstrap",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-bootstrap-fill color-purple",
                },
                {
                    title: "JavaScript",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.javascript_icon,
                },
                {
                    title: "TypeScript",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.typescript_icon,
                },
                {
                    title: "React",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-reactjs-line color-react",
                },
                {
                    title: "SolidJS",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.solidjs_icon,
                },
                {
                    title: "Jquery",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.jquery_icon,
                },
          
            ]
        },

        // Desarrollo Apis
        {
            title: "Desarrollo de API's",
            icon: "ri-database-2-fill",
            list: [
                {
                    title: "C#",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.c_icon,
                },
                {
                    title: "ASP.Net",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "ASP.Net Core",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "Entity Framework",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.ef_icon,
                },
                {
                    title: "SignalR.",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.signalr_icon,
                },
                {
                    title: "SendGrid",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.sendgrid_icon,
                },
                {
                    title: "PHP",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.php_icon,
                },
                {
                    title: "MySql",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.mysql_icon,
                },
                {
                    title: "SQL Server",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.sql_icon,
                },
                {
                    title: "Git",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-github-fill",
                },        
            ]
        },

        // Diseño Web
        {
            title: "Diseño Web",
            icon: "ri-palette-fill",
            list: [
                {
                    title: "Figma",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.figma_black_icon,
                },
                {
                    title: "Canva",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.canva_icon,
                },
            ]
        }

    ],
    EN: [
          // Desarrollo Web
        {
            title: "Web Development",
            icon: "ri-code-s-slash-fill",
            list: [
                {
                    title: "HTML",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-html5-fill color-orange",
                },
                {
                    title: "CSS",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-css3-fill color-blue",
                },
                {
                    title: "Bootstrap",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-bootstrap-fill color-purple",
                },
                {
                    title: "JavaScript",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.javascript_icon,
                },
                {
                    title: "TypeScript",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.typescript_icon,
                },
                {
                    title: "React",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-reactjs-line color-react",
                },
                {
                    title: "SolidJS",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.solidjs_icon,
                },
                {
                    title: "Jquery",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.jquery_icon,
                },
          
            ]
        },

         // Desarrollo Apis
        {
            title: "API Development",
            icon: "ri-database-2-fill",
            list: [
                {
                    title: "C#",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.c_icon,
                },
                {
                    title: "ASP.Net",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "ASP.Net Core",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "Entity Framework",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.ef_icon,
                },
                {
                    title: "SignalR.",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.signalr_icon,
                },
                {
                    title: "SendGrid",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.sendgrid_icon,
                },
                {
                    title: "PHP",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.php_icon,
                },
                {
                    title: "MySql",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.mysql_icon,
                },
                {
                    title: "SQL Server",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.sql_icon,
                },
                {
                    title: "Git",
                    type: "icon",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: "ri-github-fill",
                },        
            ]
        },

        // Diseño Web
        {
            title: "Web Design",
            icon: "ri-palette-fill",
            list: [
                {
                    title: "Figma",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.figma_black_icon,
                },
                {
                    title: "Canva",
                    type: "img",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer",
                    icon: Images.tecnologies.canva_icon,
                },
            ]
        }
    ]

}