import React, { Component } from 'react';
import { bindAll } from 'lodash';
import ListItem from './list-item';

export default class ListPage extends Component {
    static  path = '/list';

    constructor(props) {
        super(props);

        this.state = {
            items: [1, 2]
        };

        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return (
            <ListItem key={ idx } id={ item } />
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>List</h3>
                        <ul>
                            { this.state.items.map(this.renderItems) }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
