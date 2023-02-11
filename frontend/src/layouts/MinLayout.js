import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import './MinLayout.css';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;
