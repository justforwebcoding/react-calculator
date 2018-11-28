import React, { Component } from "react";
import Output from "../Output/Output";
import Button from "../Button/Button";
import './Calculator.css';

class Calculator extends Component {
  state = {
    process: "",
    result: "0",
    lastChar: undefined,
    init: true,
  };

  passNumbers = char => {
    let state = {...this.state};

    if(state.init) {
      state.result = '' + char;
      state.init = false;
      state.lastChar = undefined;
    } else {
      state.result += + char;
    }

    this.setState(state);
  };

  passActions = char => {
    let state = {...this.state};

    if(state.lastChar === undefined) {
        state.lastChar = char;
        state.process += state.result + char;
        state.result = eval(state.process.substring(0, state.process.length - 1));
        state.init = true;
    } else {
        state.process = state.process.substring(0, state.process.length - 1)  + char;
        state.lastChar = char;
    }

    this.setState(state);
  };

  deleteAll = () => {
    this.setState({
        process: "",
        result: "0",
        init: true,
    })
  };

  deleteLast = () => {

  };

  countAll = char => {
      let state = {...this.state};

      state.process += state.result;
      state.result = eval(state.process);
      state.process = '';
      state.init = true;

      this.setState(state);
  };

  render() {
    const { result, process } = this.state;
    const { className } = this.props;
    return (
      <div className={className}>
        <Output className="output" dynamic={process} permanent={result} />
        <div className="buttons">
          <Button onAction={this.passNumbers} value={"1"} />
          <Button onAction={this.passNumbers} value={"2"} />
          <Button onAction={this.passNumbers}  value={"3"} />
          <Button onAction={this.passNumbers}  value={"4"} />
          <Button onAction={this.passNumbers}  value={"5"} />
          <Button onAction={this.passNumbers}  value={"6"} />
          <Button onAction={this.passNumbers}  value={"7"} />
          <Button onAction={this.passNumbers}  value={"8"} />
          <Button onAction={this.passNumbers}  value={"9"} />
          <Button onAction={this.passNumbers}  value={"0"} />
          <Button onAction={this.passActions}  value={"+"} />
          <Button onAction={this.passActions}  value={"-"} />
          <Button onAction={this.passActions}  value={"/"} />
          <Button onAction={this.passActions}  value={"*"} />
          <Button onAction={this.countAll} value={"="} />
          <Button onAction={this.deleteLast} value={"ce"} />
          <Button onAction={this.deleteAll} value={"c"}/>
        </div>
      </div>
    );
  }
}


export default Calculator;
