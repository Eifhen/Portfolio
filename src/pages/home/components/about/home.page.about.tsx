import { Accessor, For, Show } from 'solid-js';
import { Images } from '../../../../assets/img/images';
import UserImage from '../../../../components/userImage/userImage.component';
import { IHobbiesData } from '../../../../data/hobbies/hobbies.data';
import { ITheme } from '../../../../hooks/theme.hook';
import translate from '../../../../hooks/translate.hook';
import './about.desktop.css';
import './about.movil.css';
import { A } from '@solidjs/router';


interface IAbout {
    hobbies: IHobbiesData[];
    theme: ITheme;
    screen: Accessor<number>;
}

interface  IAboutSize {
    hobbies: IHobbiesData[];
    theme: ITheme;
}

export default function About (props:IAbout) {

    return (
        <Show 
            when={props.screen() >= 660}
            fallback={ <AboutMovil theme={props.theme} hobbies={props.hobbies} /> }
        >
            <AboutDesktop theme={props.theme} hobbies={props.hobbies} />
        </Show>
    );
}

function AboutDesktop (props:IAboutSize) {
    return (
        <div class="about">
            <div class="content">
                <div class="user--image">
                    <UserImage img={Images.Pajon} color={props.theme} type="right" />
                </div>
                <div class="content--info">
                    <div class="title">
                        <h2>{ translate("about-me") }</h2>
                        <p>{ translate("about-intro") }</p>
                    </div>
                    <div class="interests">
                        <h2>{ translate("my-interests") }</h2>
                        <div class="list">
                            <For each={props.hobbies}>
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
                    <UserImage img={Images.Pajon} color={props.theme} type="right" />
                </div>
                <div class="interests">
                    <h2>{ translate("my-interests") }</h2>
                    <div class="list">
                        <For each={props.hobbies}>
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