import { useState } from 'react';
import Board from './board';
import styles from './tic-tac-toe.module.css';

function TicTacToe() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));

  const handleReset = () => {
    setSquares(Array(9).fill(''));
  };

  return (
    <section className={styles.ticTacToe}>
      <h2 className={styles.mainTitle}>Game</h2>
      <Board squares={squares} setSquares={setSquares} />
      <button className={styles.resetBtn} type="button" onClick={handleReset}>
        Играть снова
      </button>
    </section>
  );
}

export default TicTacToe;
