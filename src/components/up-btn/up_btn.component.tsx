import { Accessor, onCleanup, onMount } from 'solid-js';
import { ITheme } from '../../hooks/theme.hook';
import './up_btn.component.css';
import useObserveElement from '../../hooks/intersectionObserver.hook';




interface IUpBtnProps {
    theme: ITheme;
}

export default function UpBtn (props:IUpBtnProps) {
    let upButton: HTMLAnchorElement;

    onMount(()=> {
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

        useObserveElement<HTMLAnchorElement>({
            ref1: upButton,
        });
    })

    return (
        <a href="#navbar" ref={upButton!} class={`up_btn ${props.theme.theme}`} role="button" >
            <i class="ri-arrow-up-line"></i>
        </a>
    )
}