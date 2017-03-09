import { ADD_TODO, LIKE_TODO, DELETE_TODO, GET_TODO } from './actions';

const initialState = {
    todos: [],
    error: '',
    isLoading: true
};

function todoReducer(state = initialState, action) {
    const todos = state.todos;
    switch (action.type) {
        case ADD_TODO:
            if (!action.error) {
                todos.push({ id: action.id, name: action.name, liked: false });
            }

            return Object.assign({}, state, {
                error: action.error,
                todos
            });
        case LIKE_TODO:
            const idx = todos.findIndex(todo => todo.id === action.todo.id);

            todos[idx].liked = action.liked;

            return Object.assign({}, state, { todos: todos });

        case DELETE_TODO:
            const filteredTodos = todos.filter(todo => todo.id !== action.todo.id);

            return Object.assign({}, state, { todos: filteredTodos });
        case GET_TODO:
            return Object.assign({}, state, {
                todos: action.todos,
                isLoading: false
            });
        default:
            return state;
    }
}

const TodoReducer = {
    todo: todoReducer
};

export default TodoReducer;
