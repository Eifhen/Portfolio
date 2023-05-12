import { Outlet, Route, Router, Routes } from '@solidjs/router';
import TestPage from '../pages/test/test.page';
import 'remixicon/fonts/remixicon.css';
import '../assets/css/general.css';
import { AplicationContextProvider } from '../context/aplication.context';
import Layout from '../components/layout/layout.component';
import HomePage from '../pages/home/home.page';

export default function RouterManager(){

    return(
        <Router>
            <Routes>
                <Route path="" component={ Layout }>
                    <Route path="/" component={ TestPage }/>
                    <Route path="/test" component={ TestPage }/>
                    <Route path="/home" component={ HomePage }/>
                </Route>
            </Routes>
        </Router>
    );
}