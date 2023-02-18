import TicTacToe from '../../componets/tic-tac-toe/tic-tac-toe';
import styles from './game.module.css';

function Game() {
  return (
    <main className={styles.content}>
      <TicTacToe />
    </main>
  );
}

export default Game;
