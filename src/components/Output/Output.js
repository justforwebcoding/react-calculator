import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Output.css'

class Output extends Component {
  render() {
    const { permanent, dynamic, className } = this.props;
    return (
      <div className={className}>
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
