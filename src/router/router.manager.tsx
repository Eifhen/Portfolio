import { Navigate, Outlet, Route, Router, Routes } from '@solidjs/router';
import TestPage from '../pages/test/test.page';
import 'remixicon/fonts/remixicon.css';
import '../assets/css/general.css';
import { AplicationContextProvider } from '../context/aplication.context';
import Layout from '../components/layout/layout.component';
import HomePage from '../pages/home/home.page';
import ProjectPage from '../pages/projects/projects.page';
import ProjectDetailPage from '../pages/projects_detail/project_detail.page';
import ErrorPage from '../pages/error/error.page';
import AboutPage from '../pages/about/about.page';
import TemplatesPage from '../pages/templates/templates.page';
import TemplateDetailPage from '../pages/templates_detail/templates_detail';
import LogoPage from '../pages/test/logo.page';
import { onRouteChange } from '../hooks/scrollSmooth';
import { onMount } from 'solid-js';

export default function RouterManager(){
    return(
        <Router>
            <Routes>
                <Route path="" component={ Layout }>
                    <Route path="/" component={ HomePage }/>
                    <Route path="/home" component={ HomePage }/>
                    <Route path="/projects" component={ ProjectPage } />
                    <Route path="/projects/detail/:id/:project-name" component={ ProjectDetailPage } />                    
                    <Route path="/templates" component={ TemplatesPage } />
                    <Route path="/templates/detail/:id/:template-name" component={ TemplateDetailPage } />
                    <Route path="/about" component={ AboutPage } />

                    { /* Rutas para pruebas */ }
                    <Route path="/test" component={ TestPage } />
                    <Route path="/logo-page" component={ LogoPage } />

                    {/* Error 404 Page */}
                    <Route path="*" component = { ErrorPage }/>
                </Route>      
            </Routes>
        </Router>
    );
}