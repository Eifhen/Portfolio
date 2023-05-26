import { Navigate,useParams } from '@solidjs/router';
import './project_detail.dekstop.css';
import { ProjectData } from '../../data/projects/project.data';
import useAplicationContext from '../../context/aplication.context';
import ProjectDetailHero from './components/hero/project_detail.hero';
import ProjectDetailAbout from './components/about/project_detail.about';
import ProjectDetailTechnologies from './components/technologies/project_detail.page.technologies';
import ProjectDetailReferences from './components/references/project_detail.page.references';

export default function ProjectDetailPage (){
    const params = useParams<{ id:string }>();
    const context = useAplicationContext();
    const data = ProjectData;
    const project = () => data[context.lenguageManager.lenguageStore.lenguage].find(m => m.id === Number(params.id));
    
    if(project() === null || project() === undefined) {
        return <Navigate href="/error-404" />;
    }

    return (
        <div class={`project-detail-page ${context.themeManager.themeStore.theme}`}>
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
                data={ project()?.detail.references! }
           />
           
            <div class="other__projects"></div>
        </div>
    )
}