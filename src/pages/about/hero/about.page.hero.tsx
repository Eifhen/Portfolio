import { For } from 'solid-js';
import { IAboutData } from '../../../data/about/about.data';
import UserImage from '../../../components/userImage/userImage.component';
import { ITheme } from '../../../hooks/theme.hook';
import { Images } from '../../../assets/img/images';
import './about.hero.desktop.css';
import './about.hero.movil.css';
import GeneralWave from '../../../components/wave/general-wave.component';


interface IAboutHero {
    data: IAboutData;
    theme: ITheme;
} 

export default function AboutHero (props:IAboutHero) {
    return (
        <div class="hero">
            <div class="grid-container">
                <div class="description">
                    <header>
                        <small>{props.data.hero.pageTitle}</small>
                        <h2>{props.data.hero.subtitle}</h2>
                        <h1>{props.data.hero.title}</h1>
                        <div class="underline"></div>
                    </header>
                    <div class="info">
                        <For each={props.data.hero.description}>
                            {(item)=>(
                                <p>{item}</p>
                            )}
                        </For>
                    </div>
                    <div class="offers">
                        <For each={props.data.hero.offerts}>
                            {(item)=>(
                                <div class="offer-item">
                                    <i class={item.icon}></i>
                                    <span>{item.title}</span>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
                <div class="user-image">
                    <UserImage img={ Images.user.foto_turtle_neck } color={props.theme } type='square' />                
                </div>
            </div>
            <GeneralWave waveColor='white' reverse={true} theme={props.theme } allowTheme={true} />
        </div>
    )
}