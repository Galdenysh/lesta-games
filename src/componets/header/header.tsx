import NavMenu from '../nav-menu/nav-menu';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.logoText}>for</p>
        <a className={styles.logo} href="https://lesta.ru/ru"></a>
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
