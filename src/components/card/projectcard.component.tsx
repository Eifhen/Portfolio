import { For, Show } from 'solid-js';
import './css/projectcard.desktop.css';
import './css/projectcard.movil.css';
import './css/projectcard.vertical.desktop.css';
import './css/projectcard.vertical.movil.css';
import translate from '../../hooks/translate.hook';
import { ITheme } from '../../hooks/theme.hook';
import { A } from '@solidjs/router';
import { IProjectData, IProjectTechnologies } from '../../data/projects/project.data.interfaces';


interface IProjectCard {
  data: IProjectData;
  type: 'horizontal' | 'vertical';
  theme: ITheme;
  url?: string;
}

interface IProjectCardData {
    id: number;
    date: string;
    img:string;
    title: string;
    description:string;
    mainTechnologies:IProjectTechnologies[];
    theme?:ITheme;
    url?:string;
}


export default function ProjectCard(props:IProjectCard){

    return (
        <Show when={ props.type === "horizontal" } 
            fallback= {
                <ProjectCardVertical 
                    url={props.url}
                    theme={props.theme}
                    id={props.data.id}
                    date={props.data.date}
                    img={props.data.img}
                    title={props.data.title}
                    description={props.data.description}
                    mainTechnologies={props.data.mainTechnologies}
                />
            }
        >
            <ProjectCardHorizontal 
                url={props.url}
                theme={props.theme}
                id={props.data.id}
                date={props.data.date}
                img={props.data.img}
                title={props.data.title}
                description={props.data.description}
                mainTechnologies={props.data.mainTechnologies}
            />
       </Show>
    );
}


function ProjectCardHorizontal(props:IProjectCardData) {
    
    return (
        <A href={props.url? props.url : "#"} class={`project-card ${props.theme?.theme}`}>
            <img src={props.img} alt="" elementtiming={''} fetchpriority={'high'} />
            <div class="mask">
                <div class="info">
                    <h2 class="title">{ props.title }</h2>
                    <p class="date">{ props.date }</p>
                    <div class="description">
                        <div> { props.description } </div>
                    </div>
                </div>
                <div class="technologies">
                    <For each={props.mainTechnologies} fallback={<>error while loading the card</>}>
                        {(tecnologie, index)=>(
                            <div class="technologie" title={tecnologie.name} 
                                style={{right: `${(index()+1) * 30}px`, "z-index": 2}}
                            >
                                {
                                    tecnologie.type === "icon" ? 
                                    <i class={tecnologie.icon}></i>
                                    : <img src={tecnologie.icon} alt={tecnologie.name} elementtiming={''} fetchpriority={'auto'} />
                                }
                            </div>
                        )}
                    </For>
                    <div class="technologie more" title={translate("more")}>
                        <i class="ri-add-line"></i>
                    </div>
                </div>
            </div>
        </A>
    );
}

function ProjectCardVertical(props:IProjectCardData){
    return (
        <A href={props.url? props.url : "#"} class={`project-card-vertical ${props.theme?.theme}`}>
            <div class="img_content">
                <img src={props.img} alt="" elementtiming={""} fetchpriority={"high"} />
            </div>
            <div class="project-content">
                <div class="info">
                    <h1>{props.title}</h1>
                    <time>{props.date}</time>
                    <p>{props.description}</p>
                    <div class="technologies">
                        <For each={props.mainTechnologies} fallback={<>error while loading the card</>}>
                            {(tecnologie, index)=>(
                                <div class="technologie" title={tecnologie.name} 
                                    style={{right: `${(index()+1.5) * 30}px`, "z-index": 2}}
                                >
                                    {
                                        tecnologie.type === "icon" ? 
                                        <i class={tecnologie.icon}></i>
                                        : <img src={tecnologie.icon} alt={tecnologie.name} elementtiming={''} fetchpriority={'auto'} />
                                    }
                                </div>
                            )}
                        </For>
                        <div class="technologie more" title={translate("more")}>
                            <i class="ri-add-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </A>
    )
}


/**
 *     <A href={props.url? props.url : "#"} class={`project-card-vertical ${props.theme?.theme}`}>
            <div class="card-image">
                <img src={props.img} alt="" elementtiming={''} fetchpriority={'high'} />
            </div>
            <div class="card-info">
                <div class="card-info-container">
                    <div class="info">
                        <h2>{props.title}</h2>
                        <time>{props.date}</time>
                        <p>{props.description}</p>
                        <div class="technologies">
                            <For each={props.mainTechnologies} fallback={<>error while loading the card</>}>
                                {(tecnologie, index)=>(
                                    <div class="technologie" title={tecnologie.name} 
                                        style={{right: `${(index()+1) * 35}px`, "z-index": 2}}
                                    >
                                        {
                                            tecnologie.type === "icon" ? 
                                            <i class={tecnologie.icon}></i>
                                            : <img src={tecnologie.icon} alt={tecnologie.name} elementtiming={''} fetchpriority={'auto'} />
                                        }
                                    </div>
                                )}
                            </For>
                            <div class="technologie more" title={translate("more")}>
                                <i class="ri-add-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </A>
 * 
 * 
 */
