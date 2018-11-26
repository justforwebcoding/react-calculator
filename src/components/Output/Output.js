import React, { Component } from 'react';

class Output extends Component {
    render() {
        const { permanent, dynamic } = this.props;
        return(
            <div className="output">
                <input className="dynamic" type="text" defaultValue={dynamic}/>
                <input className="permanent" type="text" defaultValue={permanent}/>
            </div>
        )
    }
}

export default Output
