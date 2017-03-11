import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.scss';

class NavMenu extends Component {
    render() {
        return (
            <div className="nav-cont">
                <div className="nav-list">
                    <Link to="/error" activeClassName="active">Страница ошибки</Link>
                    <Link to="/list" activeClassName="active">Список</Link>
                    <Link to="/contact" activeClassName="active">Котакты</Link>
                    <Link to="/shop" activeClassName="active">Магазин</Link>
                    <Link to="/" activeClassName="active">Главная</Link>
                </div>
            </div>
        );
    }
}

export default NavMenu;
