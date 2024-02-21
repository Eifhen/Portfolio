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
import { WriteLineEN, WriteLineES } from "./list/writeline.data";
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
        FinanzasPersonalesEN,
        WriteLineEN,
    ], 
    ES:[
        GrowingES,            // id 01
        ProductManagerES,     // id 02 
        QuizzicalES,          // id 03
        TenziesES,            // id 04
        FindYourFilmES,       // id 05
        Project03ES,          // id 06
        ListaDeTareasES,      // id 07
        Camsoft03ES,          // id 08
        BlackJackES,          // id 09
        LegendsAndFantasyES,  // id 10
        ColorSchemeES,        // id 11
        UnitConverterES,      // id 12
        PathStorageES,        // id 13
        PasswordGeneratorES,  // id 14
        FinanzasPersonalesES, // id 15
        WriteLineES,          // id 16
    ],
}