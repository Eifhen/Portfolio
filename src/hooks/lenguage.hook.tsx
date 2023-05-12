import { createStore } from "solid-js/store";



export interface ILenguage {
    lenguage: string | "EN" | "ES";
}

export interface ILenguageHook {
    lenguageStore: ILenguage;
    changeLenguage: (lenguage:string) => void;
}



export default function useLenguage() : ILenguageHook {
    const selectedLenguage = localStorage.getItem("lan");
    const defaultLang = selectedLenguage ? selectedLenguage : "EN";
    const [lenguageStore, setLenguageStore] = createStore<ILenguage>({lenguage: defaultLang});

    const changeLenguage = (len:string) => {
        setLenguageStore("lenguage", len);
        localStorage.removeItem("lan");
        localStorage.setItem("lan", len);
    }

    return {lenguageStore, changeLenguage};
}