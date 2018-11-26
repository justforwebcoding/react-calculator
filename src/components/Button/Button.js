import React, { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {

  handleClick = (e) => {
    const { onAction, value } = this.props;
    e.preventDefault();
    onAction(value);
  };

  render() {
    const { value } = this.props;
    return <button onClick={this.handleClick}>{value}</button>;
  }
}

Button.propTypes = {
    onAction: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Button;
