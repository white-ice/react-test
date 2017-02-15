import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	static propTypes = {
		btnText: PropTypes.string.isRequired
	}
	btnOnClick(event) {
		console.log('Button clicke!', event.target);
	}
	render() {
		return (
			<div className="test">
			<h1>App works</h1>
		<button onClick={this.btnOnClick}>{ this.props.btnText }</button>
		</div>
	);
	}
}

ReactDOM.render(
	<App btnText="Click on me!" />,
	document.getElementById('app')
);