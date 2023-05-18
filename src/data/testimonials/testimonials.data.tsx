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
}

export interface ITestimonialLink {
    url: string;
    icon: string;
    type: "image" | "icon";
    title: string;
}

export const TestimonialsData: ITestimonialManager = {
    EN: [
        MartinTestimonialEN
    ],

    ES: [
        MartinTestimonialES
    ]
}