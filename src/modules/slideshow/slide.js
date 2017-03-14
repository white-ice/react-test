import React, { Component, PropTypes } from 'react';

class Slide extends Component {
    static propTypes = {
        image: PropTypes.object.isRequired
    };

    render() {
        const { image } = this.props;

        return (
            <div className="slide-show-item">
                <img src={ `img/slider/${image.image}.jpg` } alt={ image.image } />
            </div>
        );
    }
}

export default Slide;
