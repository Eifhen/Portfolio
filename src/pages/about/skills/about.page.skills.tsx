import SkillSetTab from '../../../components/skills/skill.component';
import GeneralWave from '../../../components/wave/general-wave.component';
import { ISkillsData } from '../../../data/skills/skills.data';
import { ITheme } from '../../../hooks/theme.hook';
import translate from '../../../hooks/translate.hook';
import './about.skills.desktop.css';
import './about.skills.movil.css';





interface IAboutSkills {
    theme: ITheme;
    data: ISkillsData[];
}

export default function AboutSkills (props: IAboutSkills) {

    return (
        <div class="about-skills">
            <div class="skills_title">
                <h1>{ translate("skills") }</h1>
                <p> { translate("my-main-technologies") } </p>
                <div class="underline"></div>
            </div>
            <div class="skills_content">
                <SkillSetTab data={ props.data } theme={ props.theme }/>
            </div>
        </div>
    )
}