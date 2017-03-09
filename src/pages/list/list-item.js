import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindAll } from 'lodash';
import EditModal  from './modals/edit-modal';
import DeleteModal  from './modals/delete-modal';
import { editItem, deleteItem }  from './actions';

import { openModal } from '../../components/modal/index';

class ListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['edit', 'remove']);
    }

    edit() {
        const { id, name, youtube } = this.props;
        this.props.dispatch( openModal({
            content: <EditModal id={ id } youtube={ youtube } name={ name } onSave={ editItem } />,
            title: 'Редактировать'
        }) );
    }

    remove() {
        const { id, name  } = this.props;
        this.props.dispatch( openModal({
            content: <DeleteModal id={ id } name={ name } onSuccess={ deleteItem } />,
            title: 'Удалить элемент?'
        }) );
    }

    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={ `/list/${ this.props.id }` }>{ this.props.name }</Link></td>
                <td>
                    <button className="btn btn-success" onClick={ this.edit }><i className="glyphicon-pencil glyphicon" /></button>
                    <button className="btn btn-danger" onClick={ this.remove }><i className="glyphicon-remove glyphicon" /></button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {}; // Мы не будим подписываться на поле
}

export default connect(mapStateToProps)(ListItem);
