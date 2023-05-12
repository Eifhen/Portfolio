

import './hobbies.desktop.css';
import './hobbies.movil.css';
import { Accessor, For, Setter, createEffect, createSignal, onMount } from 'solid-js';
import { IHobbiesData } from '../../data/hobbies/hobbies.data';
import translate from '../../hooks/translate.hook';
import { ITheme } from '../../hooks/theme.hook';
import useHideOnOutsideClick from '../../hooks/outsideClick';


interface IHobbies {
    data: IHobbiesData[];
    theme: ITheme;
}

interface IHobbiesModal {
    data: IHobbiesData;
    state: Accessor<boolean>;
    setState: Setter<boolean>;
    btnRef: Accessor<HTMLDivElement>;
}

export default function Hobbies(props:IHobbies) {

    const [modal, setModal] = createSignal(false);
    const [selected, setSelected] = createSignal({} as IHobbiesData);
    const [refs, setRefs] = createSignal<HTMLDivElement[]>([]); 
    const [selectedRef, setSelectedRef] = createSignal<HTMLDivElement>({} as HTMLDivElement);

    const CreateRefs = () : HTMLDivElement[] => {
        const refs:HTMLDivElement[] = [];
        props.data.forEach((item)=>{
            let ref:HTMLDivElement;
            refs.push(ref!);
        })
        return refs;
    }

    const OpenModal = (item:IHobbiesData, ref:HTMLDivElement) => {
        setSelected(item);
        setModal(true);
        setSelectedRef(ref);
    }

    setRefs(CreateRefs());

    return (
        <div class={`hobbies ${props.theme.theme}`}>
            <div class="title">
                <h1>{translate("my-hobbies")}</h1>
                <p>{translate("things-that-i-love")}</p>
                <div class="underline"></div>
            </div>
            <div class="content">
                <For each={props.data} fallback={<>error</>}>
                    {(item, index)=>(
                        <div class="item" ref={refs()[index()]!} onClick={()=> OpenModal(item, refs()[index()]!) }>
                            <div class="icon">
                                <i class={item.icon} />
                            </div>
                            <div class="title">
                                <h2>{item.title}</h2>
                            </div>
                            <div class="open">
                                <i class="ri-arrow-down-s-line"></i>
                            </div>
                        </div>
                    )}
                </For>
            </div>
            <HobbiesModal btnRef={selectedRef} data={selected()} state={modal} setState={setModal} />
        </div>
    );
}

function HobbiesModal (props:IHobbiesModal) {
    const [hide, setHide] = createSignal<string>('created');
    let modalRef:HTMLDivElement;
    
    const ModalClose = () => {
        props.setState(false);
    }

    createEffect(()=>{
        if(props.state()){
            setHide("active");
        }
        if(props.state() == false && hide() == "active"){
            setHide("inactive");
        }
    })
    
    createEffect(()=>{
        useHideOnOutsideClick<HTMLDivElement, HTMLDivElement>({
            ref1:modalRef, 
            ref2:props.btnRef(), 
            show:props.state, 
            setShow:props.setState,
        }); 
    })

    return (
        <div class={`hobbies-modal-mask ${hide()}`}>
            <div ref={modalRef!} class="hobbies-modal">
                <div onClick={ ModalClose } class="modal-close">
                    < i class="ri-close-line"></i>
                </div>
                <div class="header">
                    <div class="title">
                        <div class="icon">
                            <i class={props.data.icon} />
                        </div>
                        <h2>{props.data.title}</h2>
                    </div>
                </div>
                <div class="content">
                    <div class="description">
                        <p>{props.data.description}</p>
                    </div>
                    <div class="image">
                        <img src={props.data.img} alt="" elementtiming={''} fetchpriority={'high'} />
                    </div>
                </div>
            </div>
        </div>
    )
}