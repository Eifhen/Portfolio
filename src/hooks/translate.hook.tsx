import useAplicationContext from "../context/aplication.context";
import { lenguageDataEN, } from "../data/lenguage/lenguage.data.EN";
import { lenguageDataES } from "../data/lenguage/lenguage.data.ES";
import useLenguage from "./lenguage.hook";


interface ITranslate {
    key:string;
}

export default function translate(key:string) {
    const data = key.toLowerCase();
    const context = useAplicationContext();
    const {lenguageStore} = context.lenguageManager;
    return lenguageStore.lenguage == "EN"? lenguageDataEN[data]: lenguageDataES[data];
}

export function translateElement(key:string){
    const data = key.toLowerCase();
    const {lenguageStore} = useLenguage();
    return lenguageStore.lenguage == "EN"? lenguageDataEN[data]: lenguageDataES[data];
}

export function translateWithLan(key:string, lan:string){
    const data = key.toLowerCase();
    return lan == "EN"? lenguageDataEN[data]: lenguageDataES[data];
}