import React, { useState } from 'react';
import './game.css';
import Board from './../Board/Board';
import checkWinner from '../../utils/checkWinner';

export default function Game() {
  const [ squaresArray, setSquaresArray ] = useState(new Array(9).fill(null));
  const [ xIsNext, setXIsNext ] = useState(true);

  const winner = checkWinner(squaresArray);
  const draw = squaresArray.every(item => item !== null);
  const restartButtonIsEnabled = winner || draw;

  const handleRestartClick = () => {
    setSquaresArray(new Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className='game'>
      <button 
        type='button' 
        className='game__restart' 
        onClick={() => {handleRestartClick()}}
        disabled={!restartButtonIsEnabled}
        >restart</button>
      TIC-TAC-TOE
      <Board 
        squaresArray={squaresArray} 
        setSquaresArray={setSquaresArray}
        xIsNext={xIsNext}
        setXIsNext={setXIsNext}
        winner={winner}
        draw={draw}
      />
    </div>
  )
}
