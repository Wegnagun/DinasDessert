import { ColorRing } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import DessertCard from './DessertCard';
import './DessertCards.css';
import desserts_data from '../data/desserts'; // для тестов

function DessertCards() {
  const [desserts, setDesserts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  /* useEffect(() => {
    fetch('/api/desserts', { method: 'GET' })
      .then((response) => response.json())
      .then((json) => setDesserts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (error) {
    return <h1>Error: {error}</h1>;
  } */

  return (
    <div className="dessert-cards">
      {desserts_data.map((dessert) => {
        return <DessertCard {...dessert} key={dessert.id} />;
      })}
    </div>
    /* <div className="dessert-cards">
      {isLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      ) : (
        desserts['results'].map((dessert) => (
          <DessertCard {...dessert} key={dessert.id} />
        ))
      )}
    </div> */
  );
}

export default DessertCards;
