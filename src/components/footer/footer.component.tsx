import { A } from '@solidjs/router';
import { ISocialMediaData } from '../../data/social-media/social-media.data';
import SocialMedia from '../social-media/socialmedia.component';
import './footer.desktop.css';
import './footer.movil.css';
import translate from '../../hooks/translate.hook';
import Logo from '../logo/logo.component';
import Wave from '../wave/wave.component';



interface IFooter {
    data: ISocialMediaData[];
}


export default function Footer(props:IFooter){

    return(
        <div class="footer-wrapper">
            <div class="footer-container">
                <div class="footer-section">
                    <div class="content">
                        <div class="navegation">
                            <ul>
                                <li>
                                    <A activeClass="active" href="/home">{translate("Home")}</A>
                                </li>
                                <li>
                                    <A activeClass="active" href="/projects">{translate("Projects")}</A>
                                </li>
                                <li>
                                    <A activeClass="active" href="/templates">{translate("Designs & Templates")}</A>
                                </li>
                                <li>
                                    <A href="/home #contact">{translate("Contact")}</A>
                                </li>
                                <li>
                                    <A activeClass="active" href="/about">{translate("About")}</A>
                                </li>
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
