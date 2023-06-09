

import { For } from 'solid-js';
import { ISkillData, ISkillsData } from '../../data/skills/skills.data';
import { ITheme } from '../../hooks/theme.hook';
import './skill_card.desktop.css';
import './skill_card.movil.css';



interface ISkillCard {
    data: ISkillsData;
    theme: ITheme;
}

export default function SkillCard (props:ISkillCard){

    const RenderImg = (item: ISkillData) => {
        if(item.type == "img"){
            return <img src={item.icon}  />
        }
        if(item.type == "icon"){
            return <i class={item.icon} />
        }
        return (<></>)
    }

    return  (
        <div class={`skills_card ${props.theme.theme}`}>
            <div class="header">
                <i class={`${props.data.icon}`}></i>
                <h1>{props.data.title}</h1>
            </div>
            <div class="skill_list">
                <For each={props.data.list}>
                    {(item)=>(
                        <div class="skill_item">
                            <div class="circle">
                                { RenderImg(item) }
                            </div>
                            <p>{item.title}</p>
                        </div>
                    )}
                </For>
            </div>
        </div>
    )
}