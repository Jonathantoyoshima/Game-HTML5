import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <div className="Square">
          {this.props.name}
      </div>
    );
  };
}
class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />
  }

  render () {
    return(
      <div className="Board">
      <div class="Row">
        {this.renderSquare([0,0])}
        {this.renderSquare([1,0])}
        {this.renderSquare([2,0])}
        {this.renderSquare([3,0])}
        {this.renderSquare([4,0])}
      </div>
      <div class="Row">
        {this.renderSquare([0,1])}
        {this.renderSquare([1,1])}
        {this.renderSquare([2,1])}
        {this.renderSquare([3,1])}
        {this.renderSquare([4,1])}
      </div>      
    </div>)
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Board />

      </div>
    );
  }
}



export default App;
