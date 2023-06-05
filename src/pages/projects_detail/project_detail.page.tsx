import { Navigate,useBeforeLeave,useParams } from '@solidjs/router';
import './project_detail.dekstop.css';
import useAplicationContext from '../../context/aplication.context';
import ProjectDetailHero from './components/hero/project_detail.hero';
import ProjectDetailAbout from './components/about/project_detail.about';
import ProjectDetailTechnologies from './components/technologies/project_detail.page.technologies';
import ProjectDetailReferences from './components/references/project_detail.page.references';
import ProjectDetailOtherProjects from './components/other_projects/project_detail.other_projects';
import useProjectData from '../../hooks/useProjects';
import { createComputed, createEffect, createSignal } from 'solid-js';
import { scrollTop } from '../../hooks/scrollSmooth';


export default function ProjectDetailPage (){
  
    const context = useAplicationContext();
    const params = useParams<{ id:string }>();
    const [lenguage, setLenguage] = createSignal(context.lenguageManager.lenguageStore.lenguage);
    const [pageFade, setPageFade] = createSignal(false);

    const {project, other_projects} = useProjectData({
        lenguage,
        number_of_items: 3,
    })

    if(project === null || project === undefined) {
        return <Navigate href="/error-404" />;
    }

    createComputed(()=>{
        setLenguage(context.lenguageManager.lenguageStore.lenguage)
    })

    createEffect(()=>{
        if(params.id){
            scrollTop();
            setPageFade(true);
        }
    });

    useBeforeLeave((event)=>{
        event.preventDefault();
        setPageFade(false);
        event.retry(true);
    })

    return (
        <div classList={{"pageFade": pageFade()}} class={`project-detail-page ${context.themeManager.themeStore.theme}`}>
            <ProjectDetailHero 
                data={ project() } 
                screen={ context.screenWidth }
                theme={ context.themeManager.themeStore } 
            />
       
            <ProjectDetailAbout
                data={ project()?.detail.about } 
                theme={ context.themeManager.themeStore } 
            />
            
            <ProjectDetailTechnologies
                data={ project()?.detail.technologies!}
            />
           
           <ProjectDetailReferences
                disable={true}
                data={ project()?.detail.references! }
           />

            <ProjectDetailOtherProjects 
                data={ other_projects() }
                theme={ context.themeManager.themeStore } 
            />
        </div>
    )
}