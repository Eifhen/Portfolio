import { createEffect, createSignal, onCleanup } from "solid-js";


export default function useOnRouteChange(callback:any) {
    const [currentPath, setCurrentPath] = createSignal(window.location.pathname);
  
    createEffect(() => {
      const handleRouteChange = () => {
        setCurrentPath(window.location.pathname);
      };
  
      // Añade un event listener para el cambio de ruta
      window.addEventListener("popstate", handleRouteChange);
  
      // Limpia el event listener cuando el componente se desmonta
      onCleanup(() => {
        window.removeEventListener("popstate", handleRouteChange);
      });
  
      // Ejecuta el callback cuando la ruta cambia
      callback(currentPath());
    });
  }