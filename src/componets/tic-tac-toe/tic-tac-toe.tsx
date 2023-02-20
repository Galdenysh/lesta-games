import { useState } from 'react';
import { TicTacValue } from '../../utils/types';
import Board from './board';
import styles from './tic-tac-toe.module.css';

function TicTacToe() {
  const [squares, setSquares] = useState<TicTacValue[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);

  const handleReset = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
  };

  return (
    <section className={styles.ticTacToe}>
      <h2 className={styles.mainTitle}>Game</h2>
      <Board squares={squares} setSquares={setSquares} xIsNext={xIsNext} setXIsNext={setXIsNext} />
      <button className={styles.resetBtn} type="button" onClick={handleReset}>
        Играть снова
      </button>
    </section>
  );
}

export default TicTacToe;
