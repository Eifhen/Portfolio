import { Images } from "../../assets/img/images"
import { ITestimonialsData } from "./testimonials.data"


/******************************** 
    Martin Testimonial EN
*********************************/
export const MartinTestimonialEN: ITestimonialsData =    {
    img: Images.user.martin_foto,
    fullname: "Martinsito Brito Diaz",
    info: "Coworker | Software Developer",
    message: [
        `Gabriel is an exceptional person, an unparalleled friend, 
        and an inspiring co-worker. His affable character and 
        his positive attitude create a warm and welcoming atmosphere 
        in any situation.`,
    ],
    links: [
        {
            title: "Portfolio",
            type: "icon",
            icon: "ri-external-link-line",
            url: "https://martinsitobd.netlify.app"
        },
        {
            title: "Linkedin",
            type: "icon",
            icon: "ri-linkedin-fill",
            url: "https://www.linkedin.com/in/martinsito-brito-diaz-ab4a48213/"
        },
    ]

}

/******************************** 
    Martin Testimonial ES
*********************************/
export const MartinTestimonialES: ITestimonialsData =  {
    img: Images.user.martin_foto,
    fullname: "Martinsito Brito Diaz",
    info: "Compañero de Trabajo | Software Developer",
    message: [
        `Gabriel es una persona excepcional, un amigo sin igual y un compañero de 
        trabajo inspirador. Su carácter afable y su actitud positiva crean un 
        ambiente cálido y acogedor en cualquier situación.`,
    ],
    links: [
        {
            title: "Portfolio",
            type: "icon",
            icon: "ri-external-link-line",
            url: "https://martinsitobd.netlify.app"
        },
        {
            title: "Linkedin",
            type: "icon",
            icon: "ri-linkedin-fill",
            url: "https://www.linkedin.com/in/martinsito-brito-diaz-ab4a48213/"
        },
    ]
} 