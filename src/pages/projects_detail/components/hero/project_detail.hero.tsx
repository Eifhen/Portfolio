import { Accessor, For, Show } from 'solid-js';
import { IProjectData, IProjectLiveInfo, IProjectTechnologies } from '../../../../data/projects/project.data.interfaces';
import { ITheme } from '../../../../hooks/theme.hook';
import './project.detail.hero.desktop.css';
import './project_detail.hero.movil.css';
import { A } from '@solidjs/router';
import translate from '../../../../hooks/translate.hook';
import Galery from '../../../../components/galery/galery.component';


interface IProjectDetailHero {
    data: IProjectData | undefined | null;
    theme: ITheme;
    screen: Accessor<number>;
}

interface IProjectDetailHeroResponsive {
    info: IProjectDetailHero
}

export default function ProjectDetailHero (props:IProjectDetailHero) {
    return (
        <Show 
            when={props.screen() >= 1100}
            fallback={ <ProjectDetailHeroMovil info={props} /> }
        >
          <ProjectDetailHeroDesktop info={props} />
        </Show>
    )
}


function ProjectDetailHeroDesktop (props:IProjectDetailHeroResponsive) {

    const renderLiveIcon = (item:IProjectLiveInfo) => {
        if(item.type === "image"){
            return (
                <div class="info-img">
                    <img src={item.icon} elementtiming={''} fetchpriority={'high'} />
                </div>
            )
        }
        return (
            <div class={`info-img ${item.icon === "live-demo" ? "demo" : ""}`}>
                <i class={item.icon}></i>
            </div>
        )
    }

    const getData = () => {
        console.log("data =>", props.info.data);
        if(props.info.data){
            return props.info.data;
        }
        return {} as IProjectData;
    }

    return (
        <div class="hero">
            <div class="wrapper">
                <div class="container">
                    <div class="info-container">
                        <div class="info">
                            <h1>{ props.info.data?.title }</h1>
                            <p>{ props.info.data?.description }</p>
                            <div class="live-info">
                                <time>{props.info.data?.date}</time>
                                <For each={props.info.data?.detail.liveInfo}>
                                    {(item)=>(
                                        <A target='_blank' href={item.link} class="live-item">
                                            { renderLiveIcon(item) }
                                            <p>{item.nombre}</p>    
                                        </A>
                                    )}
                                </For>
                            </div>
                        </div>
                    </div>
                    <div class="project-detail-galery">
                        <Galery data={getData()} theme={props.info.theme} />                           
                    </div>
                </div>
                <div class="main-technologies">
                    <div class='title'>
                        <h2>{translate("main-tech")}</h2>
                    </div>
                    <div class="technologies">
                        <For each={props.info.data?.mainTechnologies} fallback={<>error while loading the card</>}>
                            {(tecnologie, index)=>(
                                <div class="technologie" title={tecnologie.name} 
                                    style={{right: `${(index()+1) * 35}px`, "z-index": index()+1}}
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
    )
}

function ProjectDetailHeroMovil (props:IProjectDetailHeroResponsive) {
    
    const renderLiveIcon = (item:IProjectLiveInfo) => {
        if(item.type === "image"){
            return (
                <div class="info-img">
                    <img src={item.icon} elementtiming={''} fetchpriority={'high'} />
                </div>
            )
        }
        return (
            <div class={`info-img ${item.icon === "live-demo" ? "demo" : ""}`}>
                <i class={item.icon}></i>
            </div>
        )
    }

    const getData = () => {
        if(props.info.data){
            return props.info.data;
        }
        return {} as IProjectData;
    }

    return (
        <div class="hero-movil">
            <div class="wrapper">
                <div class="detail-info">
                    <div class="info">
                        <div>
                            <h1>{ props.info.data?.title }</h1>
                            <p>{ props.info.data?.description }</p>
                        </div>
                        <div class="live-info">
                            <time>{props.info.data?.date}</time>
                            <For each={props.info.data?.detail.liveInfo}>
                                {(item)=>(
                                    <A target='_blank' href={item.link} class="live-item">
                                        { renderLiveIcon(item) }
                                        <p>{item.nombre}</p>    
                                    </A>
                                )}
                            </For>
                        </div>
                    </div>
                    <div class="main-technologies">
                        <div class='title'>
                            <h2>{translate("main-tech")}</h2>
                        </div>
                        <div class="technologies">
                            <For each={props.info.data?.mainTechnologies} fallback={<>error while loading the card</>}>
                                {(tecnologie, index)=>(
                                    <div class="technologie" title={tecnologie.name} 
                                        style={{right: `${(index()+1) * 35}px`, "z-index": index()+1}}
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
                <div class="detail-galery">

                </div>
            </div>
        </div>
    )
}