import React, { Component } from "react";
import Output from "../Output/Output";
import Button from "../Button/Button";

class Calculator extends Component {
  state = {
    dynamicOutput: "",
    permanentOutput: "0"
  };

  buildString = char => {
    this.setState(prevState => ({
      dynamicOutput: prevState.dynamicOutput + char
    }));
  };

  deleteAll = () => {
    this.setState({
        dynamicOutput: "",
        permanentOutput: "0"
    })
  };

  deleteLast = () => {

  };

  countAll = () => {
      let state = this.state;
      state.permanentOutput = '' + eval(state.dynamicOutput);
      state.dynamicOutput = state.permanentOutput;

      this.setState(state);
  };

  render() {
    const { permanentOutput, dynamicOutput } = this.state;
    return (
      <div className="calculator">
        <Output dynamic={dynamicOutput} permanent={permanentOutput} />
        <div className="buttons">
          <Button onAction={this.buildString} value={"1"} />
          <Button onAction={this.buildString} value={"2"} />
          <Button onAction={this.buildString}  value={"3"} />
          <Button onAction={this.buildString}  value={"4"} />
          <Button onAction={this.buildString}  value={"5"} />
          <Button onAction={this.buildString}  value={"6"} />
          <Button onAction={this.buildString}  value={"7"} />
          <Button onAction={this.buildString}  value={"8"} />
          <Button onAction={this.buildString}  value={"9"} />
          <Button onAction={this.buildString}  value={"0"} />
          <Button onAction={this.buildString}  value={"+"} />
          <Button onAction={this.buildString}  value={"-"} />
          <Button onAction={this.buildString}  value={"/"} />
          <Button onAction={this.buildString}  value={"*"} />
          <Button onAction={this.countAll} value={"="} />
          <Button onAction={this.deleteLast} value={"ce"} />
          <Button onAction={this.deleteAll} value={"c"}/>
        </div>
      </div>
    );
  }
}


export default Calculator;
