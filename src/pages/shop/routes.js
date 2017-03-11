import React from 'react';
import { Route } from 'react-router';
import ShopPage from './shop';

export default (
    <Route>
        <Route component={ ShopPage } path={ ShopPage.path } />
    </Route>
);
