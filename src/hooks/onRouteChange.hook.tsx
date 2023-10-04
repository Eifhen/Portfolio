import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";


/*
  Ejecuta un callback cada vez que la ruta o 
  el hash de la ruta cambia
*/
export default function onRouteChange(callback: (path:string) => void) {
  const location = useLocation();
  createEffect(()=>{
    if(location.hash || location.pathname){
      callback(location.pathname);
    }
  })
}