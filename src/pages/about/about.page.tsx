import useAplicationContext from '../../context/aplication.context';
import { AboutData } from '../../data/about/about.data';
import AboutHero from './hero/about.page.hero';
import './about.page.desktop.css';
import AboutSkills from './skills/about.page.skills';
import { SkillsData } from '../../data/skills/skills.data';
import AboutPortfolio from './portfolio/about.page.portfolio';
import AboutQualifications from './qualifications/about.page.qualifications';


export default function AboutPage(){
    const context = useAplicationContext();
    const data = () => AboutData[context.lenguageManager.lenguageStore.lenguage];
    const education = () => AboutData[context.lenguageManager.lenguageStore.lenguage].education;
    const work = () => AboutData[context.lenguageManager.lenguageStore.lenguage].workExpirience;
    const skills = ()=>    SkillsData[context.lenguageManager.lenguageStore.lenguage];
    const portfolio = () => AboutData[context.lenguageManager.lenguageStore.lenguage].portfolio;

    return (
        <div class={`about-page ${context.themeManager.themeStore.theme}`}>
            <AboutHero data={ data() }  theme={ context.themeManager.themeStore }  />
            <AboutQualifications screen={ context.screenWidth() } work={ work() } education={ education() } theme={ context.themeManager.themeStore } />
            <AboutPortfolio data={ portfolio() } theme={ context.themeManager.themeStore } />
            <AboutSkills data={ skills() } theme={ context.themeManager.themeStore } />
            {/* 
    
     
             */}
        </div>
    )
}