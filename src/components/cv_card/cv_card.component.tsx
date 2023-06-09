import { Accessor, For, Setter, Show, createEffect, createSignal } from "solid-js";
import { IEducationAndWorkItems } from "../../data/about/about.data"
import useHideOnOutsideClick from "../../hooks/outsideClick";
import './cv_card.desktop.css';
import './cv_card.movil.css';
import { A } from "@solidjs/router";



interface IRenderCV_Card {
    data: IEducationAndWorkItems[];
    type: "education" | "experience";
}

interface ICorriculumnModal {
    img: string;
    state: Accessor<boolean>;
    setState: Setter<boolean>;
    btnRef: Accessor<HTMLDivElement>;
}


export default function RenderCorriculumnCards(props: IRenderCV_Card) {
    const [modal, setModal] = createSignal(false);
    const [selected, setSelected] = createSignal("");
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

    const OpenModal = (item:IEducationAndWorkItems, ref:HTMLDivElement) => {
        setSelected(item.assets.img);
        setModal(true);
        setSelectedRef(ref);
    }

    setRefs(CreateRefs());
   
    return (
        <>
            <For each={ props.data }>
                {(item, index)=>(
                    <div class="cv-card" ref={refs()[index()]!}>
                        <Show when={props.type == "education"}>
                            <div class="options" onClick={()=> OpenModal(item, refs()[index()]!)}>
                                <i class="ri-more-fill"></i>
                            </div>
                        </Show>
                        <div class="card-date">
                            <div class="time">
                                <time>
                                    <i class="ri-calendar-todo-fill"></i>
                                    {item.date}
                                </time>
                            </div>
                        </div>
                        <div class="card-timeline">
                            <div class="time-circle">
                                <div class="circle"></div>
                            </div>
                            <div class="time-line">
                                <div class="line"></div>
                            </div>
                        </div>
                        <div class="card-info">
                            <div class="card-title">
                                <A href={item.assets.link} target="_blank">{item.title}</A>
                                <p>{item.subtitle}</p>
                            </div>
                            <div class="card-description">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </For>
            <Show when={props.type == "education"}>
                <CorriculumnModal btnRef={selectedRef} img={ selected() } state={modal} setState={setModal} />
            </Show>
        </>
    )
}

function CorriculumnModal (props:ICorriculumnModal) {
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
        <div class={`curriculumn-modal-mask ${hide()}`}>
            <div ref={modalRef!} class="curriculumn-modal">
                <div onClick={ ModalClose } class="modal-close">
                    < i class="ri-close-line"></i>
                </div>
                <div class="image">
                    <img src={props.img} alt=""  />
                </div>
            </div>
        </div>
    )
}