import { MartinTestimonialEN, MartinTestimonialES } from "./martin.testimonial";









interface ITestimonialManager {
    EN: ITestimonialsData[];
    ES: ITestimonialsData[];
    [key:string] : ITestimonialsData[];
}

export interface ITestimonialsData {
    fullname: string;
    info: string;
    message: string[];
    links: ITestimonialLink[];
    img: string;
}

export interface ITestimonialLink {
    url: string;
    icon: string;
    type: "image" | "icon";
    title: string;
}

export const TestimonialsData: ITestimonialManager = {
    EN: [
        MartinTestimonialEN,
        MartinTestimonialEN,
        MartinTestimonialEN,
        MartinTestimonialEN,
    ],

    ES: [
        MartinTestimonialES,
        MartinTestimonialES,
        MartinTestimonialES,
        MartinTestimonialES,
    ]
}