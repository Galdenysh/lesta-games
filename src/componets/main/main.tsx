import News from '../news/news';
import styles from './main.module.css';

function Main() {
  return (
    <main className={styles.content}>
      <News />
    </main>
  );
}

export default Main;
