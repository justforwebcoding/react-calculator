import React, { Component } from "react";
import PropTypes from 'prop-types';

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

Output.propTypes = {
    dynamic: PropTypes.string.isRequired,
    permanent: PropTypes.string.isRequired
};

export default Output;
