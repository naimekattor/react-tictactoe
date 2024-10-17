import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [won, setWon] = useState(null);
  const [lock, setLock] = useState(false);
  console.log(board);
  const handleUserClick = (e) => {
    if (!lock && !won) {
      let squreId = e.target.id;
      console.log(squreId);
      const cpyBoard = [...board];
      cpyBoard[squreId] = isXTurn ? "X" : "O";
      setBoard(cpyBoard);
      setIsXTurn((prevTurn) => !prevTurn);
    }
  };
  const winChecker = () => {
    //winner chance
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWon(board[a]);
      }
      console.log(lines.length);
    }
  };
  useEffect(() => {
    winChecker();
  }, [board]);
  //Reset
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWon(null);
    setIsXTurn(true);
  };
  return (
    <div className="content">
      <h2>Tic Tac Toe</h2>
      <div className="board" onClick={handleUserClick}>
        {board.map((item, index) => (
          <div key={index} id={index} className="box">
            {item}
          </div>
        ))}
      </div>
      <div className="game_info">
        <button onClick={handleReset}>Reset</button>
        <div>Next Player : {isXTurn ? "X" : "O"}</div>
        {won ? <div>Player {won} won the Game</div> : <div>Match is draw</div>}
      </div>
    </div>
  );
};

export default TicTacToe;
