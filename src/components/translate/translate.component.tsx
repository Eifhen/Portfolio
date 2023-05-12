import { createSignal, onCleanup, onMount } from 'solid-js';
import useAplicationContext from '../../context/aplication.context';
import { ITheme } from '../../hooks/theme.hook';
import './translate.component.css';
import useHideOnOutsideClick from '../../hooks/outsideClick';
import translate from '../../hooks/translate.hook';



interface IButtonTranslate {
    color: ITheme;
}

export default function ButtonTranslate(props:IButtonTranslate) {
    const context = useAplicationContext();
    const {changeLenguage} = context.lenguageManager;
    const [show, setShow] = createSignal<boolean>(false);

    let translatePanelRef: HTMLUListElement;
    let btnTranslateRef: HTMLDivElement;

    const Open = () =>  setShow(true);
    const Change = (len:string) => {
        setShow(false);
        changeLenguage(len);
    }

    onMount(()=>{
        useHideOnOutsideClick<HTMLUListElement, HTMLDivElement>({
            ref1:translatePanelRef, 
            ref2:btnTranslateRef, 
            show, 
            setShow
        }); 
    })

    return (
        <div class='translate-action'>
            <div ref={btnTranslateRef!} 
                onClick={Open} 
                class={`btn-translate ${props.color.theme}`}
            >
                <i class="icon ri-translate-2" />
            </div> 
            <ul ref={translatePanelRef!} 
                class={`translate-panel ${props.color.theme}`} 
                classList={{"active":show()}}
            >
                <li onClick={()=> Change("EN")}>{translate("English")}</li>
                <li onClick={()=> Change("ES")}>{translate("Spanish")}</li>
            </ul>
        </div>
    )
}