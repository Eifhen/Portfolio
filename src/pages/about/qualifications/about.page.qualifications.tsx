import { createSignal } from "solid-js";
import GeneralWave from "../../../components/wave/general-wave.component";
import { IEducationAndWork } from "../../../data/about/about.data";
import { ITheme } from "../../../hooks/theme.hook";
import translate from "../../../hooks/translate.hook";
import './about.page.qualifications.desktop.css';
import './about.page.qualifications.movil.css';
import QualificationSwitcher from "../../../components/qualification-switcher/qualification_switcher.component";
import RenderCorriculumnCards from "../../../components/cv_card/cv_card.component";
import UserImage from "../../../components/userImage/userImage.component";
import { Images } from "../../../assets/img/images";



export interface IAboutQualifications {
    theme: ITheme;
    work: IEducationAndWork;
    education: IEducationAndWork;
    screen: number;
}

export default function AboutQualifications (props: IAboutQualifications){

    const [switcher, setSwitcher] = createSignal<"education" | "experience">("education");
    const getData = () => {
        switch(switcher()){
            case "education": 
                return props.education.items;
            case "experience":
                return props.work.items;
        }
    }

    return (
        <div class="qualifications">
            <div class="upper_wave">
                <GeneralWave waveColor='white' reverse={true} theme={ props.theme } allowTheme={true} />
            </div>
            <div class="info">
                <header>
                    <div class="title">
                        <p>{ translate("qualifications")}</p>
                        <h1 >{ translate("education-and-experience") }</h1>
                        <div class="underline"></div>
                    </div>
                </header>
                <div class="qualification_panel">
                    <div class="photo">
                        <UserImage 
                            img={Images.user.foto_pajon} 
                            type="right" 
                            color={props.theme} 
                            colorAbsolute="bg-black"  
                            theme="dark"
                        />
                        <QualificationSwitcher switcher={ switcher } setSwitcher={ setSwitcher } />
                    </div>
                    <div class="education">
                        <RenderCorriculumnCards type={switcher()} data={ getData() } />
                    </div>
                </div>
            </div>
        </div>
    )
}
