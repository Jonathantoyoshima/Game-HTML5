import React, { Component } from 'react';
import './App.css';

class Pawn extends Component {
  render() {
    return (<div
      className={this.props.user === "black" ? "Pawn blue" : "Pawn red" }
      onClick={()=>this.props.onClick()}>
        {this.props.pos}
      </div>);
  }
}

class Square extends Component {
  render() {
    return (<div className="Square">{this.props.value}</div>);
  };
}

class Options extends Component {
  render() {
    return(<div className="Select" onClick={()=>this.props.onClick()}></div>)
  }
}

class Board extends Component {
  constructor(props){
    super(props)
    this.row = ["A","B","C","D","E","F","G","H"];
    this.state = {
      isWhitePlayer: true,
      squares: {
        B1:<Pawn user="black" pos="B1" onClick={()=>this.handleClick("B1")}/>,
        B2:<Pawn user="black" pos="B2" onClick={()=>this.handleClick("B2")}/>,
        B3:<Pawn user="black" pos="B3" onClick={()=>this.handleClick("B3")}/>,
        B4:<Pawn user="black" pos="B4" onClick={()=>this.handleClick("B4")}/>,
        B5:<Pawn user="black" pos="B5" onClick={()=>this.handleClick("B5")}/>,
        B6:<Pawn user="black" pos="B6" onClick={()=>this.handleClick("B6")}/>,
        B7:<Pawn user="black" pos="B7" onClick={()=>this.handleClick("B7")}/>,
        B8:<Pawn user="black" pos="B8" onClick={()=>this.handleClick("B8")}/>,

        G1:<Pawn user="white" pos="G1" onClick={()=>this.handleClick("G1")}/>,
        G2:<Pawn user="white" pos="G2" onClick={()=>this.handleClick("G2")}/>,
        G3:<Pawn user="white" pos="G3" onClick={()=>this.handleClick("G3")}/>,
        G4:<Pawn user="white" pos="G4" onClick={()=>this.handleClick("G4")}/>,
        G5:<Pawn user="white" pos="G5" onClick={()=>this.handleClick("G5")}/>,
        G6:<Pawn user="white" pos="G6" onClick={()=>this.handleClick("G6")}/>,
        G7:<Pawn user="white" pos="G7" onClick={()=>this.handleClick("G7")}/>,
        G8:<Pawn user="white" pos="G8" onClick={()=>this.handleClick("G8")}/>
      }
    };
  }
  movePawn(pos, value){
    const squares = this.state.squares;
    squares[pos] = null;
    const user = this.state.isWhitePlayer ? "white" : "black";
    squares[value] = (<Pawn
      user={user}
      pos={value}
      onClick={()=>this.handleClick(value)}
      />);
    this.setState({squares:squares});
    this.setState({isWhitePlayer:!this.state.isWhitePlayer});
  }

  handleClick(pos){
    var column;
    const option = pos.split("");
    const squares = this.state.squares;
    if (this.state.isWhitePlayer) {
        column = this.row[this.row.indexOf(option[0]) - 1];
      } else {
        column = this.row[this.row.indexOf(option[0]) + 1];
      }
    const value =  column + option[1];
    squares[value] = <Options onClick={()=>this.movePawn(pos,value)}/>;
    this.setState({squares:squares});

  }
  renderSquare(i){
      return (<Square value={this.state.squares[i]} />);
  }
  render () {
    const status = 'Next player: ' + (this.state.isWhitePlayer ? 'White' : 'Black');

    return(
      <div>
      <p>{status}</p>
      <div className="Board">
        {this.renderSquare("A1")}
        {this.renderSquare("A2")}
        {this.renderSquare("A3")}
        {this.renderSquare("A4")}
        {this.renderSquare("A5")}
        {this.renderSquare("A6")}
        {this.renderSquare("A7")}
        {this.renderSquare("A8")}

        {this.renderSquare("B1")}
        {this.renderSquare("B2")}
        {this.renderSquare("B3")}
        {this.renderSquare("B4")}
        {this.renderSquare("B5")}
        {this.renderSquare("B6")}
        {this.renderSquare("B7")}
        {this.renderSquare("B8")}

        {this.renderSquare("C1")}
        {this.renderSquare("C2")}
        {this.renderSquare("C3")}
        {this.renderSquare("C4")}
        {this.renderSquare("C5")}
        {this.renderSquare("C6")}
        {this.renderSquare("C7")}
        {this.renderSquare("C8")}

        {this.renderSquare("D1")}
        {this.renderSquare("D2")}
        {this.renderSquare("D3")}
        {this.renderSquare("D4")}
        {this.renderSquare("D5")}
        {this.renderSquare("D6")}
        {this.renderSquare("D7")}
        {this.renderSquare("D8")}

        {this.renderSquare("E1")}
        {this.renderSquare("E2")}
        {this.renderSquare("E3")}
        {this.renderSquare("E4")}
        {this.renderSquare("E5")}
        {this.renderSquare("E6")}
        {this.renderSquare("E7")}
        {this.renderSquare("E8")}

        {this.renderSquare("F1")}
        {this.renderSquare("F2")}
        {this.renderSquare("F3")}
        {this.renderSquare("F4")}
        {this.renderSquare("F5")}
        {this.renderSquare("F6")}
        {this.renderSquare("F7")}
        {this.renderSquare("F8")}

        {this.renderSquare("G1")}
        {this.renderSquare("G2")}
        {this.renderSquare("G3")}
        {this.renderSquare("G4")}
        {this.renderSquare("G5")}
        {this.renderSquare("G6")}
        {this.renderSquare("G7")}
        {this.renderSquare("G8")}

        {this.renderSquare("H1")}
        {this.renderSquare("H2")}
        {this.renderSquare("H3")}
        {this.renderSquare("H4")}
        {this.renderSquare("H5")}
        {this.renderSquare("H6")}
        {this.renderSquare("H7")}
        {this.renderSquare("H8")}
      </div>
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
