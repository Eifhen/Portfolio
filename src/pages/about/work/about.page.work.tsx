import RenderCorriculumnCards from "../../../components/cv_card/cv_card.component";
import GeneralWave from "../../../components/wave/general-wave.component";
import { IEducationAndWork } from "../../../data/about/about.data";
import { ITheme } from "../../../hooks/theme.hook";
import './about.work.desktop.css';
import './about.work.movil.css';

interface IAboutWork {
    data: IEducationAndWork;
    theme: ITheme;
}

export default function AboutWork(props: IAboutWork){

    return (
        <div class="work">
            <div class="grid-container">
                <div class="title">
                    <h1>
                        <i class="ri-briefcase-fill"></i>
                        {props.data.title}
                    </h1>
                    <p>{props.data.subtitle}</p>
                </div>
                <div class="content">
                    <RenderCorriculumnCards type="work" data={ props.data.items } />
                </div>
            </div>
            <GeneralWave waveColor="whiteEE" allowTheme={true} theme={props.theme} />
        </div>
    )
}


