import { For } from "solid-js";
import { IProjectData } from "../../../../data/projects/project.data.interfaces";
import translate from "../../../../hooks/translate.hook";
import './other_projects.desktop.css';
import './other_projects.movil.css';
import ProjectCard from "../../../../components/card/projectcard.component";
import { ITheme } from "../../../../hooks/theme.hook";
import useProjectNameHook from "../../../../hooks/project-name.hook";
import { A, useNavigate } from "@solidjs/router";
import GeneralWave from "../../../../components/wave/general-wave.component";



interface IOtherProjects {
    data: IProjectData[];
    theme: ITheme;
}

export default function ProjectDetailOtherProjects(props:IOtherProjects){
    const urlName = useProjectNameHook();
    
    return (
        <div class="other-projects">
            <div class="container">
                <div class="header">
                    <div>
                        <h1>{translate("other-projects")}</h1>
                        <div class="underline"></div>
                    </div>
                </div>
                <div class="projects">
                    <For each={props.data}>
                     {(item)=>(
                        <ProjectCard
                            url={`/projects/detail/${item.id}/${urlName(item.title)}`}
                            type='horizontal'
                            theme={props.theme}
                            data={item}
                        />
                     )}
                    </For>
                </div>
                <div class="view__more">
                    <A class="btn btn-view-more" href="/projects">
                        {translate("view-all")}
                    </A>
                </div>
            </div>
            <GeneralWave waveColor="black" theme={props.theme} allowTheme={false}  />
        </div>
    )
}