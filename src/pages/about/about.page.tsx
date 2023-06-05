import useAplicationContext from '../../context/aplication.context';
import { AboutData } from '../../data/about/about.data';
import { HobbiesData } from '../../data/hobbies/hobbies.data';
import AboutHero from './hero/about.page.hero';
import AboutHobbies from './hobbies/about.page.hobbies';
import './about.page.desktop.css';
import AboutEducation from './education/about.page.education';
import AboutWork from './work/about.page.work';
import AboutSkills from './skills/about.page.skills';
import { SkillsData } from '../../data/skills/skills.data';
import AboutPortfolio from './portfolio/about.page.portfolio';


export default function AboutPage(){
    const context = useAplicationContext();
    const data = () => AboutData[context.lenguageManager.lenguageStore.lenguage];
    const hobbies = () => HobbiesData[context.lenguageManager.lenguageStore.lenguage]
    const education = () => AboutData[context.lenguageManager.lenguageStore.lenguage].education;
    const work = () => AboutData[context.lenguageManager.lenguageStore.lenguage].workExpirience;
    const skills = ()=>    SkillsData[context.lenguageManager.lenguageStore.lenguage];
    const portfolio = () => AboutData[context.lenguageManager.lenguageStore.lenguage].portfolio;

    return (
        <div class={`about-page ${context.themeManager.themeStore.theme}`}>
            <AboutHero data={ data() }  theme={ context.themeManager.themeStore }  />
            <AboutHobbies data={ hobbies() } theme={ context.themeManager.themeStore } />
            <AboutEducation data={ education() } theme={ context.themeManager.themeStore } />
            <AboutWork data={ work() }  theme={ context.themeManager.themeStore } />
            <AboutSkills data={ skills() } theme={ context.themeManager.themeStore } />
            <AboutPortfolio data={ portfolio() } theme={ context.themeManager.themeStore } />
        </div>
    )
}