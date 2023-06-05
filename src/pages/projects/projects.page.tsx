import './project.page.css';
import useAplicationContext from "../../context/aplication.context";
import ProjectHeader from './components/header/projects.page.header';
import FeaturedProjects from './components/featured_projects/project.page.featured_projects';
import { ProjectData } from '../../data/projects/project.data';
import OtherProjects from './components/other_projects/projects.other_Projects';



export default function ProjectPage () {
    const context = useAplicationContext();
    const featured_projects = () => ProjectData[context.lenguageManager.lenguageStore.lenguage].filter(item => item.highlighted);
    const other_projects = () => ProjectData[context.lenguageManager.lenguageStore.lenguage].filter(item => item.highlighted === false);
  
    
    return (
        <div id="header" class={`project-page ${context.themeManager.themeStore.theme}`}>
            <ProjectHeader />

            <FeaturedProjects  
                data={ featured_projects() } 
                theme={ context.themeManager.themeStore } 
                lenguage={context.lenguageManager.lenguageStore } 
            />

            <OtherProjects 
                data={ other_projects() } 
                theme={context.themeManager.themeStore} 
                lenguage={context.lenguageManager.lenguageStore} 
            />
        </div>
    )
}