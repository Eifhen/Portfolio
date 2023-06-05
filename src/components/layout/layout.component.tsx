import { Outlet } from "@solidjs/router"
import useAplicationContext, { AplicationContextProvider } from "../../context/aplication.context"
import Navbar from "../navbar/navbar.component"
import './layout.component.css';
import useScreenWidth from "../../hooks/screenWidth.hook";
import Footer from "../footer/footer.component";
import UpBtn from "../up-btn/up_btn.component";



export default function Layout () {
    return (
        <AplicationContextProvider>
            <LayoutContent />
        </AplicationContextProvider>
    )   
}

function LayoutContent () {
    const context = useAplicationContext();
    
    return (
        <div id="layout-page" class="layout-page">
            <div class={`layout-theme ${context.themeManager.themeStore.theme}`}></div>
            <div class={`layout-content ${context.themeManager.themeStore.theme}`}>
                <header id="main-header" class="header">
                    <Navbar screenWidth={context.screenWidth} color={context.themeManager.themeStore}/>
                </header>
                <main id="main-content" class="content">
                    <Outlet />
                </main>
                <footer id="main-footer" class="footer">
                    <UpBtn theme={ context.themeManager.themeStore } />
                    <Footer data={ context.socialMedia } />
                </footer>
            </div>
        </div>
    );
}