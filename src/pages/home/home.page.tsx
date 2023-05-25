
import useAplicationContext from '../../context/aplication.context';
import { SocialMediaData } from '../../data/social-media/social-media.data';
import './home.page.desktop.css';
import Hero from './components/hero/home.page.hero';
import { ServicesData } from '../../data/services/services.data';
import { HobbiesData } from '../../data/hobbies/hobbies.data';
import About from './components/about/home.page.about';
import Portfolio from './components/portfolio/hero.page.portfolio';
import { ProjectData } from '../../data/projects/project.data';
import Testimonials from './components/testimonials/home.page.testimonials';
import { TestimonialsData } from '../../data/testimonials/testimonials.data';
import Contact from './components/contact/home.page.contact';



export default function HomePage() {
    const context = useAplicationContext();
    const socialMedia = SocialMediaData;
    const services = ServicesData;
    const hobbies = HobbiesData;
    const projects = ProjectData;
    const testimonies = TestimonialsData;

    const portfolio = ()=> projects[context.lenguageManager.lenguageStore.lenguage].filter(item => item.pin);
    const testimonials = () => testimonies[context.lenguageManager.lenguageStore.lenguage];

    return (
        <div class={`home-page ${context.themeManager.themeStore.theme}`}>
            <Hero
                lenguage={ context.lenguageManager.lenguageStore.lenguage } 
                screen={ context.screenWidth } 
                services={ services }
                media={ socialMedia } 
                theme={ context.themeManager.themeStore } 
            />

            <About
                screen={ context.screenWidth }
                theme={ context.themeManager.themeStore }
                hobbies={ hobbies[context.lenguageManager.lenguageStore.lenguage] }
            />

            <Portfolio
                screen={ context.screenWidth }
                theme= { context.themeManager.themeStore}
                data= { portfolio() }
            />

            <Testimonials
                theme={ context.themeManager.themeStore }
                data= { testimonials() }
            />

            <Contact />
            
        </div>
    )
}