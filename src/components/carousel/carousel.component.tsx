
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import { onMount } from 'solid-js';


export default function Carousel(){

    onMount(()=>{
        const slider = new Splide( '.splide' ).mount();  
    })

    return (
        <section class="splide" aria-label="Splide Basic HTML Example">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide slide-ts">Slide 01</li>
                    <li class="splide__slide slide-ts">Slide 02</li>
                    <li class="splide__slide slide-ts">Slide 03</li>
                </ul>
            </div>
        </section>
    )
}