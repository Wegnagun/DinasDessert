import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import pic from '../data/no_image.png';
import './Dessert.css';

function Dessert() {
  const { id } = useParams();
  const [dessert, setDessert] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/desserts/${id}/`, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => setDessert(json))
      .catch((error) => setError(error.message));
  });
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div className="dessert-item">
      <img
        className="img"
        src={dessert.image !== undefined ? dessert.image : pic}
        alt="изображение отсутствует("
      />
      <p className="dessert-title">{dessert.name}</p>
      <p className="dessert-description">{dessert.text}</p>
      <div className="ingredients-container">
        <div className="ingredients">
          {'Состав:\n'}
          <Ingredients {...dessert.ingredients} />
        </div>
      </div>
    </div>
  );
}

export default Dessert;
