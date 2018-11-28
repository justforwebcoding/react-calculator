import React, { Component } from "react";
import PropTypes from 'prop-types';

class Output extends Component {
  render() {
    const { permanent, dynamic } = this.props;
    return (
      <div className="output">
        <input style={display}
          onChange={() => {}}
          className="dynamic"
          type="text"
          value={dynamic}
        />
        <input style={display}
          onChange={() => {}}
          className="permanent"
          type="text"
          value={permanent}
        />
      </div>
    );
  }
}

const display = {
    "display": "block"
};

Output.propTypes = {
    dynamic: PropTypes.string.isRequired,
    permanent: PropTypes.string.isRequired
};

export default Output;
