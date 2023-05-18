import './carousel.config.css';
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import { JSX, onMount } from 'solid-js';

interface CarouselItem {
    children: JSX.Element;
}

export default function Carousel(props: CarouselItem){

    onMount(()=>{
        new Splide('.splide',{
            type   : 'loop',
            perPage: 3,
            focus  : 'center',
            height: "auto",
        }).mount();  
    })

    return (
        <section class="splide" aria-label="Carousel">
            <div class="splide__track">
                <ul class="splide__list">
                    {props.children}
                </ul>
            </div>
        </section>
    )
}


export const CarouselItem = (props: CarouselItem) => (
    <li class="splide__slide slide-ts">
        {props.children}
    </li>
)
