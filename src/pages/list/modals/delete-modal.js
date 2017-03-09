import React, {Component, PropTypes} from 'react';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import {closeModal} from '../../../components/modal/index';

class DeleteModal extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        onSuccess: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['cancel', 'deleteItem']);
    }

    cancel() {
        this.props.dispatch( closeModal() );
    }

    deleteItem() {
        this.props.dispatch( this.props.onSuccess(this.props.id) );
        this.cancel();
    }

    render() {
        return (
            <div>
                <div className="modal-body">
                    <p><b>{ this.props.id }</b> - { this.props.name }</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={ this.cancel }>Отмена</button>
                    <button type="button" className="btn btn-danget" onClick={ this.deleteItem }>Удалить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DeleteModal);
