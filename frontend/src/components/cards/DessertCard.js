import { NavLink } from 'react-router-dom';
import './DessertCard.css';
import pic from '../data/no_image.png';

function DessertCard({ name, image, id, short_description }) {
  return (
    <div className="dessert-card">
      <img
        className="img"
        src={image !== undefined ? image : pic}
        // src={image !== null ? image : pic}
        alt="изображение отсутствует("
      />
      <NavLink to={`${id}`} className="dessert-title">
        {name}
      </NavLink>
      <p className="dessert-description">{short_description}</p>
    </div>
  );
}

export default DessertCard;
