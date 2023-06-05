import { Accessor, For } from 'solid-js';
import { ITheme } from '../../../../hooks/theme.hook';
import './portfolio.desktop.css';
import './portfolio.movil.css';
import { IProjectData } from '../../../../data/projects/project.data.interfaces';
import translate from '../../../../hooks/translate.hook';
import { A } from '@solidjs/router';
import ProjectCard from '../../../../components/card/projectcard.component';
import useProjectNameHook from '../../../../hooks/project-name.hook';


interface IPortfolio {
    theme : ITheme;
    screen: Accessor<number>;
    data: IProjectData[];
}



export default function Portfolio (props:IPortfolio) {
    const urlName = useProjectNameHook();

    return (
        <div class={`portfolio ${props.theme.theme}`}>
            <div class="content">
                <div class="header">
                    <div class="title">
                        <p>{translate("my-portfolio")}</p>
                        <h2>{translate("recent-works")}</h2>
                        <div class="underline"></div>
                    </div>
                    <div class="links">
                        <A href="#">{translate("see-all-projects")}</A>
                        <A href="#">{translate("web-designs")}</A>
                    </div>
                </div>
                <div class="projects">
                    <div class='container'>
                        <For each={ props.data }>
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
                </div>
                <div class="view--more">
                    <A class="btn btn-view-more" href="/projects">
                        {translate("view-all")}
                    </A>
                </div>
            </div>
        </div>
    )
}