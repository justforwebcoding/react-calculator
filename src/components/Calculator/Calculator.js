import React, { Component } from "react";
import Output from "../Output/Output";
import Button from "../Button/Button";

class Calculator extends Component {
  state = {
    dynamicOutput: "",
    permanentOutput: ""
  };

  buildString = char => {
    this.setState(prevState => ({
      dynamicOutput: prevState.dynamicOutput + char
    }));
  };

  deleteAll = () => {};

  countAll = () => {};

  render() {
    const { permanentOutput, dynamicOutput } = this.state;
    return (
      <div className="calculator">
        <Output dynamic={dynamicOutput} permanent={permanentOutput} />
        <div className="buttons">
          <Button onClick={() => this.buildString("1")} value={"1"} />
          <Button onClick={() => this.buildString("2")} value={"2"} />
          <Button onClick={() => this.buildString("3")} value={"3"} />
          <Button onClick={() => this.buildString("4")} value={"4"} />
          <Button onClick={() => this.buildString("5")} value={"5"} />
          <Button onClick={() => this.buildString("6")} value={"6"} />
          <Button onClick={() => this.buildString("7")} value={"7"} />
          <Button onClick={() => this.buildString("8")} value={"8"} />
          <Button onClick={() => this.buildString("9")} value={"9"} />
          <Button onClick={() => this.buildString("0")} value={"0"} />
          <Button onClick={() => this.buildString("+")} value={"+"} />
          <Button onClick={() => this.buildString("-")} value={"-"} />
          <Button onClick={() => this.buildString("/")} value={"/"} />
          <Button onClick={() => this.buildString("*")} value={"*"} />
          <Button onClick={this.countAll} value={"="} />
          <Button onClick={this.deleteAll} value={"ce"} />
        </div>
      </div>
    );
  }
}

export default Calculator;
