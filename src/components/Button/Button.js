import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { value } = this.props;
        return(
            <button>{value}</button>
        )
    }
}

export default Button
