import { news } from '../../utils/mock';
import styles from './cards-news.module.css';

function CardsNews() {
  return (
    <section className={styles.cardsNews}>
      <h2 className={styles.mainTitle}>News</h2>
      <ul className={styles.list}>
        {news.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <article className={styles.container}>
              <img
                className={styles.image}
                src={item.image}
                alt="Изображение новости"
              ></img>
              <a className={styles.link} href={item.link}>
                <h3 className={styles.title}>{item.title}</h3>
              </a>
              <p className={styles.textAbout}>{item.about}</p>
              <p className={styles.textExp}>{item.explanation}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardsNews;
