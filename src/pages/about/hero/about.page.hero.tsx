import { For } from 'solid-js';
import { IAboutData } from '../../../data/about/about.data';
import UserImage from '../../../components/userImage/userImage.component';
import { ITheme } from '../../../hooks/theme.hook';
import { Images } from '../../../assets/img/images';
import './about.hero.desktop.css';
import './about.hero.movil.css';


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
                        <h1>{props.data.title}</h1>
                        <div class="underline"></div>
                    </header>
                    <div class="info">
                        <For each={props.data.description}>
                            {(item)=>(
                                <p>{item}</p>
                            )}
                        </For>
                    </div>
                </div>
                <div class="user-image">
                    <UserImage img={ Images.user.foto_turtle_neck } color={props.theme } type='square' />                
                </div>
            </div>
        </div>
    )
}