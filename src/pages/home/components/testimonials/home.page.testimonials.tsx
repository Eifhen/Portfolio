import { For } from "solid-js";
import Carousel, { CarouselItem } from "../../../../components/carousel/carousel.component";
import { ITheme } from "../../../../hooks/theme.hook";
import './testimonials.desktop.css';
import './testimonials.movil.css';
import { ITestimonialsData } from "../../../../data/testimonials/testimonials.data";
import TestimonialCard from "../../../../components/testimonial-card/testimonial-card";


interface ITestimonials {
    theme: ITheme;
    data: ITestimonialsData[];
}

export default function Testimonials (props:ITestimonials) {
    console.log("length", props.data.length);
    return (
        <div class={`testimonials ${props.theme.theme}`}>
            <div class="testimonials-carousel">
                <Carousel>
                    <For each={props.data}>
                        {(item)=> (
                            <CarouselItem>
                                <TestimonialCard theme={props.theme} data={item} />
                            </CarouselItem>
                        )}
                    </For>
                </Carousel>
            </div>
        </div>
    )
}