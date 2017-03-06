import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={ `/list/${ this.props.id }` }>{ this.props.name }</Link></td>
                <td>
                    <button className="btn btn-success"><i className="glyphicon-pencil glyphicon" /></button>
                    <button className="btn btn-danger"><i className="glyphicon-remove glyphicon" /></button>
                </td>
            </tr>
        );
    }
}
