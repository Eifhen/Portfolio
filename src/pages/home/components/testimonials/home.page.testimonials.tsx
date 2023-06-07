import { For } from "solid-js";
import Carousel, { CarouselItem } from "../../../../components/carousel/carousel.component";
import { ITheme } from "../../../../hooks/theme.hook";
import { ITestimonialsData } from "../../../../data/testimonials/testimonials.data";
import TestimonialCard from "../../../../components/testimonial-card/testimonial-card";
import './testimonials.desktop.css';
import './testimonials.movil.css';
import translate from "../../../../hooks/translate.hook";
import Wave from '../../../../components/wave/wave.component';
import { ISliderOptions } from "../../../../hooks/slider.hook";


interface ITestimonials {
    theme: ITheme;
    data: ITestimonialsData[];
}

export default function Testimonials (props:ITestimonials) {

    const options: ISliderOptions = {
        slider_id:"slider_testimonials", 
        perPage:3, 
        rewind: true,
        gap: "3rem",
        movilGap: "2rem",
    
    }

    return (
        <div class={`testimonials ${props.theme.theme}`}>
            <div class="content">
                <div class="header">
                    <p>{translate("what-others-say")}</p>
                    <h2>{translate("testimonials")}</h2>
                    <div class="underline"></div>
                </div>
                <div class="testimonials-carousel">
                    <div class="overflow">
                        <Carousel options={options}>
                            <For each={props.data}>
                                {(item)=> (
                                    <CarouselItem>
                                        <TestimonialCard theme={props.theme} data={item} />
                                    </CarouselItem>
                                )}
                            </For>
                        </Carousel>
                        <div class="testimonial-wave">
                            <div class="t-wave">
                                <Wave waveColor="black" allowTheme={false} theme={props.theme} />
                            </div>
                            <div class="t-space"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}