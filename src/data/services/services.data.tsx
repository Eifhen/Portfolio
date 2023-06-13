


// EN | ES

export interface IServicesData {
    EN:IServiceData[];
    ES:IServiceData[];
    [key:string]:IServiceData[];
}

export interface IServiceData {
    id:number;
    icon:string;
    title: string;
    subtitle:string;
    description: string;
    color: "black" | "gray" | "white"; // color de la carta
    state: 'active' | 'inactive';
}

const obj =  {
    title: "",
    subtitle:"",
    icon:"",
    description: "",
    color:"",
}

export const ServicesData:IServicesData = {
    EN:[
        {   id:1,         
            title:"Web",
            subtitle:"Development",
            icon: "ri-code-s-slash-line",
            description: `
                Development of web applications, powered by technologies 
                such as React JS, Solid JS, ASP .NET among others.
            `,
            color: "black",
            state: 'active',
        },
        {   id:2,      
            title:"API",
            subtitle: "Development",
            icon: "ri-database-2-fill",
            description: `
                Development of applications on the backend side, with 
                technologies such as ASP. Net, Asp.Net Core, Php, C#, APIS Rest/Restful
            `,
            color: "gray",
            state: 'inactive',
        },
        {   id:3,
            title: "Web",
            subtitle:"Design",
            icon:"ri-palette-fill",
            description: `
                Design of user interfaces, web layout, 
                implementation and creation of templates among others.
            `,
            color: "white",
            state: 'inactive',
        }
    ],
    ES:[
        {   id:1,
            title:"Desarrollo",
            subtitle:"Web",
            icon: "ri-code-s-slash-line",
            description:`
                Desarrollo de aplicaciones web, potenciado con tecnologías 
                como React JS, Solid JS, ASP .NET entre otras.
            `,
            color: "black",
            state: 'active',
        },
        {   id:2,
            title:"Desarrollo de",
            subtitle: "API's",
            icon: "ri-database-2-fill",
            description: `
                Desarrollo de aplicaciones del lado del backend, 
                con tecnologías como ASP. Net, Asp.Net Core, Php, C#, APIS Rest/Restful
            `,
            color: "gray",
            state: 'inactive',
        },
        {   id:3,
            title: "Diseño",
            subtitle: "Web",
            icon:"ri-palette-fill",
            description: `
                Diseño de interfaces de usuario, maquetación web, implementación y 
                creación de plantillas entre otros.
            `,
            color: "white",
            state: 'inactive',
        }
    ]
}