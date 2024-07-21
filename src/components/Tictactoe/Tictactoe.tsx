import { useState } from "react";
import Square from "./Square";
import square from "./Tictactoe.module.css";

import { checkWin } from "./initial";
import { SHIFT } from "./initial";

import Modal from "./Modal";

function Tictactoe() {
  const [blocks, setBlocks] = useState(() => {
    const blocksFromStorage = window.localStorage.getItem("blocks");
    if (blocksFromStorage) {
      return JSON.parse(blocksFromStorage);
    } else {
      return Array(9).fill(null);
    }
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? SHIFT.x;
  });
  const [win, setWin] = useState(null);

  const changeShift = (index: number) => {
    if (blocks[index] !== null || win) return;
    const newTurn = turn === SHIFT.x ? SHIFT.o : SHIFT.x;
    setTurn(newTurn);

    const newBlocks = [...blocks];
    newBlocks[index] = turn;
    setBlocks(newBlocks);

    window.localStorage.setItem("blocks", JSON.stringify(newBlocks));
    window.localStorage.setItem("turn", newTurn);

    const winner = checkWinner(newBlocks);
    if (winner) {
      setWin(winner);
    } else if (newBlocks.every((block) => block !== null)) {
      setWin("Empate");
    }
  };

  const checkWinner = (newBlocks: string[]) => {
    let winner = null;
    checkWin.forEach((combination) => {
      if (
        combination.every((index) => newBlocks[index] === SHIFT.x) ||
        combination.every((index) => newBlocks[index] === SHIFT.o)
      ) {
        winner = turn;
      }
    });
    return winner;
  };

  const reset = () => {
    setBlocks(Array(9).fill(null));
    setWin(null);
    setTurn(SHIFT.x);
    localStorage.clear();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Tic Tac Toe</h1>
      <div className={[square.content].join(" ")}>
        {blocks.map((block, index) => (
          <Square
            key={index}
            index={index}
            value={block}
            changeShift={changeShift}
          />
        ))}
      </div>
      <div className={[square.info].join(" ")}>
        <h2 style={{ textAlign: "center", fontSize: "17px" }}>Turno: {turn}</h2>
        <button onClick={reset} className={[square.btn].join(" ")}>
          Reset
        </button>
      </div>
      {win !== null && <Modal win={win} reset={reset} />}
    </>
  );
}

export default Tictactoe;
