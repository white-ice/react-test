import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import load from '../../utils/load';
import { loadItems } from './actions';
import './styles.scss';

import Slide from './slide';

class SlideShow extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        data: PropTypes.string.isRequired,
        slideShow: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.loadData();
    }

    loadData() {
        load(this.props.data).then(users => {
            this.initialData = JSON.parse(users);
            this.props.dispatch( loadItems(this.initialData) );
        });
    }


    render() {
        const { slideShow } = this.props;

        return (
            <div className="slide-show">
                <div className="slide-show-items">
                    <Slide image={ slideShow.images[0] } />
                </div>
                <div className="slide-show-nav">
                    <div className="slide-show-nav-items">
                        <div className="slide-show-nav-item"><h4>Slide Show Image 1</h4></div>
                        <div className="slide-show-nav-item"><h4>Slide Show Image 2</h4></div>
                        <div className="slide-show-nav-item"><h4>Slide Show Image 3</h4></div>
                        <div className="slide-show-nav-item"><h4>Slide Show Image 4</h4></div>
                    </div>
                    <div className="slide-show-nav-next"> { '>>' } </div>
                    <div className="slide-show-nav-prev"> { '<<' } </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        slideShow: state.slideShow
    };
}

export default connect(mapStateToProps)(SlideShow);
