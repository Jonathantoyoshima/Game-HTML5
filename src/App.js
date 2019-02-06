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
<<<<<<< HEAD
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
=======
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <div className="Square">
          {this.props.name}
      </div>
    );
>>>>>>> b66c4fd930626f56785b17618c75df4f7fffa432
  };
}

class Board extends Component {
<<<<<<< HEAD
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
=======
  renderSquare(i) {
    return <Square value={i} />
>>>>>>> b66c4fd930626f56785b17618c75df4f7fffa432
  }

  render () {
    return(
      <div className="Board">
<<<<<<< HEAD
        {this.NumberList()}
      </div>
    )
=======
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
>>>>>>> b66c4fd930626f56785b17618c75df4f7fffa432
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
