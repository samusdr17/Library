import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './../../App';
import Prueba from '../LibraryTable/libraryTable';
import NotFound from '../Router/notFound';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Router = () => (
    <BrowserRouter>
    <Header></Header>
        <Switch>
        
            <Route exact path='/' component={Prueba}/>

            <Route component={NotFound}/>
        </Switch>
        <Footer></Footer>
    </BrowserRouter>
)
export default Router;