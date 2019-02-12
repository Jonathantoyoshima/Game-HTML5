import React, { Component } from 'react';
import './App.css';
var row = ["A","B","C","D","E","F","G","H"];

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null,
      winner: null,
      isWhitePlayer: true,
      options: Array(0),
      King: "D1",
      Queen:"E1",
      Bishop1a:"C1",
      Bishop1b:"F1",
      Hook1a:"A1",
      Hook1b:"H1",
      King2: "D8",
      Queen2:"E8",
      Bishop2a:"C8",
      Bishop2b:"F8",
      Hook2a:"A8",
      Hook2b:"H8",
    };
  }
  EndGame(winner) {
    this.setState({winner:winner})
    return winner;
  }

  checkPieces(i){
    if(i===this.state.King2){
      this.EndGame("Win1");
      this.setState({King2:null});
    };
    if(i===this.state.Queen2){
      this.setState({Queen2:null});
    };
    if(i===this.state.Bishop2a){
      this.setState({Bishop2a:null});
    }
    if(i===this.state.Bishop2b){
      this.setState({Bishop2b:null});
    }
    if(i===this.state.Hook2a){
      this.setState({Hook2a:null});
    }
    if(i===this.state.Hook2b){
      this.setState({Hook2b:null});
    }
  }
  checkPieces2(i){
    if(i===this.state.King){
      this.EndGame("Win2");
      this.setState({King:null});
    };
    if(i===this.state.Queen){
      this.setState({Queen:null});
    };
    if(i===this.state.Bishop1a){
      this.setState({Bishop1a:null});
    }
    if(i===this.state.Bishop1b){
      this.setState({Bishop1b:null});
    }
    if(i===this.state.Hook1a){
      this.setState({Hook1a:null});
    }
    if(i===this.state.Hook1b){
      this.setState({Hook1b:null});
    }
  }

WhitePieces(pos){
  var findWhite = false;
  switch (pos) {
    case this.state.King:
      findWhite = true;
      break;
    case this.state.Queen:
      findWhite = true;
      break;
    case this.state.Bishop1a:
      findWhite = true;
      break;
    case this.state.Bishop1b:
      findWhite = true;
      break;
    case this.state.Hook1a:
      findWhite = true;
      break;
    case this.state.Hook1b:
      findWhite = true;
      break;
    default:
      findWhite = false;

  }
  return findWhite;
}

BlackPieces(pos){
  var findBlack = false;
  switch (pos) {
    case this.state.King2:
      findBlack = true;
      break;
    case this.state.Queen2:
      findBlack = true;
      break;
    case this.state.Bishop2a:
      findBlack = true;
      break;
    case this.state.Bishop2b:
      findBlack = true;
      break;
    case this.state.Hook2a:
      findBlack = true;
      break;
    case this.state.Hook2b:
      findBlack = true;
      break;
    default:
      findBlack = false;

  }
  return findBlack;
}

moveDiagonal(oRow, oCol, piece){
    var idx,
    opt = Array(0),
    idx2 = oRow;
    for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
      idx2++;
      if(this.WhitePieces(row[idx] + (idx2))){break;};
      opt.push(row[idx] + (idx2));
      if(this.BlackPieces(row[idx] + (idx2))){break;};
    }
    idx2 = oRow;
    for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
      idx2--;
      if(this.WhitePieces(row[idx] + (idx2))){break;};
      opt.push(row[idx] + (idx2));
      if(this.BlackPieces(row[idx] + (idx2))){break;};
    }
    idx2 = oRow;
    for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
      idx2++;
      if(this.WhitePieces(row[idx] + (idx2))){break;};
      opt.push(row[idx] + (idx2));
      if(this.BlackPieces(row[idx] + (idx2))){break;};
    }
    idx2 = oRow;
    for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
      idx2--;
      if(this.WhitePieces(row[idx] + (idx2))){break;};
      opt.push(row[idx] + (idx2));
      if(this.BlackPieces(row[idx] + (idx2))){break;};
    }
    this.setState({options:opt, selected:piece});
  }
  moveStraight(oRow, oCol, piece){
    var idx,
    opt = Array(0);
    for (idx = (oRow + 1); idx <= 8; idx++) {
      if(this.WhitePieces(oCol + idx)){break;};
      opt.push(String(oCol + idx));
      if(this.BlackPieces(oCol + idx)){break;};
    }
    for (idx = oRow - 1; idx >= 0; idx--) {
      if(this.WhitePieces(oCol + idx)){break;};
      opt.push(String(oCol + idx));
      if(this.BlackPieces(oCol + idx)){break;};
    }
    for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
      if(this.WhitePieces(row[idx] + oRow)){break;};
      opt.push(String(row[idx] + oRow));
      if(this.BlackPieces(row[idx] + oRow)){break;};
    }
    for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
      if(this.WhitePieces(row[idx] + oRow)){break;};
      opt.push(String(row[idx] + oRow));
      if(this.BlackPieces(row[idx] + oRow)){break;};
    }
    this.setState({options:opt, selected:piece});
  }
  moveStraight2(oRow, oCol, piece){
    var idx,
    opt = Array(0);
    for (idx = (oRow + 1); idx <= 8; idx++) {
      if(this.BlackPieces(oCol + idx)){break;};
      opt.push(String(oCol + idx));
      if(this.WhitePieces(oCol + idx)){break;};
    }
    for (idx = oRow - 1; idx >= 0; idx--) {
      if(this.BlackPieces(oCol + idx)){break;};
      opt.push(String(oCol + idx));
      if(this.WhitePieces(oCol + idx)){break;};
    }
    for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
      if(this.BlackPieces(row[idx] + oRow)){break;};
      opt.push(String(row[idx] + oRow));
      if(this.WhitePieces(row[idx] + oRow)){break;};
    }
    for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
      if(this.BlackPieces(row[idx] + oRow)){break;};
      opt.push(String(row[idx] + oRow));
      if(this.WhitePieces(row[idx] + oRow)){break;};
    }
    this.setState({options:opt, selected:piece});
  }
  moveDiagonal2(oRow, oCol, piece){
      var idx,
      opt = Array(0),
      idx2 = oRow;
      for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
        idx2++;
        if(this.BlackPieces(row[idx] + (idx2))){break;};
        opt.push(row[idx] + (idx2));
        if(this.WhitePieces(row[idx] + (idx2))){break;};
      }
      idx2 = oRow;
      for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
        idx2--;
        if(this.BlackPieces(row[idx] + (idx2))){break;};
        opt.push(row[idx] + (idx2));
        if(this.WhitePieces(row[idx] + (idx2))){break;};
      }
      idx2 = oRow;
      for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
        idx2++;
        if(this.BlackPieces(row[idx] + (idx2))){break;};
        opt.push(row[idx] + (idx2));
        if(this.WhitePieces(row[idx] + (idx2))){break;};
      }
      idx2 = oRow;
      for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
        idx2--;
        if(this.BlackPieces(row[idx] + (idx2))){break;};
        opt.push(row[idx] + (idx2));
        if(this.WhitePieces(row[idx] + (idx2))){break;};
      }
      this.setState({options:opt, selected:piece});
    }

  handleClick(i){
    console.log(i);
    var idx,idx2,o1,o2,o3,o4,o5,o6,o7,o8,
        opt=Array(0),
        oCol = i.split("")[0],
        oRow = Number(i.split("")[1]);
    if (this.state.isWhitePlayer) {
      if(i === this.state.Hook1a){
        this.moveStraight(oRow, oCol, "Hook1a")
      }
      if(i === this.state.Hook1b){
        this.moveStraight(oRow, oCol, "Hook1b")
      }
      if(i === this.state.Bishop1a){
        this.moveDiagonal(oRow, oCol, "Bishop1a");
      }
      if(i === this.state.Bishop1b){
        this.moveDiagonal(oRow, oCol, "Bishop1b");
      }
      if(i === this.state.Queen){
        for (idx = (oRow + 1); idx <= 8; idx++) {
          if(this.WhitePieces(oCol + idx)){break;};
          opt.push(String(oCol + idx));
          if(this.BlackPieces(oCol + idx)){break;};
        }
        for (idx = oRow - 1; idx >= 0; idx--) {
          if(this.WhitePieces(oCol + idx)){break;};
          opt.push(String(oCol + idx));
          if(this.BlackPieces(oCol + idx)){break;};
        }
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          if(this.WhitePieces(row[idx] + oRow)){break;};
          opt.push(String(row[idx] + oRow));
          if(this.BlackPieces(row[idx] + oRow)){break;};
        }
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          if(this.WhitePieces(row[idx] + oRow)){break;};
          opt.push(String(row[idx] + oRow));
          if(this.BlackPieces(row[idx] + oRow)){break;};
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2++;
          if(this.WhitePieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.BlackPieces(row[idx] + (idx2))){break;};
          }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2--;
          if(this.WhitePieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.BlackPieces(row[idx] + (idx2))){break;};
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2++;
          if(this.WhitePieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.BlackPieces(row[idx] + (idx2))){break;};
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2--;
          if(this.WhitePieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.BlackPieces(row[idx] + (idx2))){break;};
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
        if(!this.WhitePieces(o1)){opt.push(o1)};
        if(!this.WhitePieces(o2)){opt.push(o2)};
        if(!this.WhitePieces(o3)){opt.push(o3)};
        if(!this.WhitePieces(o4)){opt.push(o4)};
        if(!this.WhitePieces(o5)){opt.push(o5)};
        if(!this.WhitePieces(o6)){opt.push(o6)};
        if(!this.WhitePieces(o7)){opt.push(o7)};
        if(!this.WhitePieces(o8)){opt.push(o8)};
        this.setState({options:opt, selected:"King"});
      };

      if(this.state.options.includes(i)) {
        switch (this.state.selected) {
          case "Hook1a":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, Hook1a:i, options:[]});
            break;
          case "Hook1b":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, Hook1b:i, options:[]});
            break;
          case "Bishop1a":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, Bishop1a:i, options:[]});
            break;
          case "Bishop1b":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, Bishop1b:i, options:[]});
            break;
          case "Queen":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, Queen:i, options:[]});
            break;
          case "King":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, King:i, options:[]});
            break;
          default:
        }
      };
    }else{
      if(i === this.state.Hook2a){
        this.moveStraight2(oRow, oCol, "Hook2a");
      }
      if(i === this.state.Hook2b){
        this.moveStraight2(oRow, oCol, "Hook2b");
      }
      if(i === this.state.Bishop2a){
        this.moveDiagonal2(oRow, oCol, "Bishop2a");
      }
      if(i === this.state.Bishop2b){
        this.moveDiagonal2(oRow, oCol, "Bishop2b");
      }
      if(i === this.state.Queen2){
        for (idx = (oRow + 1); idx <= 8; idx++) {
          if(this.BlackPieces(oCol + idx)){break;};
          opt.push(String(oCol + idx));
          if(this.WhitePieces(oCol + idx)){break;};
        }
        for (idx = oRow - 1; idx >= 0; idx--) {
          if(this.BlackPieces(oCol + idx)){break;};
          opt.push(String(oCol + idx));
          if(this.WhitePieces(oCol + idx)){break;};
        }
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          if(this.BlackPieces(row[idx] + oRow)){break;};
          opt.push(String(row[idx] + oRow));
          if(this.WhitePieces(row[idx] + oRow)){break;};
        }
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          if(this.BlackPieces(row[idx] + oRow)){break;};
          opt.push(String(row[idx] + oRow));
          if(this.WhitePieces(row[idx] + oRow)){break;};
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2++;
          if(this.BlackPieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.WhitePieces(row[idx] + (idx2))){break;};
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) + 1); idx < row.length; idx++) {
          idx2--;
          if(this.BlackPieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.WhitePieces(row[idx] + (idx2))){break;};
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2++;
          if(this.BlackPieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.WhitePieces(row[idx] + (idx2))){break;};
        }
        idx2 = oRow;
        for (idx = (row.indexOf(oCol) - 1); idx > -1; idx--) {
          idx2--;
          if(this.BlackPieces(row[idx] + (idx2))){break;};
          opt.push(String(row[idx] + (idx2)));
          if(this.WhitePieces(row[idx] + (idx2))){break;};
        }
        this.setState({options:opt, selected:"Queen2"})
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
        if(!this.BlackPieces(o1)){opt.push(o1)};
        if(!this.BlackPieces(o2)){opt.push(o2)};
        if(!this.BlackPieces(o3)){opt.push(o3)};
        if(!this.BlackPieces(o4)){opt.push(o4)};
        if(!this.BlackPieces(o5)){opt.push(o5)};
        if(!this.BlackPieces(o6)){opt.push(o6)};
        if(!this.BlackPieces(o7)){opt.push(o7)};
        if(!this.BlackPieces(o8)){opt.push(o8)};

        this.setState({options:opt, selected:"King2"});
      };
      if(this.state.options.includes(i)) {
        switch(this.state.selected) {
          case "Bishop2a":
            this.checkPieces2(i);
            this.setState({isWhitePlayer:true, Bishop2a:i, options:[]});
            break;
          case "Bishop2b":
            this.checkPieces2(i);
            this.setState({isWhitePlayer:true, Bishop2b:i, options:[]});
            break;
          case "Hook2a":
            this.checkPieces2(i);
            this.setState({isWhitePlayer:true, Hook2a:i, options:[]});
            break;
          case "Hook2b":
            this.checkPieces2(i);
            this.setState({isWhitePlayer:true, Hook2b:i, options:[]});
            break;
          case "Queen2":
            this.checkPieces2(i);
            this.setState({isWhitePlayer: true, Queen2:i, options:[]});
            break;
          case "King2":
            this.checkPieces2(i);
            this.setState({isWhitePlayer:true, King2:i, options:[]});
            break;
          default:
        };
      };
    }
  }
  renderSquare(i){
    var color, piece;
    switch (i) {
      case this.state.Hook1a:
        color = "red";
        piece = "Hook";
        break;
      case this.state.Hook1b:
        color = "red";
        piece = "Hook";
        break;
      case this.state.Bishop1a:
        color = "red";
        piece = "Bishop";
        break;
      case this.state.Bishop1b:
          color = "red";
          piece = "Bishop";
          break;
      case this.state.Bishop2a:
        color = "blue";
        piece = "Bishop";
        break;
      case this.state.Bishop2b:
          color = "blue";
          piece = "Bishop";
          break;
      case this.state.Hook2a:
          color = "blue";
          piece = "Hook";
          break;
      case this.state.Hook2b:
          color = "blue";
          piece = "Hook";
          break;
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
      if(this.state.options.includes(i) || this.state.options.includes(i)){
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
    const alert = this.state.winner;
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
      <div className="Report"><p>{alert}</p></div>
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
