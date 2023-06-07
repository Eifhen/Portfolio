import { Accessor } from "solid-js";
import { ProjectData } from "../data/projects/project.data";
import { IProjectData } from "../data/projects/project.data.interfaces";
import { useParams } from "@solidjs/router";
import { DesignsAndThemplatesData } from "../data/designs/designs.data";


interface IUseProjectDataProps{
    type: "designs" | "projects";
    lenguage: Accessor<string>;
    number_of_items?: number; // numero de items a retornar por la función otherProjects
}

interface IUseProjectData {
    data: ()=> IProjectData[];
    project: ()=> IProjectData | undefined;
    other_projects: ()=> IProjectData[];
}

export default function useProjectData(props:IUseProjectDataProps) : IUseProjectData{
    const params = useParams<{ id:string }>();
    const number_of_items = props.number_of_items;
    const data = ()=> getData(props.type, props.lenguage());
    
    return {
        data: ()=> data(),
        project: ()=> getProjectByID(data(), Number(params.id)),
        other_projects: ()=> otherProjects(data(), Number(params.id), number_of_items)
    }
}

const getData = (type:string, lenguage:string) : Array<IProjectData> => {
    if(type=="projects"){
        return ProjectData[lenguage];
    }
    if(type=="designs"){
        return DesignsAndThemplatesData[lenguage];
    }

    return [];
}

function getProjectByID(data:IProjectData[], id:number = 0){
    const project = data.find(m => m.id === id);
    return project;
}

function otherProjects (data:IProjectData[], project_id:number, number_of_items:number = 0)  {
    const projects:IProjectData[] = [];
    while(projects.length < number_of_items){
        const random = Math.floor(Math.random() * data.length);
        const random_project = data[random];
        if(random_project.id != project_id){
            if(!projects.some(m=> m.id == random_project.id)){
                projects.push(random_project);
            }
        }
    }
    return  projects;
}

