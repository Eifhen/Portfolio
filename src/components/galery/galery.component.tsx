
import { Accessor, For, Setter, createEffect, createSignal, onMount } from 'solid-js';
import { IProjectData, IProjectGalery } from '../../data/projects/project.data';
import './galery.desktop.css';
import "./galery.movil.css";
import { ITheme } from '../../hooks/theme.hook';
import useHideOnOutsideClick from '../../hooks/outsideClick';




interface IGalery {
    data: IProjectData;
    theme: ITheme;
}

interface IGaleryModal {
    data: IProjectGalery;
    state: Accessor<boolean>;
    setState: Setter<boolean>;
    btnRef: HTMLDivElement;
}

export default function Galery (props:IGalery){

    let btnRef:HTMLDivElement;
    const images:IProjectGalery[] = props.data.detail.galery; 
    const [selected ,setSelected] = createSignal({} as IProjectGalery);
    const [img ,setImg] = createSignal('');
    const [id, setID] = createSignal(0);
    const [count, setCount] = createSignal(0);
    const [modal, setModal] = createSignal(false);

    const SelectImage = (item:IProjectGalery) =>{
        const index = images.findIndex(img => img.id == item.id);
        setID(item.id);
        setCount(index);
        setImg(images[count()].img)
    }

    const OpenModal = () => {
        setSelected(images[count()]);
        setModal(true);
    }

    onMount(()=>{
        setImg(images[count()].img)
        setID(images[count()].id);
        setInterval(()=>{
            const total_items = images.length;
            if(count() < total_items){
                setCount(count() + 1);
                count() === total_items && setCount(0);
                setImg(images[count()].img)
            }
            setID(images[count()].id);
        }, 4000);
    })

    return (
        <>
            <div class={`galery-container ${props.theme.theme}`}>
                <div ref={btnRef!} onClick={ OpenModal } class="main-image">
                    <img  src={img()} elementtiming={''} fetchpriority={'high'} />
                </div>
                <div class="galery">
                    <For each={props.data.detail.galery}>
                        {(item)=>(
                            <div onClick={()=> SelectImage(item) } class="item" classList={{"active":item.id === id()}}>
                                <img src={item.img} elementtiming={''} fetchpriority={'high'} />
                            </div>
                        )}    
                    </For>
                </div>
            </div>
            <GaleryModal btnRef={btnRef!} data={selected()} state={modal} setState={setModal} />
        </>
    );
}


function GaleryModal (props:IGaleryModal) {
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
    
    onMount(()=>{
        console.log("here =>", props.btnRef);
        useHideOnOutsideClick<HTMLDivElement, HTMLDivElement>({
            ref1:modalRef, 
            ref2:props.btnRef, 
            show:props.state, 
            setShow:props.setState,

        }); 
    })

    return (
        <div class={`galery-modal-mask ${hide()}`}>
            <div ref={modalRef!} class="galery-modal">
                <div onClick={ ModalClose } class="modal-close">
                    < i class="ri-close-line"></i>
                </div>
                <div class="modal-image">
                    <img src={props.data.img} alt="" elementtiming={''} fetchpriority={'high'} />
                </div>
                <div class="modal-content">
                    <div class="info">
                        <header>
                            <h2>{props.data.page}</h2>
                            <p>{props.data.project}</p>
                        </header>
                        <div class="description">
                            <p>{props.data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}