
import { Accessor, Show } from 'solid-js';
import { Images } from '../../../../assets/img/images';
import SocialMedia from '../../../../components/social-media/socialmedia.component';
import UserImage from '../../../../components/userImage/userImage.component';
import { ISocialMediaData } from '../../../../data/social-media/social-media.data';
import { ITheme } from '../../../../hooks/theme.hook';
import translate from '../../../../hooks/translate.hook';
import './hero.desktop.css';
import './hero.movil.css';
import { IServicesData } from '../../../../data/services/services.data';
import MyServices from '../../../../components/services/services.component';
import Wave from '../../../../components/wave/wave.component';


interface IHero {
    theme: ITheme;
    media: ISocialMediaData[];
    services:IServicesData;
    screen: Accessor<number>;
    lenguage: string;
}

export default function Hero (props: IHero) {
    return (
        <Show 
            when={props.screen() >= 840}
            fallback={ 
                <HeroMovil 
                    lenguage={props.lenguage} 
                    services={props.services} 
                    screen={props.screen} 
                    theme={props.theme} 
                    media={props.media} 
                /> }
        >
            <HeroDesktop 
                lenguage={props.lenguage} 
                services={props.services} 
                screen={props.screen} 
                theme={props.theme} 
                media={props.media} 
            />
        </Show>
    );
}

function HeroDesktop (props: IHero) {
    return (
        <div class="hero">
            <div class="container">
                <div class="info">
                    <div class='info-wrapper'>
                        <div class="media">
                            <SocialMedia iconSize="size45" data={props.media} orientation='vertical'/>
                        </div>
                        <div class="intro">
                            <h3>{translate('hi-im').toUpperCase()}</h3>
                            <h2>Gabriel Jiménez</h2>
                            <h3 class="job">FullStack Software Developer</h3>
                            <p>{translate('take-a-look')}</p>
                            <button class="btn-download">{translate("download-cv")}</button>
                        </div>
                    </div>
                </div>
                <div class="user">
                    <UserImage img={Images.Black} color={props.theme} type="left"  />
                </div>
            </div>
            <div class="services">
                <div class="bg-container">
                    <div class="wave-container">
                        <Wave allowTheme={true} theme={props.theme} waveColor='gray' />  
                    </div>
                    <div class="white-space"></div>
                </div>
                <MyServices lenguage={props.lenguage} color={props.theme} width={props.screen} />
            </div>
        </div>
    );
}

function HeroMovil (props: IHero) {
    return (
        <div class="hero-movil">
            <div class="hero-movil-container">
                <div class="intro">
                <div class='intro-wrapper'>
                        <h3>{translate('hi-im').toUpperCase()}</h3>
                        <h2>Gabriel Jiménez</h2>
                        <h3 class="job">FullStack Software Developer</h3>
                        <p>{translate('take-a-look')}</p>
                        <button class="btn-download">{translate("download-cv")}</button>
                </div>
                </div>
                <div class="media">
                    <SocialMedia iconSize="size45" data={props.media} orientation='vertical'/>
                </div>
                <div class="user">
                    <UserImage img={Images.Black} color={props.theme} type="left"  />
                </div>
            </div>
            <div class="services">
                <div class="bg-container">
                    <div class="wave-container">
                        <Wave allowTheme={true} theme={props.theme} waveColor='gray' />  
                    </div>
                    <div class="white-space"></div>
                </div>
                <MyServices lenguage={props.lenguage} color={props.theme} width={props.screen} />
            </div>
        </div>
    )
}