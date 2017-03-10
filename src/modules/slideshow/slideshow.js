import React, { Component } from 'react';
import './styles.scss';

class SlideShow extends Component {
    render() {
        return (
            <div className="slide-show">
                <div className="slide-show-items">
                    <div className="slide-show-item"><h1>Slide Show Image 1</h1></div>
                    <div className="slide-show-item"><h1>Slide Show Image 2</h1></div>
                    <div className="slide-show-item"><h1>Slide Show Image 3</h1></div>
                    <div className="slide-show-item"><h1>Slide Show Image 4</h1></div>
                </div>
                <div className="slide-show-nav">
                    <div className="slide-show-nav-items">
                        <div className="slide-show-nav-item"><h4>Slide Show Image 1</h4></div>
                        <div className="slide-show-nav-item"><h4>Slide Show Image 2</h4></div>
                        <div className="slide-show-nav-item"><h4>Slide Show Image 3</h4></div>
                        <div className="slide-show-nav-item"><h4>Slide Show Image 4</h4></div>
                    </div>
                    <div className="slide-show-nav-next"> { `>>` } </div>
                    <div className="slide-show-nav-prev"> { `<<` } </div>
                </div>
            </div>
        );
    }
}

export default SlideShow;
