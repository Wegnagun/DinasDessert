import './DessertCard.css';
import pic from '../data/1.jpg';

function DessertCard({ name, text, image }) {
  return (
    <div className="dessert-card">
      <img
        className="img"
        /* src={pic} // для тестов!!! */
        src={
          image !== null || undefined ? image : require('../data/1.jpg').default
        }
        alt="dessert"
      />
      <p className="dessert-title">{name}</p>
      <p className="dessert-description">{text}</p>
    </div>
  );
}

export default DessertCard;
