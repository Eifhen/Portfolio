import Hobbies from "../../../components/hobbies/hobbies.component";
import { IHobbiesData } from "../../../data/hobbies/hobbies.data";
import { ITheme } from "../../../hooks/theme.hook";
import './about.hobbies.css';


interface IAboutHobbies {
    data:IHobbiesData[];
    theme: ITheme;
}

export default function AboutHobbies (props:IAboutHobbies) {


    return (
        <div class="about-hobbies">
            <Hobbies data={ props.data } theme={ props.theme } />
        </div>
    )
}