import './socialmedia.desktop.css';
import './socialmedia.movil.css';
import { ITheme } from "../../hooks/theme.hook";
import { ISocialMediaData } from '../../data/social-media/social-media.data';
import { For } from 'solid-js';
import { A } from '@solidjs/router';


interface ISocialMedia {
    orientation: 'vertical' | "horizontal"
    data: ISocialMediaData[];
    iconSize: 'size40' | 'size45';
}

export default function SocialMedia (props: ISocialMedia){

    const RenderItem = (item:ISocialMediaData) => {
        return item.type == "icon" ? <i class={`${item.img}`} /> :
        <img src={item.img}  />
    }

    return (
        <div class={`socialmedia-container ${props.orientation} ${props.iconSize}`}>
            <For each={props.data}>
                {(item)=>(
                    <A href={item.link} title={item.title} target="_blank" class="socialmedia-item">
                        {RenderItem(item)}
                    </A>
                )}
            </For>
        </div>
    )
}