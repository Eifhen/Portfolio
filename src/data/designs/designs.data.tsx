import { IProjectData, IProjectDataManager } from "../projects/project.data.interfaces"
import { AirbnbCloneEN, AirbnbCloneES } from "./list/airbnb.data"
import { Template01EN, Template01ES } from "./list/template01.data"
import { MyFavoriteCityEN, MyFavoriteCityES } from "./list/myfavoritecity.data"
import { PizzeriaEN, PizzeriaES } from "./list/pizzeria.data"
import { LivingTheSimpleLifeEN, LivingTheSimpleLifeES } from "./list/living-the-simple-life.data"
import { ParqueSplashEN, ParqueSplashES } from "./list/parque-splash.data"
import { BasicBlogEN, BasicBlogES } from "./list/basic-blog.data"
import { MountainsEN, MountainsES } from "./list/mountains.data"
import { SantaCruzBankEN, SantaCruzBankES } from "./list/santa-cruz-bank.data"
import { ScotiaBankEN, ScotiaBankES } from "./list/scotia-bank.data"

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
        ScotiaBankEN,
        SantaCruzBankEN,
        MountainsEN,
        BasicBlogEN,
        ParqueSplashEN,
        LivingTheSimpleLifeEN,
        PizzeriaEN,
        MyFavoriteCityEN,
        Template01EN,
        AirbnbCloneEN,
        
    ], 
    ES:[
        ScotiaBankES,
        SantaCruzBankES,
        MountainsES,
        BasicBlogES,
        ParqueSplashES,
        LivingTheSimpleLifeES,
        PizzeriaES,
        MyFavoriteCityES,
        Template01ES,
        AirbnbCloneES

    ],
}