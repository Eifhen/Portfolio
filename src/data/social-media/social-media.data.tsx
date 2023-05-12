





export interface ISocialMediaData {
    img:string,
    type: "icon" | "img";
    title: string;
    link: string;
}


export const SocialMediaData: ISocialMediaData[] = [
    {
        img:"ri-github-fill",
        type:"icon",
        title: "Github",
        link:""
    },
    {
        img:"ri-linkedin-line",
        type:"icon",
        title: "Linkedin",
        link: "",
    },
    {
        img:"ri-instagram-line",
        type:"icon",
        title: "Instagram",
        link: "",
    },  
    {
        img:"ri-whatsapp-line",
        type:"icon",
        title: "Whatsapp",
        link: "",
    },
]