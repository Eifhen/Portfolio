import { Outlet, Route, Router, Routes } from '@solidjs/router';
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

export default function RouterManager(){

    
    return(
        <Router>
            <Routes>
                <Route path="/" component={ Layout }>
                    <Route path="/" component={ HomePage }/>
                </Route>

                <Route path="/home" component={ Layout }>
                    <Route path="/" component={ HomePage }/>
                </Route>

                <Route path="/test" component={ Layout }>
                    <Route path="/" component={ TestPage }/>
                </Route>

                <Route path="/projects" component={ Layout }>
                    <Route path="/" component={ ProjectPage }/>
                </Route>

                <Route path="/projects/detail/:id/:project-name" component={ Layout }>
                    <Route path="/" component={ ProjectDetailPage }/>
                </Route>

                <Route path="/templates" component={ Layout }>
                    <Route path="/" component={ TemplatesPage }/>
                </Route>

                <Route path="/templates/detail/:id/:template-name" component={ Layout }>
                    <Route path="/" component={ TemplateDetailPage }/>
                </Route>

                <Route path="/about" component={ Layout }>
                    <Route path="/" component={ AboutPage }/>
                </Route>

                <Route path="" component={ Layout }>
                    <Route path="*" component = { ErrorPage }/>
                </Route>
            </Routes>
        </Router>
    );
}