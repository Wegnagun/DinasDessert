import { NavLink } from 'react-router-dom';
import './Menu.css';
import Button from './UI/Button';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink>
        <Button>Новости</Button>
      </NavLink>
      <NavLink>
        <Button>Тортики</Button>
      </NavLink>
      <NavLink>
        <Button>Отзывы</Button>
      </NavLink>
    </nav>
  );
};

export default Menu;
