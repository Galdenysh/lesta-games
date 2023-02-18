import PostsAnalize from '../../componets/posts-analize/posts-analize';
import styles from './analize.module.css';

function Analyze() {
  return (
    <main className={styles.content}>
      <PostsAnalize />
    </main>
  );
}

export default Analyze;
