import { IProjectData, IProjectDataManager } from "../projects/project.data.interfaces"
import { AirbnbCloneEN, AirbnbCloneES } from "./list/airbnb.data"
import { Template01EN, Template01ES } from "./list/template01.data"
import { Template02EN, Template02ES } from "./list/template02.data"
import { Template03EN, Template03ES } from "./list/template03.data"
import { Template04EN, Template04ES } from "./list/template04.data"
import { Template05EN, Template05ES } from "./list/template05.data"
import { Template06EN, Template06ES } from "./list/template06.data"
import { Template07EN, Template07ES } from "./list/template07.data"
import { Template08EN, Template08ES } from "./list/template08.data"
import { Template09EN, Template09ES } from "./list/template09.data"

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

export const DesignsAndThemplatesData: IProjectDataManager = {
    EN: [
        Template09EN,
        Template08EN,
        Template07EN,
        Template06EN,
        Template05EN,
        Template04EN,
        Template03EN,
        Template02EN,
        Template01EN,
        AirbnbCloneEN,
        
    ], 
    ES:[
        Template09ES,
        Template08ES,
        Template07ES,
        Template06ES,
        Template05ES,
        Template04ES,
        Template03ES,
        Template02ES,
        Template01ES,
        AirbnbCloneES

    ],
}