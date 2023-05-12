import { Accessor, createSignal, onCleanup, onMount } from "solid-js";






export default function useScreenWidth() : Accessor<number> {

    const [width, setWidth] = createSignal<number>(window.innerWidth);

    function HandleScreen(event:any){
        setWidth(event.target.innerWidth);
    }

    onMount(() => {
        window.addEventListener('resize', HandleScreen);
    });
      
    onCleanup(() => {
        window.removeEventListener('resize', HandleScreen);
    });

    return width;
}