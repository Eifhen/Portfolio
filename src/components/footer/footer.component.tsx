import { A } from '@solidjs/router';
import { ISocialMediaData } from '../../data/social-media/social-media.data';
import SocialMedia from '../social-media/socialmedia.component';
import './footer.desktop.css';
import './footer.movil.css';
import translate from '../../hooks/translate.hook';
import Logo from '../logo/logo.component';
import Wave from '../wave/wave.component';
import { For } from 'solid-js';
import { RoutesData } from '../../data/routes/routes.data';



interface IFooter {
    data: ISocialMediaData[];
}


export default function Footer(props:IFooter){
    const data = RoutesData;
    return(
        <div class="footer-wrapper">
            <div class="footer-container">
                <div class="footer-section">
                    <div class="content">
                        <div class="navegation">
                            <ul>
                                <For each={data}>
                                    {(route)=>(
                                        <li>
                                            <A activeClass={route.activeClass} href={route.href}>{translate(route.name)}</A>
                                        </li>
                                    )}
                                </For>
                            </ul>
                        </div>
                        <Logo white={true} />
                    </div>
                    <div class="media">
                        <SocialMedia iconSize='size40' orientation="horizontal" data={props.data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
