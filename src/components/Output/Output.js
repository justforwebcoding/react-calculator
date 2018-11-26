import React, { Component } from "react";

class Output extends Component {
  render() {
    const { permanent, dynamic } = this.props;
    return (
      <div className="output">
        <input
          onChange={() => {}}
          className="dynamic"
          type="text"
          value={dynamic}
        />
        <input
          onChange={() => {}}
          className="permanent"
          type="text"
          value={permanent}
        />
      </div>
    );
  }
}

export default Output;
