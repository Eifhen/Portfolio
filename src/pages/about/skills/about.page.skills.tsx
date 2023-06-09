import { For } from 'solid-js';
import SkillSetTab from '../../../components/skills/skill.component';
import GeneralWave from '../../../components/wave/general-wave.component';
import { ISkillsData } from '../../../data/skills/skills.data';
import { ITheme } from '../../../hooks/theme.hook';
import translate from '../../../hooks/translate.hook';
import './about.skills.desktop.css';
import './about.skills.movil.css';
import SkillCard from '../../../components/skill_card/skill_card.component';





interface IAboutSkills {
    theme: ITheme;
    data: ISkillsData[];
}

export default function AboutSkills (props: IAboutSkills) {

    return (
        <div class="about-skills">
            <div class="upper_wave">
                <GeneralWave waveColor='black' reverse={true} allowTheme={false} theme={props.theme} />
            </div>
            <div class="skills_title">
                <p>{ translate("main-technologies") }</p>
                <h1> { translate("my-technical-skills") } </h1>
                <div class="underline"></div>
            </div>
            <div class="skills_content">
                <For each={props.data}>
                    {(item)=>(
                        <SkillCard data={item} theme={props.theme} />
                    )}
                </For>
            </div>
        </div>
    )
}