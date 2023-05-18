import { BlackJackEN, BlackJackES } from "./list/blackjack.data";
import { Camsoft03EN, Camsoft03ES } from "./list/camsoft03.data";
import { ColorSchemeEN, ColorSchemeES } from "./list/color_scheme.data";
import { FinanzasPersonalesEN, FinanzasPersonalesES } from "./list/finanzas_personales.data";
import { FindYourFilmEN, FindYourFilmES } from "./list/find_your_film.data";
import { GrowingEN, GrowingES } from "./list/growing.data";
import { LegendsAndFantasyEN, LegendsAndFantasyES } from "./list/lengeds_and_fantasy.data";
import { ListaDeTareasEN, ListaDeTareasES } from "./list/lista_de_tareas.data";
import { PasswordGeneratorEN, PasswordGeneratorES } from "./list/password_generator.data";
import { PathStorageEN, PathStorageES } from "./list/pathstorage.data";
import { Project03EN, Project03ES } from "./list/project03.data";
import { ProductManagerEN, ProductManagerES } from "./list/project_manager.data";
import { QuizzicalEN, QuizzicalES } from "./list/quizzical.data";
import { TenziesEN, TenziesES } from "./list/tenzies.data";
import { UnitConverterEN, UnitConverterES } from "./list/unit_converter.data";
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
        ProductManagerEN,
        QuizzicalEN,
        TenziesEN,
        FindYourFilmEN,
        Project03EN,
        ListaDeTareasEN,
        Camsoft03EN,
        BlackJackEN,
        LegendsAndFantasyEN,
        ColorSchemeEN,
        UnitConverterEN,
        PathStorageEN,
        PasswordGeneratorEN,
        FinanzasPersonalesEN
        
    ], 
    ES:[
        GrowingES,
        ProductManagerES,
        QuizzicalES,
        TenziesES,
        FindYourFilmES,
        Project03ES,
        ListaDeTareasES,
        Camsoft03ES,
        BlackJackES,
        LegendsAndFantasyES,
        ColorSchemeES,
        UnitConverterES,
        PathStorageES,
        PasswordGeneratorES,
        FinanzasPersonalesES,

    ],
}