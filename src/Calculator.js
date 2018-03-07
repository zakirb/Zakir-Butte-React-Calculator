import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super()
    this.state = {
      num1:0,
      num2:0,
      result: 0
    }
    this.num1Change = this.num1Change.bind(this);
    this.num2Change = this.num2Change.bind(this);
  }

  num1Change(e) {
    if (e.target.value) {
      this.setState({
        num1: parseInt(e.target.value)
      })
    } else {
        this.setState({
          num1: null
        })
      }
    }

  num2Change(e) {
    if (e.target.value) {
      this.setState({
        num2: parseInt(e.target.value)
      })
    } else {
        this.setState({
          num2: null
        })
      }
    }

  sumNums(e) {
    if (this.state.num1 && this.state.num2) {
      this.setState({
        result: this.state.num1 + this.state.num2
      })
    }
  }

  subtractNums(e) {
    if (this.state.num1 && this.state.num2) {
      this.setState({
        result: this.state.num1 - this.state.num2
      })
    }
  }

  multiplyNums(e) {
    if (this.state.num1 && this.state.num2) {
      this.setState({
        result: this.state.num1 * this.state.num2
      })
    }
  }

  divideNums(e) {
    if (this.state.num1 && this.state.num2) {
      this.setState({
        result: this.state.num1 / this.state.num2
      })
    }
  }

  render() {
    return (
      <div>
        <h1> I am a Calculator </h1>
        <div>
          <input type="text" value={this.state.num1} onChange={this.num1Change}  />
        </div>
        <div>
          <input type="text" value={this.state.num2} onChange={this.num2Change}  />
        </div>
        <button type='submit' onClick={ (e) => this.sumNums(e)}>SUM</button>
        <button type='submit' onClick={ (e) => this.subtractNums(e)}>SUBTRACT</button>
        <button type='submit' onClick={ (e) => this.multiplyNums(e)}>MULTIPLY</button>
        <button type='submit' onClick={ (e) => this.divideNums(e)}>DIVIDE</button>
        <div>Result: {this.state.result}</div>
      </div>

    )
  }
}


export default Calculator;
