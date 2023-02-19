import './DessertCard.css';
import pic from '../data/no_image.png';

function DessertCard({ name, text, image }) {
  return (
    <div className="dessert-card">
      <img
        className="img"
        src={image !== undefined && null ? image : pic}
        alt="изображение отсутствует("
      />
      <p className="dessert-title">{name}</p>
      <p className="dessert-description">{text}</p>
    </div>
  );
}

export default DessertCard;
