import { Images } from "../../assets/img/images"
import { ITestimonialsData } from "./testimonials.data"

/******************************** 
    Elian Testimonial EN
*********************************/
export const ElianEN: ITestimonialsData =    {
    img: Images.user.elian_foto,
    fullname: "Elihan Tejada Hilario",
    info: "Software Developer",
    message: [
        `
            My experience working with Gabriel has been exceptional.
            From the first moment I was impressed by the professionalism of him and his
            his dedication to his work. He is very collaborative and always thinks about how he can
            improve the tasks he performs.
        `,
    ],
    links: [
        {
            title: "Portfolio",
            type: "icon",
            icon: "ri-external-link-line",
            url: "https://elihan-th.netlify.app"
        },
        {
            title: "Linkedin",
            type: "icon",
            icon: "ri-linkedin-fill",
            url: "https://www.linkedin.com/in/elihan-th/"
        },
    ]

}

/******************************** 
    Elian Testimonial ES
*********************************/
export const ElianES: ITestimonialsData =  {
    img: Images.user.elian_foto,
    fullname: "Elihan Tejada Hilario",
    info: "Software Developer",
    message: [
        `Mi experiencia trabajando con Gabriel ha sido excepcional. 
        Desde el primer momento, quedé impresionado por su profesionalismo y su 
        dedicación al trabajo. Es muy colaborativo y siempre piensa en cómo se pueden 
        mejorar las tareas que realiza.`,
    ],
    links: [
        {
            title: "Portfolio",
            type: "icon",
            icon: "ri-external-link-line",
            url: "https://elihan-th.netlify.app"
        },
        {
            title: "Linkedin",
            type: "icon",
            icon: "ri-linkedin-fill",
            url: "https://www.linkedin.com/in/elihan-th/"
        },
    ]
} 