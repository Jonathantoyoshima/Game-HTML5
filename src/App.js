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
      King: "E1",
      Queen:"D1",
      Bishop1a:"C1",
      Bishop1b:"F1",
      Hook1a:"A1",
      Hook1b:"H1",
      Knight1a:"B1",
      Knight1b:"G1",
      PawnA1:"A2",
      PawnA2:"B2",
      PawnA3:"C2",
      PawnA4:"D2",
      PawnA5:"E2",
      PawnA6:"F2",
      PawnA7:"G2",
      PawnA8:"H2",
      QueenA1:null,
      QueenA2:null,
      QueenA3:null,
      QueenA4:null,
      QueenA5:null,
      QueenA6:null,
      QueenA7:null,
      QueenA8:null,
      QueenB1:null,
      QueenB2:null,
      QueenB3:null,
      QueenB4:null,
      QueenB5:null,
      QueenB6:null,
      QueenB7:null,
      QueenB8:null,
      King2: "E8",
      Queen2:"D8",
      Bishop2a:"C8",
      Bishop2b:"F8",
      Hook2a:"A8",
      Hook2b:"H8",
      Knight2a:"B8",
      Knight2b:"G8",
      PawnB1:"A7",
      PawnB2:"B7",
      PawnB3:"C7",
      PawnB4:"D7",
      PawnB5:"E7",
      PawnB6:"F7",
      PawnB7:"G7",
      PawnB8:"H7",
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
    if(i===this.state.Knight2a){
      this.setState({Knight2a:null});
    }
    if(i===this.state.Knight2b){
      this.setState({Knight2b:null});
    }
    if(i===this.state.PawnB1){this.setState({PawnB1:null})};
    if(i===this.state.PawnB2){this.setState({PawnB2:null})};
    if(i===this.state.PawnB3){this.setState({PawnB3:null})};
    if(i===this.state.PawnB4){this.setState({PawnB4:null})};
    if(i===this.state.PawnB5){this.setState({PawnB5:null})};
    if(i===this.state.PawnB6){this.setState({PawnB6:null})};
    if(i===this.state.PawnB7){this.setState({PawnB7:null})};
    if(i===this.state.PawnB8){this.setState({PawnB8:null})};

    if(i===this.state.QueenB1){this.setState({QueenB1:null})};
    if(i===this.state.QueenB2){this.setState({QueenB2:null})};
    if(i===this.state.QueenB3){this.setState({QueenB3:null})};
    if(i===this.state.QueenB4){this.setState({QueenB4:null})};
    if(i===this.state.QueenB5){this.setState({QueenB5:null})};
    if(i===this.state.QueenB6){this.setState({QueenB6:null})};
    if(i===this.state.QueenB7){this.setState({QueenB7:null})};
    if(i===this.state.QueenB8){this.setState({QueenB8:null})};
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
    if(i===this.state.Knight1a){
      this.setState({Knight1a:null});
    }
    if(i===this.state.Knight1b){
      this.setState({Knight1b:null});
    }
    if(i===this.state.PawnA1){this.setState({PawnA1:null})};
    if(i===this.state.PawnA2){this.setState({PawnA2:null})};
    if(i===this.state.PawnA3){this.setState({PawnA3:null})};
    if(i===this.state.PawnA4){this.setState({PawnA4:null})};
    if(i===this.state.PawnA5){this.setState({PawnA5:null})};
    if(i===this.state.PawnA6){this.setState({PawnA6:null})};
    if(i===this.state.PawnA7){this.setState({PawnA7:null})};
    if(i===this.state.PawnA8){this.setState({PawnA8:null})};

    if(i===this.state.QueenA1){this.setState({QueenA1:null})};
    if(i===this.state.QueenA2){this.setState({QueenA2:null})};
    if(i===this.state.QueenA3){this.setState({QueenA3:null})};
    if(i===this.state.QueenA4){this.setState({QueenA4:null})};
    if(i===this.state.QueenA5){this.setState({QueenA5:null})};
    if(i===this.state.QueenA6){this.setState({QueenA6:null})};
    if(i===this.state.QueenA7){this.setState({QueenA7:null})};
    if(i===this.state.QueenA8){this.setState({QueenA8:null})};
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
    case this.state.Knight1a:
      findWhite = true;
      break;
    case this.state.Knight1b:
      findWhite = true;
      break;
    case this.state.PawnA1: findWhite=true;break;
    case this.state.PawnA2: findWhite=true;break;
    case this.state.PawnA3: findWhite=true;break;
    case this.state.PawnA4: findWhite=true;break;
    case this.state.PawnA5: findWhite=true;break;
    case this.state.PawnA6: findWhite=true;break;
    case this.state.PawnA7: findWhite=true;break;
    case this.state.PawnA8: findWhite=true;break;
    case this.state.QueenA1: findWhite=true;break;
    case this.state.QueenA2: findWhite=true;break;
    case this.state.QueenA3: findWhite=true;break;
    case this.state.QueenA4: findWhite=true;break;
    case this.state.QueenA5: findWhite=true;break;
    case this.state.QueenA6: findWhite=true;break;
    case this.state.QueenA7: findWhite=true;break;
    case this.state.QueenA8: findWhite=true;break;
    default: findWhite = false;
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
    case this.state.Knight2a:
      findBlack = true;
      break;
    case this.state.Knight2b:
      findBlack = true;
      break;
    case this.state.PawnB1: findBlack=true;break;
    case this.state.PawnB2: findBlack=true;break;
    case this.state.PawnB3: findBlack=true;break;
    case this.state.PawnB4: findBlack=true;break;
    case this.state.PawnB5: findBlack=true;break;
    case this.state.PawnB6: findBlack=true;break;
    case this.state.PawnB7: findBlack=true;break;
    case this.state.PawnB8: findBlack=true;break;

    case this.state.QueenB1: findBlack=true;break;
    case this.state.QueenB2: findBlack=true;break;
    case this.state.QueenB3: findBlack=true;break;
    case this.state.QueenB4: findBlack=true;break;
    case this.state.QueenB5: findBlack=true;break;
    case this.state.QueenB6: findBlack=true;break;
    case this.state.QueenB7: findBlack=true;break;
    case this.state.QueenB8: findBlack=true;break;
    default: findBlack = false;
  }
  return findBlack;
}
PawnOptions(i){
  if(this.BlackPieces(i)){this.checkPieces(i)};
}
PawnBOptions(i){
  if(this.WhitePieces(i)){this.checkPieces2(i)};
}
movePawn(oRow, oCol, piece){
  var opt = Array(0);
  if(!this.BlackPieces(oCol + (oRow + 1)) &&
     !this.WhitePieces(oCol + (oRow + 1))){
    opt.push(oCol + (oRow + 1));
    if(oRow === 2 &&
      !this.BlackPieces(oCol + (oRow + 2)) &&
      !this.WhitePieces(oCol + (oRow + 2))
    ){
      opt.push(oCol + (oRow + 2));
    }
  }
  if(this.BlackPieces(row[row.indexOf(oCol) - 1] + (oRow + 1))){
    opt.push(row[row.indexOf(oCol) - 1] + (oRow + 1));
  }
  if(this.BlackPieces(row[row.indexOf(oCol) + 1] + (oRow + 1))){
    opt.push(row[row.indexOf(oCol) + 1] + (oRow + 1));
  }
  this.setState({options:opt, selected:piece});
}
movePawnB(oRow, oCol, piece){
  var opt = Array(0);
  if(!this.BlackPieces(oCol + (oRow - 1)) &&
     !this.WhitePieces(oCol + (oRow - 1))){
    opt.push(oCol + (oRow - 1));
    if(oRow === 7 &&
      !this.BlackPieces(oCol + (oRow - 2)) &&
      !this.WhitePieces(oCol + (oRow - 2))
    ){
      opt.push(oCol + (oRow - 2));
    }
  }
  if(this.WhitePieces(row[row.indexOf(oCol) - 1] + (oRow - 1))){
    opt.push(row[row.indexOf(oCol) - 1] + (oRow - 1));
  }
  if(this.WhitePieces(row[row.indexOf(oCol) + 1] + (oRow - 1))){
    opt.push(row[row.indexOf(oCol) + 1] + (oRow - 1));
  }
  this.setState({options:opt, selected:piece});
}
moveL(oRow, oCol, piece){
  var pos, opt = Array(0);
  pos = String(row[row.indexOf(oCol) + 1] + (oRow + 2));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) + 1] + (oRow - 2));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 1] + (oRow + 2));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 1] + (oRow - 2));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) + 2] + (oRow + 1));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) + 2] + (oRow - 1));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 2] + (oRow + 1));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 2] + (oRow - 1));
  if(!this.WhitePieces(pos)){opt.push(pos)};
  this.setState({options:opt, selected:piece});
}
moveL2(oRow, oCol, piece){
  var pos, opt = Array(0);
  pos = String(row[row.indexOf(oCol) + 1] + (oRow + 2));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) + 1] + (oRow - 2));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 1] + (oRow + 2));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 1] + (oRow - 2));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) + 2] + (oRow + 1));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) + 2] + (oRow - 1));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 2] + (oRow + 1));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  pos = String(row[row.indexOf(oCol) - 2] + (oRow - 1));
  if(!this.BlackPieces(pos)){opt.push(pos)};
  this.setState({options:opt, selected:piece});
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

  moveQueen(oRow, oCol, piece){
    var idx, idx2, opt=Array(0);
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
    this.setState({options:opt, selected:piece})
  }
  moveQueenBlack(oRow, oCol, piece){
    var idx, idx2, opt=Array(0);
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
      this.setState({options:opt, selected:piece});
  }
  handleClick(i){
    console.log(i);
    var idx,idx2,o1,o2,o3,o4,o5,o6,o7,o8,
        opt=Array(0),
        oCol = i.split("")[0],
        oRow = Number(i.split("")[1]);
    if (this.state.isWhitePlayer) {
      if(i === this.state.PawnA1){this.movePawn(oRow, oCol, "PawnA1")};
      if(i === this.state.PawnA2){this.movePawn(oRow, oCol, "PawnA2")};
      if(i === this.state.PawnA3){this.movePawn(oRow, oCol, "PawnA3")};
      if(i === this.state.PawnA4){this.movePawn(oRow, oCol, "PawnA4")};
      if(i === this.state.PawnA5){this.movePawn(oRow, oCol, "PawnA5")};
      if(i === this.state.PawnA6){this.movePawn(oRow, oCol, "PawnA6")};
      if(i === this.state.PawnA7){this.movePawn(oRow, oCol, "PawnA7")};
      if(i === this.state.PawnA8){this.movePawn(oRow, oCol, "PawnA8")};

      if(i === this.state.QueenA1){this.moveQueen(oRow, oCol, "QueenA1")};
      if(i === this.state.QueenA2){this.moveQueen(oRow, oCol, "QueenA2")};
      if(i === this.state.QueenA3){this.moveQueen(oRow, oCol, "QueenA3")};
      if(i === this.state.QueenA4){this.moveQueen(oRow, oCol, "QueenA4")};
      if(i === this.state.QueenA5){this.moveQueen(oRow, oCol, "QueenA5")};
      if(i === this.state.QueenA6){this.moveQueen(oRow, oCol, "QueenA6")};
      if(i === this.state.QueenA7){this.moveQueen(oRow, oCol, "QueenA7")};
      if(i === this.state.QueenA8){this.moveQueen(oRow, oCol, "QueenA8")};

      if(i === this.state.Knight1a){
        this.moveL(oRow, oCol, "Knight1a")
      }
      if(i === this.state.Knight1b){
        this.moveL(oRow, oCol, "Knight1b")
      }
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
        this.moveQueen(oRow,oCol, "Queen");
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
          case "PawnA1":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA1:null, QueenA1: i});
            }else{
              this.setState({PawnA1:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;
          case "PawnA2":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA2:null, QueenA2: i});
            }else{
              this.setState({PawnA2:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;
          case "PawnA3":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA3:null, QueenA3: i});
            }else{
              this.setState({PawnA3:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;
          case "PawnA4":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA4: null, QueenA4: i});
            }else{
              this.setState({PawnA4:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;
          case "PawnA5":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA5: null, QueenA5: i});
            }else{
              this.setState({PawnA5:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;
          case "PawnA6":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA6: null, QueenA6: i});
            }else{
              this.setState({PawnA6:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;
          case "PawnA7":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA7: null, QueenA7: i});
            }else{
              this.setState({PawnA7:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;
          case "PawnA8":
            this.PawnOptions(i);
            if(Number(i.split("")[1]) === 8){
              this.setState({PawnA8: null, QueenA8: i});
            }else{
              this.setState({PawnA8:i});
            }
            this.setState({isWhitePlayer:false, options:[]});
            break;

          case "Knight1a":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, Knight1a:i, options:[]});
            break;
          case "Knight1b":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, Knight1b:i, options:[]});
            break;
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
          case "Queen": this.checkPieces(i); this.setState({isWhitePlayer:false, Queen:i, options:[]}); break;
          case "QueenA1": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA1:i, options:[]}); break;
          case "QueenA2": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA2:i, options:[]}); break;
          case "QueenA3": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA3:i, options:[]}); break;
          case "QueenA4": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA4:i, options:[]}); break;
          case "QueenA5": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA5:i, options:[]}); break;
          case "QueenA6": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA6:i, options:[]}); break;
          case "QueenA7": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA7:i, options:[]}); break;
          case "QueenA8": this.checkPieces(i); this.setState({isWhitePlayer:false, QueenA8:i, options:[]}); break;

          case "King":
            this.checkPieces(i);
            this.setState({isWhitePlayer:false, King:i, options:[]});
            break;
          default:
        }
      };
    }else{
      if(i === this.state.PawnB1){this.movePawnB(oRow, oCol, "PawnB1")};
      if(i === this.state.PawnB2){this.movePawnB(oRow, oCol, "PawnB2")};
      if(i === this.state.PawnB3){this.movePawnB(oRow, oCol, "PawnB3")};
      if(i === this.state.PawnB4){this.movePawnB(oRow, oCol, "PawnB4")};
      if(i === this.state.PawnB5){this.movePawnB(oRow, oCol, "PawnB5")};
      if(i === this.state.PawnB6){this.movePawnB(oRow, oCol, "PawnB6")};
      if(i === this.state.PawnB7){this.movePawnB(oRow, oCol, "PawnB7")};
      if(i === this.state.PawnB8){this.movePawnB(oRow, oCol, "PawnB8")};
      if(i === this.state.Knight2a){
        this.moveL2(oRow, oCol, "Knight2a");
      }
      if(i === this.state.Knight2b){
        this.moveL2(oRow, oCol, "Knight2b");
      }
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
      if(i === this.state.Queen2){this.moveQueenBlack(oRow, oCol, "Queen2")};

      if(i === this.state.QueenB1){this.moveQueenBlack(oRow, oCol, "QueenB1")};
      if(i === this.state.QueenB2){this.moveQueenBlack(oRow, oCol, "QueenB2")};
      if(i === this.state.QueenB3){this.moveQueenBlack(oRow, oCol, "QueenB3")};
      if(i === this.state.QueenB4){this.moveQueenBlack(oRow, oCol, "QueenB4")};
      if(i === this.state.QueenB5){this.moveQueenBlack(oRow, oCol, "QueenB5")};
      if(i === this.state.QueenB6){this.moveQueenBlack(oRow, oCol, "QueenB6")};
      if(i === this.state.QueenB7){this.moveQueenBlack(oRow, oCol, "QueenB7")};
      if(i === this.state.QueenB8){this.moveQueenBlack(oRow, oCol, "QueenB8")};

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
          case "PawnB1":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 6){
              this.setState({PawnB1:null, QueenB1: i});
            }else{
              this.setState({PawnB1:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;
          case "PawnB2":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 1){
              this.setState({PawnB2:null, QueenB2: i});
            }else{
              this.setState({PawnB2:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;
          case "PawnB3":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 1){
              this.setState({PawnB3:null, QueenB3: i});
            }else{
              this.setState({PawnB3:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;
          case "PawnB4":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 1){
              this.setState({PawnB4: null, QueenB4: i});
            }else{
              this.setState({PawnB4:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;
          case "PawnB5":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 1){
              this.setState({PawnB5: null, QueenB5: i});
            }else{
              this.setState({PawnB5:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;
          case "PawnB6":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 1){
              this.setState({PawnB6: null, QueenB6: i});
            }else{
              this.setState({PawnB6:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;
          case "PawnB7":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 1){
              this.setState({PawnB7: null, QueenB7: i});
            }else{
              this.setState({PawnB7:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;
          case "PawnB8":
            this.PawnBOptions(i);
            if(Number(i.split("")[1]) === 1){
              this.setState({PawnB8: null, QueenB8: i});
            }else{
              this.setState({PawnB8:i});
            }
            this.setState({isWhitePlayer:true, options:[]});
            break;

          case "Knight2a":
            this.checkPieces2(i);
            this.setState({isWhitePlayer:true, Knight2a:i, options:[]});
            break;

          case "Knight2b":
            this.checkPieces2(i);
            this.setState({isWhitePlayer:true, Knight2b:i, options:[]});
            break;
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
          case "QueenB1":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB1:i, options:[]});break;
          case "QueenB2":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB2:i, options:[]});break;
          case "QueenB3":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB3:i, options:[]});break;
          case "QueenB4":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB4:i, options:[]});break;
          case "QueenB5":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB5:i, options:[]});break;
          case "QueenB6":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB6:i, options:[]});break;
          case "QueenB7":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB7:i, options:[]});break;
          case "QueenB8":this.checkPieces2(i);this.setState({isWhitePlayer: true, QueenB8:i, options:[]});break;

          default:
        };
      };
    }
  }
  renderSquare(i){
    var color, piece;
    switch (i) {
      case this.state.PawnA1: color = "red"; piece = "Pawn"; break;
      case this.state.PawnA2: color = "red"; piece = "Pawn"; break;
      case this.state.PawnA3: color = "red"; piece = "Pawn"; break;
      case this.state.PawnA4: color = "red"; piece = "Pawn"; break;
      case this.state.PawnA5: color = "red"; piece = "Pawn"; break;
      case this.state.PawnA6: color = "red"; piece = "Pawn"; break;
      case this.state.PawnA7: color = "red"; piece = "Pawn"; break;
      case this.state.PawnA8: color = "red"; piece = "Pawn"; break;

      case this.state.PawnB1: color = "blue"; piece = "Pawn"; break;
      case this.state.PawnB2: color = "blue"; piece = "Pawn"; break;
      case this.state.PawnB3: color = "blue"; piece = "Pawn"; break;
      case this.state.PawnB4: color = "blue"; piece = "Pawn"; break;
      case this.state.PawnB5: color = "blue"; piece = "Pawn"; break;
      case this.state.PawnB6: color = "blue"; piece = "Pawn"; break;
      case this.state.PawnB7: color = "blue"; piece = "Pawn"; break;
      case this.state.PawnB8: color = "blue"; piece = "Pawn"; break;

      case this.state.QueenA1: color = "red"; piece = "Queen"; break;
      case this.state.QueenA2: color = "red"; piece = "Queen"; break;
      case this.state.QueenA3: color = "red"; piece = "Queen"; break;
      case this.state.QueenA4: color = "red"; piece = "Queen"; break;
      case this.state.QueenA5: color = "red"; piece = "Queen"; break;
      case this.state.QueenA6: color = "red"; piece = "Queen"; break;
      case this.state.QueenA7: color = "red"; piece = "Queen"; break;
      case this.state.QueenA8: color = "red"; piece = "Queen"; break;

      case this.state.QueenB1: color = "blue"; piece = "Queen"; break;
      case this.state.QueenB2: color = "blue"; piece = "Queen"; break;
      case this.state.QueenB3: color = "blue"; piece = "Queen"; break;
      case this.state.QueenB4: color = "blue"; piece = "Queen"; break;
      case this.state.QueenB5: color = "blue"; piece = "Queen"; break;
      case this.state.QueenB6: color = "blue"; piece = "Queen"; break;
      case this.state.QueenB7: color = "blue"; piece = "Queen"; break;
      case this.state.QueenB8: color = "blue"; piece = "Queen"; break;

      case this.state.Knight1a:color = "red";piece = "Knight";break;
      case this.state.Knight1b:color = "red";piece = "Knight";break;
      case this.state.Knight2a:color = "blue";piece = "Knight";break;
      case this.state.Knight2b:color = "blue";piece = "Knight";break;
      case this.state.Hook1a:color = "red";piece = "Hook";break;
      case this.state.Hook1b:color = "red";piece = "Hook";break;
      case this.state.Bishop1a:color = "red";piece = "Bishop";break;
      case this.state.Bishop1b:color = "red";piece = "Bishop";break;
      case this.state.Bishop2a:color = "blue";piece = "Bishop";break;
      case this.state.Bishop2b:color = "blue";piece = "Bishop";break;
      case this.state.Hook2a:color = "blue";piece = "Hook";break;
      case this.state.Hook2b:color = "blue";piece = "Hook";break;
      case this.state.King:color = "red";piece = "KING";break;
      case this.state.King2:color = "blue";piece = "KING";break;
      case this.state.Queen:color = "red";piece = "Queen";break;
      case this.state.Queen2:color = "blue";piece = "Queen";break;
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
        <Board />
      </div>
    );
  }
}

export default App;
