import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import Button from './UI/Button';
import Burger from './Burger';

const Menu = () => {
  return (
    <>
      <nav className={styles.menu}>
        <NavLink to="." className={styles.button}>
          <Button>Обо мне</Button>
        </NavLink>
        <NavLink to="news" className={styles.button}>
          <Button>Новости</Button>
        </NavLink>
        <NavLink to="desserts" className={styles.button}>
          <Button>Тортики</Button>
        </NavLink>
        <NavLink to="reviews" className={styles.button}>
          <Button>Отзывы</Button>
        </NavLink>
      </nav>
      <nav className={styles.mobilemenu}>
        <Burger />
      </nav>
    </>
  );
};

export default Menu;
