// project structure
import React, { Component, PropTypes } from 'react';
import { NavMenu } from './components/index';
import { Modal } from './components/modal/index';
import { DevTools } from './utils/index';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    static path = '/';

    render() {
        return (
            <div>
                <Modal />
                <NavMenu />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
