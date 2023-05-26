import { IProjectReferences } from "../../../../data/projects/project.data.interfaces";
import './project_detail.references.desktop.css';
import './project_detail.references.movil.css';




interface IProjectDetailReferences {
    data: IProjectReferences[];
}

export default function ProjectDetailReferences(props:IProjectDetailReferences){
    return (
        <div class="references">
          
        </div>
    )
}