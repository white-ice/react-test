import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    static path = '/';

    render() {
        return (

			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">

							<Link className="navbar-brand" to="/">Brand</Link>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li><Link to="/error">Error</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
        );
    }
}
