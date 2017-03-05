import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Input extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        error: PropTypes.string
    };

    constructor(props) {
        super(props);

        const { value } = this.props;
        this.state = { value };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.props.onChange(value);
        this.setState({ value });
    }

    render() {
        const { value } = this.props;
        const divClasses = classnames({
            'form-group': true,
            'has-error': this.props.error ? true : false
        });

        return (
            <div className={ divClasses }>
                <input type="text" className="form-control" value={ value } onChange={ this.handleChange } />
                { this.props.error ? <span className="help-block">{ this.props.error }</span> : null }
            </div>
        );
    }
}
