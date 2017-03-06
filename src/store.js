import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {DevTools} from './utils/index';

function _getMiddleware() {
    const middleware = [
        thunk
    ];

    return applyMiddleware(...middleware);
}
// Формируем наш store
export default function confiqureStore(initialState) {
    return compose(
        _getMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);
}
