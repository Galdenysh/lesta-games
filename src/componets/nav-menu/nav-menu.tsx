import { NavLink, useLocation } from 'react-router-dom';
import styles from './nav-menu.module.css';

const links = {
  news: '/',
  patchNote: '/patch-note',
  analyze: '/analyze',
  game: '/game',
};

function NavMenu() {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink
          className={styles.link}
          style={{
            color: location.pathname === links.news ? '#C4C4C4' : '#fff',
          }}
          to={links.news}
        >
          Новости
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          className={styles.link}
          style={{
            color: location.pathname === links.patchNote ? '#C4C4C4' : '#fff',
          }}
          to={links.patchNote}
        >
          Патч-ноут
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          className={styles.link}
          style={{
            color: location.pathname === links.analyze ? '#C4C4C4' : '#fff',
          }}
          to={links.analyze}
        >
          Анализ
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          className={styles.link}
          style={{
            color: location.pathname === links.game ? '#C4C4C4' : '#fff',
          }}
          to={links.game}
        >
          Крестики-нолики
        </NavLink>
      </li>
    </ul>
  );
}

export default NavMenu;
