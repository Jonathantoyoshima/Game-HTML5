import React, { Component } from 'react';
import './App.css';
var row = ["A","B","C","D","E","F","G","H"];

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      isWhitePlayer: true,
      squares: "D1",
      options: Array(0),
      squares2: "D8",
      options2: Array(0)
    };
  }
  handleClick(evt, i){
    console.log(i);
    var o1,o2,o3,o4,o5,o6,o7,o8;
    if (this.state.isWhitePlayer) {
      if(i === this.state.squares){
        o1 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) - 1);
        o2 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 0);
        o3 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 1);
        o4 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) - 1);
        o5 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) + 1);
        o6 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) - 1);
        o7 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 0);
        o8 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 1);
        this.setState({options:[o1, o2, o3, o4, o5, o6, o7, o8]});
      };

      if(this.state.options.includes(i)) {
        this.setState({isWhitePlayer:false, squares:i, options:[]});
      };
    }else {
      if(i === this.state.squares2){
        o1 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) - 1);
        o2 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 0);
        o3 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 1);
        o4 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) - 1);
        o5 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) + 1);
        o6 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) - 1);
        o7 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 0);
        o8 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 1);
        console.log(this.state.squares2)
        this.setState({options2:[o1, o2, o3, o4, o5, o6, o7, o8]});
      };


      if(this.state.options2.includes(i)) {
        this.setState({isWhitePlayer:true, squares2:i, options2:[]})
      };
    }
  }
  renderSquare(i){
    var color;
    if(i === this.state.squares){
      color = "red";
    } else if(i === this.state.squares2) {
        color = "blue";
    } else if(this.state.options.includes(i) || this.state.options2.includes(i)){
      color = "green";
    }
      return (<div pos={i} className={"Square " + color} onClick={(evt)=>this.handleClick(evt,i)}/>);
  }
  render () {
    const status = 'Next player: ' + (this.state.isWhitePlayer ? 'White' : 'Black');

    return(
      <div>
      <div className="Board">
      {this.renderSquare("A8")}
      {this.renderSquare("B8")}
      {this.renderSquare("C8")}
      {this.renderSquare("D8")}
      {this.renderSquare("E8")}
      {this.renderSquare("F8")}
      {this.renderSquare("G8")}
      {this.renderSquare("H8")}

      {this.renderSquare("A7")}
      {this.renderSquare("B7")}
      {this.renderSquare("C7")}
      {this.renderSquare("D7")}
      {this.renderSquare("E7")}
      {this.renderSquare("F7")}
      {this.renderSquare("G7")}
      {this.renderSquare("H7")}

      {this.renderSquare("A6")}
      {this.renderSquare("B6")}
      {this.renderSquare("C6")}
      {this.renderSquare("D6")}
      {this.renderSquare("E6")}
      {this.renderSquare("F6")}
      {this.renderSquare("G6")}
      {this.renderSquare("H6")}

      {this.renderSquare("A5")}
      {this.renderSquare("B5")}
      {this.renderSquare("C5")}
      {this.renderSquare("D5")}
      {this.renderSquare("E5")}
      {this.renderSquare("F5")}
      {this.renderSquare("G5")}
      {this.renderSquare("H5")}

      {this.renderSquare("A4")}
      {this.renderSquare("B4")}
      {this.renderSquare("C4")}
      {this.renderSquare("D4")}
      {this.renderSquare("E4")}
      {this.renderSquare("F4")}
      {this.renderSquare("G4")}
      {this.renderSquare("H4")}

      {this.renderSquare("A3")}
      {this.renderSquare("B3")}
      {this.renderSquare("C3")}
      {this.renderSquare("D3")}
      {this.renderSquare("E3")}
      {this.renderSquare("F3")}
      {this.renderSquare("G3")}
      {this.renderSquare("H3")}

      {this.renderSquare("A2")}
      {this.renderSquare("B2")}
      {this.renderSquare("C2")}
      {this.renderSquare("D2")}
      {this.renderSquare("E2")}
      {this.renderSquare("F2")}
      {this.renderSquare("G2")}
      {this.renderSquare("H2")}

      {this.renderSquare("A1")}
      {this.renderSquare("B1")}
      {this.renderSquare("C1")}
      {this.renderSquare("D1")}
      {this.renderSquare("E1")}
      {this.renderSquare("F1")}
      {this.renderSquare("G1")}
      {this.renderSquare("H1")}
      </div>

      <div className="Report"><p>{status}</p></div>
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
