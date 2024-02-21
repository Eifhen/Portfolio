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
                    description: "",
                    icon: "ri-html5-fill color-orange",
                },
                {
                    title: "CSS",
                    type: "icon",
                    description: "",
                    icon: "ri-css3-fill color-blue",
                },
                {
                    title: "Bootstrap",
                    type: "icon",
                    description: "",
                    icon: "ri-bootstrap-fill color-purple",
                },
                {
                    title: "JavaScript",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.javascript_icon,
                },
                {
                    title: "TypeScript",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.typescript_icon,
                },
                {
                    title: "React",
                    type: "icon",
                    description: "",
                    icon: "ri-reactjs-line color-react",
                },
                {
                    title: "SolidJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.solidjs_icon,
                },
                {
                    title: "Jquery",
                    type: "img",
                    description: "",
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
                    description: "",
                    icon: Images.tecnologies.c_icon,
                },
                {
                    title: "ASP.Net",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "ASP.Net Core",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "Entity Framework",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.ef_icon,
                },
                {
                    title: "SignalR.",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.signalr_icon,
                },
                {
                    title: "SendGrid",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.sendgrid_icon,
                },
                {
                    title: "PHP",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.php_icon,
                },
                {
                    title: "MySql",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.mysql_icon,
                },
                {
                    title: "SQL Server",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.sql_icon,
                },
                {
                    title: "MongooseJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.mongoose_icon,
                },              
                {
                    title: "ExpressJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.express_js_icon,
                }, 
                {
                    title: "MongoDB",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.mongodb_icon,
                }, 
                {
                    title: "Socket.IO",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.socket_io_icon,
                }, 
                {
                    title: "NodeJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.nodejs_icon,
                }, 
                {
                    title: "Git",
                    type: "icon",
                    description: "",
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
                    description: "",
                    icon: Images.tecnologies.figma_black_icon,
                },
                {
                    title: "Canva",
                    type: "img",
                    description: "",
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
                    description: "",
                    icon: "ri-html5-fill color-orange",
                },
                {
                    title: "CSS",
                    type: "icon",
                    description: "",
                    icon: "ri-css3-fill color-blue",
                },
                {
                    title: "Bootstrap",
                    type: "icon",
                    description: "",
                    icon: "ri-bootstrap-fill color-purple",
                },
                {
                    title: "JavaScript",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.javascript_icon,
                },
                {
                    title: "TypeScript",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.typescript_icon,
                },
                {
                    title: "React",
                    type: "icon",
                    description: "",
                    icon: "ri-reactjs-line color-react",
                },
                {
                    title: "SolidJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.solidjs_icon,
                },
                {
                    title: "Jquery",
                    type: "img",
                    description: "",
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
                    description: "",
                    icon: Images.tecnologies.c_icon,
                },
                {
                    title: "ASP.Net",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "ASP.Net Core",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.asp_icon,
                },
                {
                    title: "Entity Framework",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.ef_icon,
                },
                {
                    title: "SignalR.",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.signalr_icon,
                },
                {
                    title: "SendGrid",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.sendgrid_icon,
                },
                {
                    title: "PHP",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.php_icon,
                },
                {
                    title: "MySql",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.mysql_icon,
                },
                {
                    title: "SQL Server",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.sql_icon,
                },
                {
                    title: "MongooseJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.mongoose_icon,
                },              
                {
                    title: "ExpressJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.express_js_icon,
                }, 
                {
                    title: "MongoDB",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.mongodb_icon,
                }, 
                {
                    title: "Socket.IO",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.socket_io_icon,
                }, 
                {
                    title: "NodeJS",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.nodejs_icon,
                }, 
                {
                    title: "Git",
                    type: "icon",
                    description: "",
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
                    description: "",
                    icon: Images.tecnologies.figma_black_icon,
                },
                {
                    title: "Canva",
                    type: "img",
                    description: "",
                    icon: Images.tecnologies.canva_icon,
                },
            ]
        }
    ]
}