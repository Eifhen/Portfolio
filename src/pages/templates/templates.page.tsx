import TemplateHeader from "./components/templates.page.header";
import '../projects/project.page.css';
import useAplicationContext from "../../context/aplication.context";
import { DesignsAndThemplatesData } from "../../data/designs/designs.data";
import FeaturedProjects from "../projects/components/featured_projects/project.page.featured_projects";
import Sort from "../../hooks/sort-array.hook";
import { IProjectData } from "../../data/projects/project.data.interfaces";
import OtherProjects from "../projects/components/other_projects/projects.other_Projects";




export default function TemplatesPage(){
    const { sortDesc } = Sort<IProjectData>();
    const context = useAplicationContext();
    const data = ()=> DesignsAndThemplatesData[context.lenguageManager.lenguageStore.lenguage];
    const featured_designs = ()=> sortDesc(data()).filter(item => item.highlighted);
    const other_designs = () => sortDesc(data()).filter(item => item.highlighted === false);
  
    
    return(
        <div class={`project-page ${context.themeManager.themeStore.theme}`}>
            <TemplateHeader />

            <FeaturedProjects  
                title="designs"
                data={ featured_designs() } 
                theme={ context.themeManager.themeStore } 
                lenguage={context.lenguageManager.lenguageStore } 
            />
             <OtherProjects 
                title="designs"
                data={ other_designs() } 
                theme={context.themeManager.themeStore} 
                lenguage={context.lenguageManager.lenguageStore} 
            />
        </div>
    )
}