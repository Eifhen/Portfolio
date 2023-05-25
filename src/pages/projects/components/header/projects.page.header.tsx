import { ITheme } from '../../../../hooks/theme.hook';
import translate from '../../../../hooks/translate.hook';
import './projects.haeder.desktop.css';
import './projects.header.movil.css';




export default function ProjectHeader () {
    return (
        <div class="header">
            <div class="content">
                <div class="icon">
                    <i class="ri-terminal-box-line"></i>
                </div>
                <div class="info">
                    <h2>{translate("my-projects")}</h2>
                    <p>{translate("projects-intro")}</p>
                </div>
            </div>
        </div>
    )
}