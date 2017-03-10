import React, { Component } from 'react';
import { bindAll } from 'lodash';
import Detail from './detail';
import phones from './phones.json';
import './styles.scss';

class ShopPage extends Component {
    static  path = '/shop';

    constructor(props) {
        super(props);

        this.state = {
            phone: phones[0]
        };

        bindAll(this, ['mapPhones', 'handleClick']);
    }

    mapPhones(phone, i) {
        return (
          <li key={ i } onClick={ this.handleClick.bind('', phone) }>
              { phone.name }
              <img src={ phone.imageUrl } />
          </li>
        );
    }

    handleClick(phone) {
        this.setState({ phone });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="shop">
                            <ul className="shop-list-items">
                                { phones.map(this.mapPhones) }
                            </ul>
                            <Detail phone={ this.state.phone } className="shop-item-detail" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopPage;
