import { analyze } from '../../utils/mock';
import styles from './posts-analize.module.css';

function PostsAnalize() {
  return (
    <section className={styles.postsAnalize}>
      <h2 className={styles.mainTitle}>Analize</h2>
      <div className={styles.container}>
        <div className={styles.wrapText}>
          <h3 className={styles.title}>{analyze.title}</h3>
          <p className={styles.text}>{analyze.text}</p>
        </div>
        <img className={styles.image} src={analyze.image} alt="Изображение поста"></img>
      </div>
    </section>
  );
}

export default PostsAnalize;
