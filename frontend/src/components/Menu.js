import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.menu}>
        <NavLink
          to="."
          className={({ isActive }) =>
            isActive ? styles.activebtn : styles.button
          }
        >
          Обо мне
        </NavLink>
        <NavLink
          to="news"
          className={({ isActive }) =>
            isActive ? styles.activebtn : styles.button
          }
        >
          Новости
        </NavLink>
        <NavLink
          to="desserts"
          className={({ isActive }) =>
            isActive ? styles.activebtn : styles.button
          }
        >
          Тортики
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? styles.activebtn : styles.button
          }
        >
          Отзывы
        </NavLink>
      </div>
      {/* <div className={styles.menu}>
        <div className={styles.burger}>
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
      </div> */}
    </>
  );
};

export default Menu;
