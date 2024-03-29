import { For } from "solid-js";
import { IProjectData } from "../../../../data/projects/project.data.interfaces";
import { ILenguage } from "../../../../hooks/lenguage.hook";
import { ITheme } from "../../../../hooks/theme.hook";
import translate from "../../../../hooks/translate.hook";
import './projects.other_projects.desktop.css';
import './projects.other_projects.movil.css';
import ProjectCard from "../../../../components/card/projectcard.component";
import Wave from "../../../../components/wave/wave.component";
import useProjectNameHook from "../../../../hooks/project-name.hook";
import GeneralWave from "../../../../components/wave/general-wave.component";


interface IOtherProjects {
    data: IProjectData[];
    theme: ITheme;
    lenguage: ILenguage;
    title: string;
}


export default function OtherProjects (props:IOtherProjects){
    const urlName = useProjectNameHook();
    
    return (
        <div class={`other-projects ${props.theme.theme}`}>
            <div class="other-projects-init-wave">
                <GeneralWave reverse={true} waveColor="white" allowTheme={true} theme={props.theme} />
            </div>
            <header>
                <div class="title">
                    <p>{ translate("other") }</p>
                    <h2>{ translate(props.title) }</h2>
                    <div class="underline"></div>
                </div>
            </header>
            <div class="projects-content">
                <For each={ props.data }>
                    {(item)=>(
                        <ProjectCard
                            url={`detail/${item.id}/${urlName(item.title)}`}
                            type='horizontal'
                            theme={props.theme}
                            data={item}
                        />
                    )}
                </For>
            </div>
            <div class="other-project-wave">
                <div class="t-space"></div>
                <div class="t-wave">
                    <Wave waveColor="black" allowTheme={false} theme={props.theme} />
                </div>
            </div>
        </div>
    )
}