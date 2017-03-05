import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {DevTools} from './utils/index';

function _applyMiddleware() {
    const middleware = [];

    return applyMiddleware(...middleware);
}
// Формируем наш store
export default function confiqureStore(initialState) {
    return compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);
}
