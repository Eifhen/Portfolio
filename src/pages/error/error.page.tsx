import './error.page.desktop.css';
import './error.page.movil.css';
import translate from "../../hooks/translate.hook";



export default function ErrorPage () {
    return (
        <div class="error-page">
            <div class="error-content">
                <h1>Error 404</h1>
                <p>{translate("not-found")}</p>
            </div>
        </div>
    )
}