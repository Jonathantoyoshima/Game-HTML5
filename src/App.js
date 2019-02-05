import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
  render() {
    return (<div className="Square"></div>);
  };
}
class Board extends Component {
  render () {
    return(
      <div className="Board">
      <div class="Row">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      </div>
      <div class="Row">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      </div>
      <div class="Row">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      </div>
      <div class="Row">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
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
