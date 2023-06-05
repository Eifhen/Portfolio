
import RenderCorriculumnCards from '../../../components/cv_card/cv_card.component';
import { IEducationAndWork } from '../../../data/about/about.data';
import { ITheme } from '../../../hooks/theme.hook';
import './about.education.desktop.css';
import './about.education.movil.css';


interface IAboutEducation {
    data: IEducationAndWork;
    theme: ITheme;
}

export default function AboutEducation(props: IAboutEducation){


    return (
        <div class="education">
            <div class="grid-container">
                <div class="title">
                    <h1>
                        <i class="ri-graduation-cap-fill"></i>
                        {props.data.title}
                    </h1>
                    <p>{props.data.subtitle}</p>
                </div>
                <div class="content">
                    <RenderCorriculumnCards type="education" data={ props.data.items } />
                </div>
            </div>
        </div>
    )
}


