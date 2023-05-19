import './carousel.config.css';
import '@splidejs/splide/css';


import { JSX, onMount } from 'solid-js';
import { useSlider } from '../../hooks/slider.hook';

interface CarouselItem {
    children: JSX.Element;
}

export default function Carousel(props: CarouselItem){
   
   
    onMount(()=>{
        useSlider();
        console.log("slider is mounted");
    });
  
    return (
        <section class="splide" aria-label="Splide Basic HTML Example">
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
