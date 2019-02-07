import React, { Component } from 'react';
import './App.css';

class Pawn extends Component {
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
    this.state.piece;
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
    this.list = ["A1","A2","A3", "A4"];
  }
  handleBoard(number,index){
    var oPawn = number === "A1" ? <Pawn /> : null;
    return this.renderSquare(number,index, oPawn);
  }
  NumberList(){
    const doubled = this.list.map((number, index) => this.handleBoard(number,index));
    return doubled;
  }
  renderSquare(number, index, piece){
    return <Square key={index} value={number} piece={piece}/>;
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
