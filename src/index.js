import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: 0
  };
  addOne = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  removeOne = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  resetCount = () => {
    this.setState(() => ({ count: 0 }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.addOne}>Add 1</button>
        <button onClick={this.resetCount}>Reset</button>
        <button onClick={this.removeOne}>Remove 1</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
