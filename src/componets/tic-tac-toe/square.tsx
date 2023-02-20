import { MouseEventHandler } from 'react';
import styles from './tic-tac-toe.module.css';
import oImg from './images/o.svg';
import xImg from './images/x.svg';
import winOImg from './images/win-o.svg';
import winXImg from './images/win-x.svg';

interface SquareProps {
  value: string;
  winner: string | null;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

function Square(props: SquareProps) {
  const { value, winner, onSquareClick } = props;
  let valueImg = null as string | null;

  switch (value) {
    case 'X':
      winner === 'X' ? valueImg = winXImg : valueImg = xImg;
      break;
    case 'O':
      winner === 'O' ? valueImg = winOImg : valueImg = oImg;
      break;
    default:
      valueImg = null;
      break;
  }

  return (
    <button className={styles.square} type="button" onClick={onSquareClick}>
      {valueImg && <img className={styles.squareImg} src={valueImg} alt={value === "X" ? "X" : "O"} />}
    </button>
  );
}

export default Square;
