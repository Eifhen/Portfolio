import { createSignal } from "solid-js";


export interface IObserveElement<T> {
    ref1: T | any;
}

export default function useObserveElement <T> (props:IObserveElement<T>) {
    const footer = document.querySelector("#main-footer");

  
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                props.ref1.classList.add("d-flex");
            }
            else {
                props.ref1.classList.remove("d-flex");
            }
        })
    }); 
    
    if(footer){
        observer.observe(footer);
    }
}