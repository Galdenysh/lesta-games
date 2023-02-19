import { patches } from '../../utils/mock';
import styles from './cards-patches.module.css';

function CardsPatches() {
  return (
    <section className={styles.cardsPatches}>
      <h2 className={styles.mainTitle}>Patch Notes</h2>
      <ul className={styles.list}>
        {patches.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <article className={styles.container}>
              <img
                className={styles.image}
                src={item.image}
                alt="Изображение новости"
              ></img>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardsPatches;
