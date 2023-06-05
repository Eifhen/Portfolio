import { Setter, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import Splide from '@splidejs/splide';
import useAplicationContext from "../context/aplication.context";

 /* 
     el efecto se ejecutará cada vez que se cambie el idioma
    la idea es renderizar el carousel de nuevo cada vez que cambie el idioma
 */

export interface ISlider {
    options: ISliderOptions;
}

export interface ISliderOptions {
    slider_id:string,
    perPage?: number,
    gap?: string,
    startIndex?:number,
    type?: string;
    rewind: boolean
}

export function useSlider(props:ISlider){
    const context = useAplicationContext();
    const [slider, setSlider] = createSignal({} as Splide);

    onMount(()=>{
        RenderSlider(props.options, setSlider);
        slider().mount();
    })

    onCleanup(()=>{
        slider().destroy();
    })

    createEffect(()=>{
        context.lenguageManager.lenguageStore.lenguage;
        slider().destroy();
        slider().mount();
    })
}

function RenderSlider (props:ISliderOptions, setSlider: Setter<Splide>) {
    setSlider(new Splide(`#${props.slider_id}`, {
        type: props.type? props.type : "slider",
        perPage: props.perPage,
        perMove: 1,
        rewind: props.rewind,
        start: props.startIndex != null?  props.startIndex : 1,
        focus: "center",
        gap: props.gap? props.gap: "2rem",
        trimSpace: true,
        pagination:true,
        autoplay: true,
        interval: 2000,
        easing:"ease",
        rewindSpeed: 2000,
        arrows: true,
        breakpoints: {
            640: {
                perPage:2,
                arrows: false,
            },
            460: {
                perPage:1,
                gap: "1rem",
            }
        }
    }))
}
