import './board.css';
import Square from '../Square/Square';
// import checkWinner from '../../utils/checkWinner';

export default function Board({ 
  squaresArray, 
  setSquaresArray, 
  xIsNext, 
  setXIsNext,
  winner,
  draw,
}) {
  const handleClick = (num) => {
    if(squaresArray[num] || winner) return;
    const newArr = squaresArray.slice();
    newArr[num] = xIsNext ? 'X' : 'O';
    setSquaresArray(newArr);
    setXIsNext(!xIsNext);
  }

  const gameInfo = winner 
    ? `Winner is ${winner}` 
      : draw ? 'This is a Draw' 
        : xIsNext 
          ? 'Next is X' 
          : 'Next is O';

  return (
    <div className='board'>
      <p className='board__info'>{gameInfo}</p>
      <div className='squares'>
        <Square value={squaresArray[0]} handleClick={() => handleClick(0)} />
        <Square value={squaresArray[1]} handleClick={() => handleClick(1)} />
        <Square value={squaresArray[2]} handleClick={() => handleClick(2)} />
        <Square value={squaresArray[3]} handleClick={() => handleClick(3)} />
        <Square value={squaresArray[4]} handleClick={() => handleClick(4)} />
        <Square value={squaresArray[5]} handleClick={() => handleClick(5)} />
        <Square value={squaresArray[6]} handleClick={() => handleClick(6)} />
        <Square value={squaresArray[7]} handleClick={() => handleClick(7)} />
        <Square value={squaresArray[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  )
}
