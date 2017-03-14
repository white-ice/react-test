import {LOAD_ITEMS} from './actions';

const initialState = {
    images: [
        {
            id: null,
            image: null
        }
    ]
};

function slideShowReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS:
            return Object.assign({}, state, {
                images: action.initialData
            });
        default:
            return state;
    }
}

const SlideShowReducer = {
    slideShow: slideShowReducer
};

export default SlideShowReducer;
