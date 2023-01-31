import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './NewsCards.css';
import DessertCard from "./DessertCard";

function NewsCards() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news', {method: 'GET'})
      .then((response) => response.json())
      .then((json) => setNews(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="news-cards">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        news['results'].map((item) => <NewsCard {...item} key={item.id} />)
      )}
    </div>
  );
}

export default NewsCards;
