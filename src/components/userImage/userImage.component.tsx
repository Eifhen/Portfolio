import { Show } from "solid-js";
import { ITheme } from "../../hooks/theme.hook";
import './userImage.component.desktop.css';
import './userImage.component.movil.css';




interface IUserImage {
    color:ITheme;
    type: 'right' | 'left' | "square";
    img: string;
    colorAbsolute?: string;
    theme?: 'dark' | "light"; 
}

export default function UserImage(props:IUserImage){

    return (
        <Show when={props.type != "square"} 
              fallback={<SquareImage color={props.color} img={props.img} type={props.type} />}>
            <CircleImage 
                colorAbsolute={props?.colorAbsolute} 
                theme={ props.theme} 
                color={props.color} 
                img={props.img} 
                type={props.type}
            />
        </Show>
    )
}

function CircleImage (props:IUserImage) {
    return(
        <div class={`big-circle ${props.theme ? props.theme : props.color.theme} ${props?.colorAbsolute} ${props.type}`}>
            <div class={`blanck-circle ${props.type} ${props?.colorAbsolute}`}></div>
            <div class="inner-circle">
                <div class="img-container">
                    <img src={props.img} alt="image"  />
                </div>
            </div>
        </div>
    )
}

function SquareImage (props:IUserImage){
    return (
        <div class={`square-image ${props.color.theme}`}>
            <div class="square">
                <div class="square-line"></div>
                <div class="square-line"></div>
                <div class="square-line"></div>
            </div>
            <div class="image">
                <img src={props.img} alt="image"  />
            </div>
        </div>
    )
}