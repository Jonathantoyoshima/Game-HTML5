import React, { Component } from 'react';
import './App.css';
var row = ["A","B","C","D","E","F","G","H"];

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null,
      isWhitePlayer: true,
      King: "D1",
      Queen:"E1",
      options: Array(0),
      King2: "D8",
      Queen2:"E8",
      options2: Array(0)
    };
  }
  handleClick(i){
    console.log(i);
    var idx,idx2,o1,o2,o3,o4,o5,o6,o7,o8,
        opt = new Array(),
        oCol = i.split("")[0],
        oRow = Number(i.split("")[1]);
    if (this.state.isWhitePlayer) {
      if(i === this.state.Queen){
        for (idx = (oRow + 1); idx <= 8; idx++) {
          if((String(oCol + idx)) === this.state.King){break;}
          opt.push(String(oCol + idx));
          if((String(oCol + idx)) === this.state.King2){break;}
          if((String(oCol + idx)) === this.state.Queen2){break;}
        }
        for (idx = oRow - 1; idx >= 0; idx--) {
          if(String(oCol + idx) === this.state.King){break;}
          opt.push(String(oCol + idx));
          if(String(oCol + idx) === this.state.King2){break;}
          if(String(oCol + idx) === this.state.Queen2){break;}
        }
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
           if((String(row[idx] + oRow)) === this.state.King){break;}
           opt.push(row[idx] + oRow);
           if((String(row[idx] + oRow)) === this.state.King2){break;}
           if((String(row[idx] + oRow)) === this.state.Queen2){break;}
        }
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
           if((String(row[idx] + oRow)) === this.state.King){break;}
           opt.push(row[idx] + oRow);
           if((String(row[idx] + oRow)) === this.state.King2){break;}
           if((String(row[idx] + oRow)) === this.state.Queen2){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2++;
          if(String(row[idx] + (idx2)) === this.state.King){break;}
          opt.push(row[idx] + (idx2));
          if(String(row[idx] + (idx2)) === this.state.King2){break;}
          if(String(row[idx] + (idx2)) === this.state.Queen2){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2--;
          if(String(row[idx] + (idx2)) === this.state.King){break;}
          opt.push(row[idx] + (idx2));
          if(String(row[idx] + (idx2)) === this.state.King2){break;}
          if(String(row[idx] + (idx2)) === this.state.Queen2){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2++;
           if((String(row[idx] + idx2)) === this.state.King){break;}
           opt.push(row[idx] + idx2);
           if((String(row[idx] + idx2)) === this.state.King2){break;}
           if((String(row[idx] + idx2)) === this.state.Queen2){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2--;
           if((String(row[idx] + idx2)) === this.state.King){break;}
           opt.push(row[idx] + idx2);
           if((String(row[idx] + idx2)) === this.state.King2){break;}
           if((String(row[idx] + idx2)) === this.state.Queen2){break;}
        }
        this.setState({options:opt, selected:"Queen"})
      }
      if(i === this.state.King){
        o1 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) - 1);
        o2 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 0);
        o3 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 1);
        o4 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) - 1);
        o5 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) + 1);
        o6 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) - 1);
        o7 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 0);
        o8 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 1);
        if(o1 !== this.state.Queen){opt.push(o1);}
        if(o2 !== this.state.Queen){opt.push(o2);}
        if(o3 !== this.state.Queen){opt.push(o3);}
        if(o4 !== this.state.Queen){opt.push(o4);}
        if(o5 !== this.state.Queen){opt.push(o5);}
        if(o6 !== this.state.Queen){opt.push(o6);}
        if(o7 !== this.state.Queen){opt.push(o7);}
        if(o8 !== this.state.Queen){opt.push(o8);}
        this.setState({options:opt, selected:"King"});
      };

      if(this.state.options.includes(i)) {
        switch (this.state.selected) {
          case "Queen":
            this.setState({isWhitePlayer:false, Queen:i, options:[]});
            break;
          case "King":
            this.setState({isWhitePlayer:false, King:i, options:[]});
            break;
        }
      };
    }else{
      if(i === this.state.Queen2){
        for (idx = (oRow + 1); idx <= 8; idx++) {
          if((String(oCol + idx)) === this.state.King2){break;}
          opt.push(String(oCol + idx));
          if((String(oCol + idx)) === this.state.King){break;}
          if((String(oCol + idx)) === this.state.Queen){break;}
        }
        for (idx = oRow - 1; idx >= 0; idx--) {
          if(String(oCol + idx) === this.state.King2){break;}
          opt.push(String(oCol + idx));
          if(String(oCol + idx) === this.state.King){break;}
          if(String(oCol + idx) === this.state.Queen){break;}
        }
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
           if((String(row[idx] + oRow)) === this.state.King2){break;}
           opt.push(row[idx] + oRow);
           if((String(row[idx] + oRow)) === this.state.King){break;}
           if((String(row[idx] + oRow)) === this.state.Queen){break;}
        }
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
           if((String(row[idx] + oRow)) === this.state.King2){break;}
           opt.push(row[idx] + oRow);
           if((String(row[idx] + oRow)) === this.state.King){break;}
           if((String(row[idx] + oRow)) === this.state.Queen){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2++;
          if(String(row[idx] + (idx2)) === this.state.King2){break;}
          opt.push(row[idx] + (idx2));
          if(String(row[idx] + (idx2)) === this.state.King){break;}
          if(String(row[idx] + (idx2)) === this.state.Queen){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2--;
          if(String(row[idx] + (idx2)) === this.state.King2){break;}
          opt.push(row[idx] + (idx2));
          if(String(row[idx] + (idx2)) === this.state.King){break;}
          if(String(row[idx] + (idx2)) === this.state.Queen){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2++;
           if((String(row[idx] + idx2)) === this.state.King2){break;}
           opt.push(row[idx] + idx2);
           if((String(row[idx] + idx2)) === this.state.King){break;}
           if((String(row[idx] + idx2)) === this.state.Queen){break;}
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2--;
           if((String(row[idx] + idx2)) === this.state.King2){break;}
           opt.push(row[idx] + idx2);
           if((String(row[idx] + idx2)) === this.state.King){break;}
           if((String(row[idx] + idx2)) === this.state.Queen){break;}
        }
        this.setState({options2:opt, selected:"Queen2"})
      }

      if(i === this.state.King2){
        o1 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) - 1);
        o2 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 0);
        o3 = row[row.indexOf(i.split("")[0]) - 1] + (Number(i.split("")[1]) + 1);
        o4 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) - 1);
        o5 = row[row.indexOf(i.split("")[0]) + 0] + (Number(i.split("")[1]) + 1);
        o6 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) - 1);
        o7 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 0);
        o8 = row[row.indexOf(i.split("")[0]) + 1] + (Number(i.split("")[1]) + 1);
        if(o1 !== this.state.Queen2){
          opt.push(o1);
        }
        if(o2 !== this.state.Queen2){
          opt.push(o2);
        }
        if(o3 !== this.state.Queen2){
          opt.push(o3);
        }
        if(o4 !== this.state.Queen2){
          opt.push(o4);
        }
        if(o5 !== this.state.Queen2){
          opt.push(o5);
        }
        if(o6 !== this.state.Queen2){
          opt.push(o6);
        }
        if(o7 !== this.state.Queen2){
          opt.push(o7);
        }
        if(o8 !== this.state.Queen2){
          opt.push(o8);
        }
        this.setState({options2:opt, selected:"King2"});
      };
      if(this.state.options2.includes(i)) {
        switch(this.state.selected) {
          case "Queen2":
            this.setState({isWhitePlayer: true, Queen2:i, options2:[]});
            break;
          case "King2":
            this.setState({isWhitePlayer:true, King2:i, options2:[]});
            break;
        };
        console.log(this.state.isWhitePlayer)
      };
    }
  }
  renderSquare(i){
    var color, piece;
    switch (i) {
      case this.state.King:
        color = "red";
        piece = "KING";
        break;
      case this.state.King2:
          color = "blue";
          piece = "KING";
          break;
      case this.state.Queen:
        color = "red";
        piece = "Queen";
        break;
      case this.state.Queen2:
        color = "blue";
        piece = "Queen";
        break;
      default:
      if(this.state.options.includes(i) || this.state.options2.includes(i)){
        color = "green";
      }

    }
      return (
      <div
        className={"Square " + color}
        onClick={(evt)=>this.handleClick(i)}>
        {piece}
      </div>);
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
