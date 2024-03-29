import { Accessor, For, Show } from 'solid-js';
import { Images } from '../../../../assets/img/images';
import UserImage from '../../../../components/userImage/userImage.component';
import { IHobbiesData } from '../../../../data/hobbies/hobbies.data';
import { ITheme } from '../../../../hooks/theme.hook';
import translate from '../../../../hooks/translate.hook';
import './about.desktop.css';
import './about.movil.css';
import { A } from '@solidjs/router';
import { IAboutData, IAboutHeroOffers } from '../../../../data/about/about.data';


interface IAbout {
    offer: IAboutHeroOffers[];
    theme: ITheme;
    screen: Accessor<number>;
}

interface  IAboutSize {
    offer: IAboutHeroOffers[];
    theme: ITheme;
}

export default function About (props:IAbout) {

    return (
        <Show 
            when={props.screen() >= 660}
            fallback={ <AboutMovil theme={props.theme} offer={props.offer} /> }
        >
            <AboutDesktop theme={props.theme} offer={props.offer} />
        </Show>
    );
}

function AboutDesktop (props:IAboutSize) {
    return (
        <div class="about">
            <div class="content">
                <div class="user--image">
                    <UserImage img={Images.user.foto_pajon} color={props.theme} type="right" />
                </div>
                <div class="content--info">
                    <div class="title">
                        <h2>{ translate("about-me") }</h2>
                        <p>{ translate("about-intro") }</p>
                    </div>
                    <div class="interests">
                        <h2>{ translate("why-hire-me") }</h2>
                        <p>{ translate("offer") }</p>
                        <div class="list">
                            <For each={props.offer}>
                                {(item)=>(
                                    <div class="list--item">
                                        <div class="icon">
                                            <i class={item.icon}></i> 
                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                )}
                            </For>
                        </div>
                        <A href="/about" class="btn btn-see-more">
                            {translate("see-more")}
                        </A>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AboutMovil (props:IAboutSize) {
    return (
        <div class="about-movil">
            <div class="content">
                <div class="title">
                    <h2>{ translate("about-me") }</h2>
                    <p>{ translate("about-intro") }</p>
                </div>
                <div class="user--image">
                    <UserImage img={Images.user.foto_pajon} color={props.theme} type="right" />
                </div>
                <div class="interests">
                    <h2>{ translate("why-hire-me") }</h2>
                    <p>{ translate("offer") }</p>
                    <div class="list">
                        <For each={props.offer}>
                            {(item)=>(
                                <div class="list--item">
                                    <div class="icon">
                                        <i class={item.icon}></i> 
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                            )}
                        </For>
                    </div>
                    <A href="/about" class="btn btn-see-more">
                        {translate("see-more")}
                    </A>
                </div>
            </div>
        </div>
    )
}