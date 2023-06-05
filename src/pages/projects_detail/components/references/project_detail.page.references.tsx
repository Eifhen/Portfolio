import { For, Show } from "solid-js";
import { IProjectReferences } from "../../../../data/projects/project.data.interfaces";
import translate from "../../../../hooks/translate.hook";
import './project_detail.references.desktop.css';
import './project_detail.references.movil.css';




interface IProjectDetailReferences {
    data: IProjectReferences[];
    disable: boolean;
}

export default function ProjectDetailReferences(props:IProjectDetailReferences){
    return (
        <Show when={props.disable === false && props.data.length > 0}>    
            <div class="references">
                <div class="container">
                    <div class="header">
                        <h1>{translate("references")}</h1>
                        <div class="underline"></div>
                    </div>
                    <div class="references-content">
                        <For each={ props.data }>
                            {(item)=>(
                                <div class="reference-item">
                                    <div class="name">
                                        <h2>{item.name}</h2>
                                        <p>{item.title}</p>
                                    </div>
                                    <div class="contact-info">
                                        <div class="icon">
                                            <i class={item.icon}></i>
                                        </div>
                                        <p>{item.phone}</p>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </Show>
    )
}