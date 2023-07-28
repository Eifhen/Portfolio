import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";

export default function ScrollSmooth(){
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var link = anchor  as HTMLAnchorElement;
            var reference = link.getAttribute("href");
            var element = document.querySelector(`${reference}`);
            element?.scrollIntoView({
                behavior: 'smooth'
            })
        });
    });
}

export function scrollTop(){
    const layout = document.getElementById("layout-page");
    layout!.scrollTop = 0;
}

export function onRouteChange(){
    const layout = document.getElementById("layout-page");
    const location = useLocation();

    createEffect(()=>{
        if(location.pathname){
            layout?.classList.remove("layout-fadeInPage");
            setTimeout(()=>{
                layout?.classList.add("layout-fadeInPage");
            }, 100);
            scrollTop();
        }
    })
}