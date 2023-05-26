import { IProjectData } from "../../../../data/projects/project.data.interfaces";
import { ITheme } from "../../../../hooks/theme.hook";
import './project_detail.about.movil.css';
import "./project_detail.about.desktop.css"
import translate from "../../../../hooks/translate.hook";
import { For, Show } from "solid-js";



interface IProjectDetailAbout {
    data: string[] | undefined;
    theme: ITheme;
}


export default function ProjectDetailAbout(props:IProjectDetailAbout){
    return (
        <div class={`about ${props.theme.theme}`}>
            <div class="container">
                <div class="header">
                    <h1>{translate("about-this-project")}</h1>
                    <div class="underline"></div>
                </div>
                <div class="content">
                    <Show when={props.data != undefined}>
                        <For each={props.data}>
                            {(data)=>(
                                <p>
                                    {data}
                                </p>   
                            )}
                        </For>
                    </Show>
                </div>
            </div>
        </div>
    )
}