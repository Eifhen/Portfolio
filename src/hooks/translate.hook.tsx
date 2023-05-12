import useAplicationContext from "../context/aplication.context";
import { lenguageDataEN, } from "../data/lenguage/lenguage.data.EN";
import { lenguageDataES } from "../data/lenguage/lenguage.data.ES";


interface ITranslate {
    key:string;
}

export default function translate(key:string) {

    const data = key.toLowerCase();
    const context = useAplicationContext();
    const { lenguageStore } = context.lenguageManager;
    return lenguageStore.lenguage == "EN"? lenguageDataEN[data]: lenguageDataES[data];
}