import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home/index';
import { ShopRoutes } from './pages/shop/index';
import { ContactRoutes } from './pages/contact/index';
import { ListRoutes } from './pages/list/index';
import ErrorPage from './pages/error/index';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ HomePage }/> /* IndexRoute - обробатывает ошибки в component HomePage */

        { ShopRoutes }
        { HomeRoutes }
        { ContactRoutes }
        { ListRoutes }

        <Route path="*" component={ ErrorPage }/>
    </Route>
);
