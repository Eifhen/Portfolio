import { Images } from "../../assets/img/images"
import { ITestimonialsData } from "./testimonials.data"

/******************************** 
    Daniel Pimentel Testimonial EN
*********************************/
export const DanielPimentelEN: ITestimonialsData =    {
    img: Images.user.daniel_pimentel_foto,
    fullname: "Daniel Pimentel",
    info: "Software Developer",
    message: [
        `As a co-worker, I dare say that Gabriel shows admirable dedication. 
        He always strives to deliver high quality work, 
        displaying impressive technical skills.`,
    ],
    links: [
        {
            title: "Portfolio",
            type: "icon",
            icon: "ri-external-link-line",
            url: "https://danielpimentel.netlify.app"
        },
        {
            title: "Linkedin",
            type: "icon",
            icon: "ri-linkedin-fill",
            url: "https://www.linkedin.com/in/danielpimentel00"
        },
    ]

}

/******************************** 
    Daniel Pimentel Testimonial ES
*********************************/
export const DanielPimentelES: ITestimonialsData =  {
    img: Images.user.daniel_pimentel_foto,
    fullname: "Daniel Pimentel",
    info: "Software Developer",
    message: [
        `Como compañero de trabajo, me atrevo a decir que Gabriel demuestra una dedicación admirable. 
        Siempre se esfuerza por entregar un trabajo de alta calidad, mostrando habilidades 
        técnicas impresionantes.`,
    ],
    links: [
        {
            title: "Portfolio",
            type: "icon",
            icon: "ri-external-link-line",
            url: "https://danielpimentel.netlify.app"
        },
        {
            title: "Linkedin",
            type: "icon",
            icon: "ri-linkedin-fill",
            url: "https://www.linkedin.com/in/danielpimentel00"
        },
    ]
} 