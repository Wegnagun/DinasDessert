import { Turn as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './UI/Button';
import styles from './Menu.module.css';
import Menu from './Menu';

function Burger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Hamburger
      toggled={isOpen}
      toggle={setOpen}
      direction="left"
      color="#140114"
      onToggle={(toggled) => {
        if (toggled) {
          () => {
            return Button;
          };
        } else {
        }
      }}
    />
  );
}

export default Burger;
