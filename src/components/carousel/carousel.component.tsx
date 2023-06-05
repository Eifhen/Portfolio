import './carousel.config.css';
import '@splidejs/splide/css';


import { JSX, onCleanup, onMount } from 'solid-js';
import { ISliderOptions, useSlider } from '../../hooks/slider.hook';

interface CarouselItem {
    children: JSX.Element;
}

interface ICarousel {
    children: JSX.Element;
    options:ISliderOptions;
}

export default function Carousel(props: ICarousel){
    
    useSlider({options:props.options});

    return (
    <section id={props.options.slider_id} class="splide" aria-label="Splide Basic HTML Example">
             <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <i class="ri-arrow-left-circle-fill"></i>
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <i class="ri-arrow-right-circle-fill"></i>
                </button>
            </div>
            <div class="splide__track">
                <ul class="splide__list carousel-config">
                    {props.children}
                </ul>
            </div>
            <ul class="splide__pagination"></ul>
      </section>
    )
}


export const CarouselItem = (props: CarouselItem) => (
    <div class="splide__slide">
        {props.children}
    </div>
)
