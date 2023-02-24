import { NavLink } from 'react-router-dom';
import './DessertCard.css';
import pic from '../data/no_image.png';

function DessertCard({ name, text, image, id }) {
  return (
    <div className="dessert-card">
      <img
        className="img"
        src={image !== undefined ? image : pic}
        // src={image !== null ? image : pic}
        alt="изображение отсутствует("
      />
      <NavLink to={`${id}`} className="">
        Обо мне
      </NavLink>
      <p className="dessert-title">{name}</p>
      <p className="dessert-description">{text}</p>
    </div>
  );
}

export default DessertCard;
