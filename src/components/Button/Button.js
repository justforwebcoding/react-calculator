import React, { Component } from "react";

class Button extends Component {

  handleClick = (e) => {
    const { handleClick, value } = this.props;
    e.preventDefault();
    handleClick(value)
  };

  render() {
    const { value } = this.props;
    return <button onClick={this.handleClick}>{value}</button>;
  }
}

export default Button;
