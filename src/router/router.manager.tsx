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

export default function RouterManager(){

    return(
        <Router>
            <Routes>
                <Route path="" component={ Layout }>
                    <Route path="/" component={ HomePage }/>
                    <Route path="/test" component={ TestPage }/>
                    <Route path="/home" component={ HomePage }/>
                    <Route path="/projects" component={ ProjectPage }/>
                    <Route path="/projects/detail/:id" component={ ProjectDetailPage }/>

                    <Route path="*" component = { ErrorPage }/>
                </Route>
            </Routes>
        </Router>
    );
}