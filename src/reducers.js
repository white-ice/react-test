// root reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { TodoReducer } from './modules/todo/index';

// import { HomeReducer } from './pages/home-test/index';
import { ListReducer } from './pages/list/index';
import { SlideShowReducer } from './modules/slideshow/index';
import { ModalReducer } from './components/modal/index';

export default combineReducers({
    routing: routerReducer,
    // ...HomeReducer,
    ...TodoReducer,
    ...ListReducer,
    ...ModalReducer,
    ...SlideShowReducer
});
