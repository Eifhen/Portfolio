





export interface IRoutes {
    href:string;
    name:string;
    activeClass: string;
}

export const RoutesData:IRoutes[] = [
    {
        href:"/home",
        name: "home",
        activeClass:"active", 
    },
    {
        href:"/projects",
        name: "projects",
        activeClass:"active", 
    },
    {
        href:"/templates",
        name: "designs & templates",
        activeClass:"active", 
    },
    {
        href:"/home#contact",
        name: "contact",
        activeClass: "none", 
    },
    {
        href:"/about",
        name: "about",
        activeClass:"active", 
    },
]