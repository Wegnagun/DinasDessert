import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import Button from './UI/Button';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink to=".">
        <Button>На главную</Button>
      </NavLink>
      <NavLink to="news">
        <Button>Новости</Button>
      </NavLink>
      <NavLink to="deserts">
        <Button>Тортики</Button>
      </NavLink>
      <NavLink>
        <Button>Отзывы</Button>
      </NavLink>
    </nav>
  );
};

export default Menu;
