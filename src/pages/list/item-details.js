import React, { Component, PropTypes } from 'react';
import { bindAll } from 'lodash';
import { store } from '../../index';
import './styles.scss';


export default class ItemDetails extends Component {
    static propTypes = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['getCurrentItemFromStore']);

        const  item = this.getCurrentItemFromStore();

        this.state = {
            id: item.id,
            name: item.name,
            youtube: item.youtube
        };
    }

    getCurrentItemFromStore() {
        const actualStore = store.getState();
        const { items } = actualStore.list;
        const idx = items.findIndex(item => item.id === Number(this.props.routeParams.id));

        return {
            id: items[ idx ].id,
            name: items[ idx ].name,
            youtube: items[ idx ].youtube
        };
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 item-details">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <strong>{ this.state.id }</strong> { this.state.name }
                            </div>
                            <div className="panel-body">
                                <iframe
                                    src={ `https://www.youtube.com/embed/${ this.state.youtube }` }
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
