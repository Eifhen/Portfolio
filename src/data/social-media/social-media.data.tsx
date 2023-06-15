import { createEffect, createSignal } from 'solid-js';
import SocialMedia from '../../components/social-media/socialmedia.component';
import useLenguage from '../../hooks/lenguage.hook';
import { translateElement, translateWithLan } from '../../hooks/translate.hook';
import { lenguageDataEN } from '../lenguage/lenguage.data.EN';
import { lenguageDataES } from '../lenguage/lenguage.data.ES';






export interface ISocialMediaData {
    img:string,
    type: "icon" | "img";
    title: string;
    link: string;
}


export const SocialMediaData = (leng:string) : ISocialMediaData[] => {
    return [
        {
            img:"ri-github-fill",
            type:"icon",
            title: "Github",
            link:"https://github.com/Eifhen"
        },
        {
            img:"ri-linkedin-line",
            type:"icon",
            title: "Linkedin",
            link: "https://www.linkedin.com/in/gabriel-jiménez-b07360115/",
        },
        {
            img:"ri-instagram-line",
            type:"icon",
            title: "Instagram",
            link: "https://www.instagram.com/jimenezg905/",
        },  
        {
            img:"ri-whatsapp-line",
            type:"icon",
            title: "Whatsapp",
            link: `https://wa.me/8298143523?text=${translateWithLan("whatsapp-msg", leng)}`,
        },
    ] 
    
}
