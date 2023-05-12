import { Accessor, Setter, onCleanup, onMount } from "solid-js";



/*
    [ ref1 ] = esta referencia sirve para saber si el usuario ha dado click
    fuera del elemento o no, por lo general si se trata de un modal 
    ref1 deberá ser una referencia al modal en cuestión
    
    [ ref2 ] = esta referencia sirve para saber si el usuario ha dado click
    fuera del elemento que abre el modal por ejemplo si el usuario
    hace click en un botón y este botón abre un modal entonces
    esta referencia servirá para saber si el usuario hizo click fuera
    de dicho botón o no. esto es importante ya que no queremos 
    que el modal se cierre al hacer click en el botón que abre el modal

    De manera que para usar esta función necesitamos 2 referencias
    1 referencia al modal u objeto emergente 
    2 referencia al elemento que abre el objeto emergente

*/


export interface IOutsideClick<T, K> {
    ref1: T | any; 
    ref2: K | any;
    show: Accessor<boolean>;
    setShow: Setter<boolean>;
    action?: () => void;
}

export default function useHideOnOutsideClick <T, K>(props:IOutsideClick<T, K>){

    const handleClick = (event: MouseEvent) => {
        if(props.show()){
            if(!props.ref1.contains((event as any).target) && !props.ref2.contains((event as any).target)){
                props.setShow(false);
                if(props.action){
                    props.action();
                }
            }
        }
    }

    onMount(() => {
        document.addEventListener('click', handleClick);
    });
      
    onCleanup(() => {
        document.removeEventListener('click', handleClick);
    });

}