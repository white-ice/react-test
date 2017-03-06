import React, { Component, PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { addTodo, likeTodo, deleteTodo, getTodos} from './actions';
import Input from '../../components/ui/input/index';
import Loader from '../../components/ui/loader/index';
import { LS } from '../../utils/index';
import './styles.scss';

class HomePage extends Component {

    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['inputOnChenge', 'addTodo', 'renderTodos', 'likeTodo', 'deleteTodo']);

        this.props.dispatch( getTodos() );
    }

    inputOnChenge( value ) {
        this.setState({ todoName: value });
    }

    addTodo() {
        const { todos } = this.props.home;
        this.props.dispatch( addTodo(todos, this.state.todoName) );
        this.setState({ todoName: '' });
    }

    likeTodo(todo) {
        this.props.dispatch( likeTodo(todo) );
    }

    deleteTodo(todo) {
        this.props.dispatch( deleteTodo(todo) );
    }

    renderTodos(item, idx) {
        const todoClasses = classnames('todo-name', {
            'is-liked': item.liked
        });
        const btnClasses = classnames('btn btn-primary btn-xs', {
            'active': item.liked
        });
        return (
          <li key={ idx }>
              <span className={ todoClasses }>{ item.name }</span>
              <button className="btn btn-primary btn-xs" onClick={ this.deleteTodo.bind('', item)}><i className="glyphicon glyphicon-remove"/></button>
              <button className={ btnClasses } onClick={ this.likeTodo.bind('', item) }><i className="glyphicon glyphicon-heart"/></button>
          </li>
        );
    }

    render() {
        const { todoName } = this.state;
        const { todos, error, isLoading } = this.props.home;

        LS.set('todos', todos);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 todo">
                        <ul className="todo-list">
                            { isLoading ? <Loader/> : todos.length !== 0 ? todos.map(this.renderTodos) : 'Элементов нет' }
                        </ul>
                        <div className="col-xs-6">
                            <Input onChange={ this.inputOnChenge } value={ todoName } error={ error } />
                            <button className="btn btn-primary" onClick={ this.addTodo }>Add todo</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
