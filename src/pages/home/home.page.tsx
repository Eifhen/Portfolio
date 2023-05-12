
import useAplicationContext from '../../context/aplication.context';
import { SocialMediaData } from '../../data/social-media/social-media.data';
import './css/home.page.desktop.css';
import Hero from './components/hero/home.page.hero';
import { ServicesData } from '../../data/services/services.data';



export default function HomePage() {
    const context = useAplicationContext();
    const socialMedia = SocialMediaData;
    const services = ServicesData;

    return (
        <div class={`home-page ${context.themeManager.themeStore.theme}`}>
            <Hero
                lenguage={ context.lenguageManager.lenguageStore.lenguage } 
                screen={context.screenWidth} 
                services={ services }
                media={ socialMedia } 
                theme={ context.themeManager.themeStore } 
            />
            <div class="about">

            </div>
            <div class="portfolio">

                <div class="testimonials">
                </div>
            </div>
            <div class="contact">

            </div>
        </div>
    )
}