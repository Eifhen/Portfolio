import { Accessor, Setter, createSignal } from "solid-js";
import translate from "../../hooks/translate.hook";
import './qualification_switcher.css';


export interface IQualificationSwitcher {
    switcher: Accessor<"education" | "experience">;
    setSwitcher: Setter<"education" | "experience">
    className?:string;
}

export default function QualificationSwitcher(props:IQualificationSwitcher){

    const handleSwitcher = (type:string) => {
        if(type == "education" || type == "experience"){
            props.setSwitcher(type);
        }
    }

    return (
        <div class={`qualification_switcher ${props?.className}`}>
            <div onClick={()=> handleSwitcher("education") } class="item" classList={{"active": props.switcher() === "education"}}>
                <i class="ri-graduation-cap-fill"></i>
                <h2>{translate("education")}</h2>
            </div>
            <div onClick={()=> handleSwitcher("experience") } class="item" classList={{"active": props.switcher() === "experience"}}>
                <i class="ri-briefcase-fill"></i>
                <h2>{translate("experience")}</h2>
            </div>
        </div>
    )
}