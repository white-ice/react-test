import React, {Component, PropTypes} from 'react';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import {closeModal} from '../../../components/modal/index';
import Input from '../../../components/ui/input/index';

class EditModal extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube,
            errors: {
                name: '',
                youtube: ''
            }
        };

        bindAll(this, ['close', 'changeLink', 'changeName', 'save']);
    }

    changeName(name) {
        this.setState({name});
    }

    changeLink(youtube) {
        this.setState({youtube});
    }

    close() {
        this.props.dispatch( closeModal() );
    }

    save() {
        const { id, name, youtube, errors } = this.state;
        const errorTitle = 'Поле не должно быть пустым!';
        errors.name = '';
        errors.youtube = '';

        if (name === '') {
            errors.name = errorTitle;
        }

        if (youtube === '') {
            errors.youtube = errorTitle;
        }

        this.setState({ errors });

        if (errors.name || errors.youtube) {
            return;
        }

        this.props.dispatch( this.props.onSave({ id, name, youtube }) );
        this.close();
    }

    render() {
        return (
            <div>
                <div className="modal-body">
                    <p><b>ID: </b> { this.state.id }</p>
                    <Input onChange={ this.changeName } value={ this.state.name } error={ this.state.errors.name } />
                    <Input onChange={ this.changeLink } value={ this.state.youtube } error={ this.state.errors.youtube } />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={ this.close }>Закрыть</button>
                    <button type="button" className="btn btn-success" onClick={ this.save }>Сохранить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal);
