import { useParams } from 'react-router-dom';
import desserts_data from '../data/desserts';
import Ingredients from './Ingredients';
import pic from '../data/no_image.png';
import './Dessert.css';

function Dessert() {
  const { id } = useParams();
  // для тестов!
  const result = desserts_data.filter(function (element) {
    if (element.id == id) {
      return element;
    } else {
      return false;
    }
  });
  const data = { ...result[0] };
  // для тестов!
  return (
    <div className="dessert-card">
      <img
        className="img"
        src={data.image !== undefined ? data.image : pic}
        alt="изображение отсутствует("
      />
      <p className="dessert-title">{data.name}</p>
      <p className="dessert-description">{data.text}</p>
      <div className="dessert-ingredients">
        {'Состав:\n'}
        <Ingredients {...data.ingredients} />
      </div>
    </div>
  );
}

export default Dessert;
