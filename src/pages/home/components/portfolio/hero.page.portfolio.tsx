import { Accessor } from 'solid-js';
import { ITheme } from '../../../../hooks/theme.hook';
import './portfolio.desktop.css';
import './portfolio.movil.css';
import { IProjectData } from '../../../../data/projects/project.data';



interface IPortfolio {
    theme : ITheme;
    screen: Accessor<number>;
    data: IProjectData[];
}



export default function Portfolio (props:IPortfolio) {
    return (
        <div class="portfolio">
        </div>
    )
}