import { onMount } from "solid-js";
import Splide from '@splidejs/splide';




export function useSlider(){

    var slider = new Splide(".splide", {
        type: "slider",
        perPage: 3,
        perMove: 1,
        rewind: true,
        start: 1,
        focus: "center",
        gap: "2rem",
        trimSpace: true,
        pagination:true,
        autoplay: true,
        interval:2000,
        arrows:false,
    });

    return slider.mount();
}