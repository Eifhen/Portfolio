
import { createEffect, createSignal } from 'solid-js';
import useAplicationContext from '../../context/aplication.context';
import './theme.component.css';


export default function ButtonTheme(){
    const context = useAplicationContext();
    const {changeTheme, themeStore} = context.themeManager;
    const [icon, setIcon] = createSignal<string>("");

 
    createEffect(()=>{
        setIcon(themeStore.theme == "dark" ? "ri-sun-fill" : "ri-moon-fill");
    })
    
    return (
        <div onClick={()=> changeTheme()} class={`btn-theme ${themeStore.theme}`}>
            <i class={icon()}></i>
        </div>
    );

}