import { Images } from "../../assets/img/images";




export interface IHobbiesDataManager {
    EN: IHobbiesData[];
    ES: IHobbiesData[];
    [key:string]: IHobbiesData[];
} 


export interface IHobbiesData {
    icon:string;
    title:string;
    description:string;
    img: string;
}

const obj = {
    icon:"",
    title:"",
    description:"",
    img: ""
}

export const HobbiesData : IHobbiesDataManager = {
    EN: [ 
        {
            icon:"ri-palette-line",
            title:"Web Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            img: ""
        }, 
        {
            icon:"ri-music-2-line",
            title:"Music",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            img: ""
        }, 
        {
            icon:"ri-suitcase-2-line",
            title:"Travel",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            img: Images.Travel,
        }
    ],
    ES: [
        {
            icon:"ri-palette-line",
            title:"Diseño Web",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            img: ""
        }, 
        {
            icon:"ri-music-2-line",
            title:"Música",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            img: ""
        }, 
        {
            icon:"ri-suitcase-2-line",
            title:"Viajar",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            img: Images.Travel,
        }
    ]
}