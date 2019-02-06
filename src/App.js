import React, { Component } from 'react';
import './App.css';

class Pawn extends Component {
  constructor(props){
    super(props);
    this.pos = this.props.value;
  }
  selectPiece(){
    //Square.setState({ piece: null });
    //console.log(this.pos);
    return "hi";
  }

  render(){
    return <div className="Pawn"></div>
  }
}

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {piece: this.props.piece};
    this.filled = false;
  }
  fn(){
    //console.log(this.props.value);
    console.log(this.state.piece);
    return this.filled = !this.filled;
  }
  render() {
    return (
      <div className="Square" onClick={()=>this.fn()}>
        { this.state.piece }
      </div>);
  };
}

class Board extends Component {
  constructor(props){
    super(props)
    this.collumns = 3;
    this.rows = 3;
    this.Pawn = null;
    this.list = [1,2,3];
  }
  NumberList(){
    const numbers = ["A1", "A2", "A3"];
    const doubled = numbers.map((number, index) => this.renderSquare(number,index));
    return doubled;
  }
  renderSquare(number, index){
    this.Pawn = number == "A1" ? <Pawn /> : null;
    return <Square key={index} value={number} piece={this.Pawn}/>;
  }

  render () {
    return(
      <div className="Board">
        {this.NumberList()}
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Board />
      </div>
    );
  }
}

export default App;
