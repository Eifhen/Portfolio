import { scrollTop } from "./scrollSmooth";
import onRouteChange from "./onRouteChange.hook";


export default function useLayoutFade(){
    const layout = document.getElementById("layout-page");
    onRouteChange(()=>{
        layout?.classList.remove("layout-fadeInPage");
        setTimeout(()=>{
            layout?.classList.add("layout-fadeInPage");
        }, 100);
        scrollTop();
    })
}