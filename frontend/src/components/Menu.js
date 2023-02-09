import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import Button from './UI/Button';

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

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
      <div className={styles.openmenu}>
        <div className={styles.mobilemenu}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="left"
            color="#140114"
            label="Открыть меню"
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          />
          <div className={isOpen ? styles.openmenu : styles.closedmenu}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
