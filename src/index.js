import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import confiqureStore from './store';
import routes from './routers';

export const store = confiqureStore(); // Передаем наш store
const history = syncHistoryWithStore(browserHistory, store); // синхронизирует наша store с историей

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
