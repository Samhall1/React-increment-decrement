import React from 'react';
import './App.css';
class App extends React.Component {
  state =
    {currentValue : 0}
  increment = () => {
    console.log("increment");
    this.setState ({
      currentValue: this.state.currentValue + 1
    })
  }
  decrement = () => {
    console.log("decrement");
    if (this.state.currentValue <= 0) {
      this.setState ({
        currentValue: 0
      })
    } else {
    this.setState ({
      currentValue: this.state.currentValue - 1
    })
  }}
  render() {
    return(
      <div className="box">
        <h1 className="value">{this.state.currentValue}</h1>
        <button className="button1" onClick= {this.increment} >Increment</button>
        <button className="button2"onClick= {this.decrement} >Decrement</button>
      </div>
    )
  }
}
export default App;
