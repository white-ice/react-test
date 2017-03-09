import React, {Component} from 'react';
import { Todo } from '../../modules/todo/index';
import { SlideShow } from '../../modules/slideshow/index';

export default class HomePage extends Component {
    static path = '/';

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8">
                        <SlideShow />
                    </div>
                    <div className="col-xs-4">
                        <Todo />
                    </div>
                </div>
            </div>
        );
    }
}
