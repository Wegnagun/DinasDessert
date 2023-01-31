import { useState, useEffect } from 'react';
import DessertCard from './DessertCard';
import './DessertCards.css';

function DessertCards() {
  const [desserts, setDesserts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/desserts', {method: 'GET'})
      .then((response) => response.json())
      .then((json) => setDesserts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="dessert-cards">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        desserts['results'].map((dessert) => <DessertCard {...dessert} key={dessert.id} />)
      )}
    </div>
  );
}

export default DessertCards;
