import translate from '../../../hooks/translate.hook';
import '../../projects/components/header/projects.haeder.desktop.css';
import '../../projects/components/header/projects.header.movil.css';



export default function TemplateHeader () {

    return (
        <div class="header">
        <div class="content">
            <div class="icon">
                <i class="ri-palette-fill"></i>
            </div>
            <div class="info">
                <h2>{translate("my-templates-&-designs")}</h2>
                <p>{translate("projects-intro")}</p>
            </div>
        </div>
    </div>
    )
}