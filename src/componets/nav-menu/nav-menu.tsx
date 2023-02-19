import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../../utils/constants';
import styles from './nav-menu.module.css';
import { useEffect, useRef, useState } from 'react';
import { useResize } from '../hooks/use-resize';

function NavMenu() {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);
  const { width, isScreenLg } = useResize();
  const btnRef = useRef(null);

  const burgerHandle = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenuOutside = (evt: MouseEvent) => {
    if (evt.target !== btnRef.current && !isScreenLg) setMenuVisible(false);
  };

  useEffect(() => {
    isScreenLg ? setMenuVisible(true) : setMenuVisible(false);

    document.body.addEventListener('click', closeMenuOutside);

    return () => {
      document.body.removeEventListener('click', closeMenuOutside);
    };
  }, [width]);

  return (
    <>
      <button
        className={styles.burgerBtn}
        type="button"
        onClick={burgerHandle}
        disabled={isScreenLg}
        ref={btnRef}
      />
      <ul
        className={styles.list}
        style={{ display: menuVisible ? 'flex' : 'none' }}
      >
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
    </>
  );
}

export default NavMenu;
