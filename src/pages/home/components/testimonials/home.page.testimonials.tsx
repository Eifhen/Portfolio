import { For } from "solid-js";
import Carousel, { CarouselItem } from "../../../../components/carousel/carousel.component";
import { ITheme } from "../../../../hooks/theme.hook";
import './testimonials.desktop.css';
import './testimonials.movil.css';
import { ITestimonialsData } from "../../../../data/testimonials/testimonials.data";





interface ITestimonials {
    theme: ITheme;
    data: ITestimonialsData[];
}



export default function Testimonials (props:ITestimonials) {
    return (
        <div class="testimonials">
            <Carousel>
                <For each={props.data}>
                    {(item)=> (
                        <CarouselItem>
                            <h1>{item.fullname}</h1>
                        </CarouselItem>
                    )}
                </For>
            </Carousel>

        </div>
    )
}