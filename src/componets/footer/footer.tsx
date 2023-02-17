import styles from './footer.module.css';
import githubIcon from './images/github.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="https://github.com/Galdenysh">
        <img className={styles.ghLogo} src={githubIcon} alt="GitHub"></img>
        by Igor Petrov
      </a>
    </footer>
  );
}

export default Footer;
