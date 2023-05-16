import { Images } from "../../assets/img/images";
import { GrowingEN, GrowingES } from "./list/growing.data";
import { ProjectManagerEN, ProjectManagerES } from "./list/project_manager.data";
import { QuizzicalEN, QuizzicalES } from "./list/quizzical.data";
import { TenziesEN, TenziesES } from "./list/tenzies.data";
import { IProjectData, IProjectDataManager } from "./project.data.interfaces";


const empty_obj:IProjectData = {
    id:0,
    pin: false,
    title: "",
    description: "",
    date: "12 / 2020 | 04 / 2022",
    img:"",
    highlighted:false,
    mainTechnologies: [],
    detail:{
        about: [],
        technologies: [],
        references: [],
        galery: [],
        liveInfo: []
    }
}

export const ProjectData: IProjectDataManager = {
    EN: [
        GrowingEN,
        ProjectManagerEN,
        QuizzicalEN,
        TenziesEN,
    ], 
    ES:[
        GrowingES,
        ProjectManagerES,
        QuizzicalES,
        TenziesES,
    ],
}