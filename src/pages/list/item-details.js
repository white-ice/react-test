import React, { Component } from 'react';

export default class ItemDetails extends Component {
    static  path = '/';

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.routeParams.id
        };
    }
    
    render() {
        return (
            <div>
                <h1>Item details { this.state.id } work!</h1>
            </div>
        );
    }
}
