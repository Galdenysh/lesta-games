import { useEffect } from 'react';
import { calculateWinner } from '../../utils/funcs';
import { TicTacValue } from '../../utils/types';
import Square from './square';
import styles from './tic-tac-toe.module.css';

interface BoardProps {
  squares: TicTacValue[];
  setSquares: React.Dispatch<React.SetStateAction<TicTacValue[]>>;
  xIsNext: boolean;
  setXIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Board(props: BoardProps) {
  const { squares, setSquares, xIsNext, setXIsNext } = props;
  const winner = calculateWinner(squares);

  const handleClick = (i: number) => {
    if (squares[i] !== '' || winner) return;

    const nextSqures = [...squares];

    xIsNext ? (nextSqures[i] = 'X') : (nextSqures[i] = 'O');

    setXIsNext(!xIsNext);
    setSquares(nextSqures);
  };

  // Логика работы AI 
  useEffect(() => {
    if (!xIsNext) {
      const emptyFields = [] as number[];
      
      squares.forEach((item, index) => {
        if (item === '') emptyFields.push(index);
      });

      handleClick(emptyFields[Math.floor(Math.random() * emptyFields.length)]);
    }
  }, [xIsNext]);

  return (
    <>
      <div className={styles.boardRow}>
        <Square
          value={squares[0]}
          winner={winner}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          winner={winner}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          winner={winner}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className={styles.boardRow}>
        <Square
          value={squares[3]}
          winner={winner}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          winner={winner}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          winner={winner}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className={styles.boardRow}>
        <Square
          value={squares[6]}
          winner={winner}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          winner={winner}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          winner={winner}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
}
