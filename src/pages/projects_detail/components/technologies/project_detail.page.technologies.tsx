import { For } from 'solid-js';
import { IProjectTechnologies } from '../../../../data/projects/project.data.interfaces';
import translate from '../../../../hooks/translate.hook';
import './project_detail.technologies.desktop.css';
import './project_detail.technologies.movil.css';



interface IProjectDetailTechnologies {
    data: IProjectTechnologies[];
}


export default function ProjectDetailTechnologies (props:IProjectDetailTechnologies) {

    const renderImage = (item:IProjectTechnologies) => {
        if(item.type == "image"){
            return (
                <div class="image">
                    <img src={item.icon} title={item.name} alt={item.name} elementtiming={''} fetchpriority={'high'} />
                </div>
            )
        }
        return (
            <i title={item.name} class={`${item.icon}`}></i>
        )
    }

    return (
        <div class="technologies">
            <div class="container">
                <div class="header">
                    <h1>{translate("technologies")}</h1>
                    <div class="underline"></div>
                </div>
                <div class="content">
                    <div class='technologies'>
                        <For each={props.data}>
                            {(item)=>(
                                <div class="technologie" title={item.name}>
                                    {renderImage(item)}
                                    <p>{item.name}</p>
                                </div>    
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    )
}