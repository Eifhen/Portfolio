


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
            description:"I offer services for the development of web applications, powered by technologies such as React JS, ASP .NET and others.",
            color: "black",
            state: 'active',
        },
        {   id:2,      
            title:"API",
            subtitle: "Development",
            icon: "ri-database-2-fill",
            description: "Feel free to contact me if you need collaboration with any project where it is necessary to develop API, Rest, Restfull",
            color: "gray",
            state: 'inactive',
        },
        {   id:3,
            title: "Web",
            subtitle:"Design",
            icon:"ri-palette-fill",
            description: "You can contact me if you need someone for a layout or web design project of any sort.",
            color: "white",
            state: 'inactive',
        }
    ],
    ES:[
        {   id:1,
            title:"Desarrollo",
            subtitle:"Web",
            icon: "ri-code-s-slash-line",
            description:"Ofrezco servicios para el desarrollo de aplicaciones web, potenciado con tecnologías como React JS, ASP .NET y otras.",
            color: "black",
            state: 'active',
        },
        {   id:2,
            title:"Desarrollo de",
            subtitle: "API's",
            icon: "ri-database-2-fill",
            description: "No dudes en contactarme si necesitas colaboración con algún proyecto donde sea necesario desarrollar API, Rest, Restful",
            color: "gray",
            state: 'inactive',
        },
        {   id:3,
            title: "Diseño",
            subtitle: "Web",
            icon:"ri-palette-fill",
            description: "Puedes contactarme si necesitas a alguien para un proyecto de maquetación o diseño web de cualquier tipo.",
            color: "white",
            state: 'inactive',
        }
    ]
}