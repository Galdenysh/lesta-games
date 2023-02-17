import CardsNews from '../../componets/cards-news/cards-news';
import styles from './news.module.css';

function News() {
  return (
    <main className={styles.content}>
      <CardsNews />
    </main>
  );
}

export default News;
