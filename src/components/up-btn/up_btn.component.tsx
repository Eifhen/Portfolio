import { onMount } from 'solid-js';
import { ITheme } from '../../hooks/theme.hook';
import './up_btn.component.css';
import useGoUpHook from '../../hooks/go-up.hook';
import ScrollSmooth from '../../hooks/scrollSmooth';

interface IUpBtnProps {
    theme: ITheme;
}

export default function UpBtn (props:IUpBtnProps) {
    let upButton: HTMLAnchorElement;

    onMount(()=> {
        ScrollSmooth();
        useGoUpHook<HTMLAnchorElement>({
            btnUpRef: upButton
        })
    })

    return (
        <a href="#navbar" ref={upButton!} class={`up_btn `} role="button" >
            <i class="ri-arrow-up-line"></i>
        </a>
    )
}

