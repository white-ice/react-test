import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import confiqureStore from './store';
import routes from './routers';

const store = confiqureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  (
    <Provider store={ store }>
      <Router history={ history }>
        { routes }
      </Router>
    </Provider>
  ),
  document.getElementById('app')
);