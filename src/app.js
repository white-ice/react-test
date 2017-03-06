import React, {Component, PropTypes} from 'react';
import {Header} from './components/index';
import {DevTools} from './utils/index';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';


    render() {
        return (

            <div>
                <Header />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
