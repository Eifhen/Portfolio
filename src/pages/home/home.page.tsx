
import useAplicationContext from '../../context/aplication.context';
import { SocialMediaData } from '../../data/social-media/social-media.data';
import './css/home.page.desktop.css';
import Hero from './components/hero/home.page.hero';
import { ServicesData } from '../../data/services/services.data';
import { HobbiesData } from '../../data/hobbies/hobbies.data';
import About from './components/about/home.page.about';



export default function HomePage() {
    const context = useAplicationContext();
    const socialMedia = SocialMediaData;
    const services = ServicesData;
    const hobbies = HobbiesData;

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

            <div class="portfolio">

                <div class="testimonials">
                </div>
            </div>
            <div class="contact">

            </div>
        </div>
    )
}