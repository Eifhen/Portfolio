import { A } from "@solidjs/router";
import { ITheme } from "../../hooks/theme.hook";
import Logo from "../logo/logo.component";
import './navbar.component.desktop.css';
import './navbar.component.movil.css';
import ButtonTranslate from "../translate/translate.component";
import translate from '../../hooks/translate.hook';
import ButtonTheme from "../theme/theme.component";
import { Accessor, For, Show, createEffect, createSignal, onMount } from "solid-js";
import useHideOnOutsideClick from "../../hooks/outsideClick";
import { RoutesData } from "../../data/routes/routes.data";

interface INavbar {
    color:ITheme;
    screenWidth?:Accessor<Number>;
}

export default function Navbar (props:INavbar) {

    const [desktop, setDesktop] = createSignal<boolean>(false);

    createEffect(()=>{
        if(props.screenWidth){
            if(Number(props.screenWidth()) >= 1100){
                setDesktop(true);
            }
            else {
                setDesktop(false);
            }
        }
    })

    return (
        <>
            <Show when={desktop()} fallback={<NavbarMovil color={props.color} />}>
                <NavbarDesktop color={props.color}/>
            </Show>
        </>
    )
}


function NavbarDesktop(props:INavbar){
    const data = RoutesData;

    return (
        <nav id="navbar" class={`navbar ${props.color.theme}`}>
            <div class="navbar-brand">
                <Logo color={props.color} />
            </div>
            <ul class="navbar-menu">
                <For each={data}>
                    {(route)=>(
                        <li>
                            <A activeClass={route.activeClass} href={route.href}>{translate(route.name)}</A>
                        </li>
                    )}
                </For>
            </ul>
            <div class="navbar-actions">
                <ButtonTranslate color={props.color}/>
                <ButtonTheme/>
            </div>
        </nav>
    )
}

function NavbarMovil(props:INavbar){
    const data = RoutesData;
    const [show, setShow] = createSignal<boolean>(false);
    const [hide, setHide] = createSignal<string>('created');

    let modalRef:HTMLDivElement;
    let btnRef:HTMLDivElement;
    
    const OpenMenu = () => setShow(true);
    const HideMenu = () => setShow(false);

    onMount(()=>{
        useHideOnOutsideClick<HTMLUListElement, HTMLDivElement>({
            ref1:modalRef, 
            ref2:btnRef, 
            show, 
            setShow,

        }); 
    })

    createEffect(()=>{
        if(show()){
            setHide("active");
        }
        if(show() == false && hide() == "active"){
            setHide("inactive");
        }
    })

    return (
        <div id="navbar" class="navbar-movil">
             <div class="navbar-brand-movil">
                <Logo color={props.color} />
             </div>
             <div class="navbar-menu-movil">
                <div ref={ btnRef! } onClick={ OpenMenu } class="navbar-menu-btn">
                    <i class="ri-menu-line"></i>
                </div>
                <div class={`nav-menu-movil-mask ${hide()}`}>
                    <div ref={modalRef!} class={`nav-menu-panel-movil ${hide()} ${props.color.theme}`} >
                        <div class="header">
                            <div class="title">
                                <h1>{translate("menu")}</h1>
                                <p>{translate("feel free to explore")}</p>
                            </div>
                            <div onClick={ HideMenu } class="btn-close">
                                <i class="ri-close-line"></i>
                            </div>
                        </div>
                        <div class="container">
                            <ul class="navbar-menu-movil">
                            <For each={data}>
                                {(route)=>(
                                    <li>
                                        <A activeClass={route.activeClass} href={route.href}>{translate(route.name)}</A>
                                    </li>
                                )}
                            </For>
                            </ul>
                            <div class="navbar-actions">
                                <ButtonTranslate color={props.color}/>
                                <ButtonTheme />
                            </div>
                        </div>
                        <div class="footer">
                            <Logo color={props.color} />
                        </div>
                    </div>
                </div>
             </div> 
        </div>
    );
}