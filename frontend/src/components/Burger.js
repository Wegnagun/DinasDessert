import { Turn as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import { NavLink, renderMatches } from 'react-router-dom';
import Button from './UI/Button';
import styles from './Menu.module.css';

function Burger() {
  const [isOpen, setOpen] = useState(false);
  const openNav = () => {
    <div className={styles.mobilemenu}>123</div>;
  };

  return (
    <Hamburger
      toggled={isOpen}
      toggle={setOpen}
      direction="left"
      color="#140114"
      onToggle={(toggled) => {
        if (toggled) {
          openNav();
        } else {
          // close a menu
        }
      }}
    />
  );
}

export default Burger;
