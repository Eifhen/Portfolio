import { For, createSignal, onMount } from 'solid-js';
import { ISkillData, ISkillsData } from '../../data/skills/skills.data';
import { ITheme } from '../../hooks/theme.hook';
import './skill.desktop.css';
import './skill.movil.css';


interface ISkillSet {
   data: ISkillsData[];
   theme: ITheme;
}

export default function SkillSetTab(props:ISkillSet){

    const [count, setCount] = createSignal(0);
    const [selected, setSelected] = createSignal(props.data[0]);
    

    const SelectCategory = (item:ISkillsData) => {
        setSelected(item);
        const index = props.data.findIndex(data => data.title === item.title);
        setCount(index);
    }

    const IsSelected = (item:ISkillsData) => {
        return item.title === selected().title;
    }

    const RenderImg = (item: ISkillData) => {
        if(item.type == "img"){
            return <img src={item.icon}  />
        }
        if(item.type == "icon"){
            return <i class={item.icon} />
        }
        return (<></>)
    }

    // transición en las opciones
    // onMount(()=>{
    //     setInterval(()=>{
    //         const total_items = props.data.length;
    //         if(count() < total_items){
    //             setCount(count() + 1);
    //             count() === total_items && setCount(0);
    //             setSelected(props.data[count()]);
    //         }
    //     }, 5000);
    // })

    return (
        <div class={`skillset-container ${props.theme.theme}`}>
            <div class="skillset-tab-header">
                <For each={props.data} fallback={<>error</>}>
                    {(item)=>(
                        <div  
                            class="skill-category"
                            classList={{"active": IsSelected(item)}}
                            onClick={()=> SelectCategory(item)}
                        >   
                            <div class="skill-category-info">
                                <i class={item.icon} />
                                <h2>
                                    {item.title}
                                </h2> 
                            </div>
                        </div>
                    )}
                </For>
            </div>
            <div class="skillset-tab-content">
                <For each={selected().list}>
                    {(item)=>(
                        <div class="skillset-tab-item">
                            <div class="header">
                                {RenderImg(item)}
                                <h2>{item.title}</h2>
                            </div>
                            <div class="content">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    )
}