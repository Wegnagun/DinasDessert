import { ColorRing } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './NewsCards.css';
import newslist from '../data/newslist'; // для тестов

function NewsCards() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news', { method: 'GET' })
      .then((response) => response.json())
      .then((json) => setNews(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    /* <div className="news-cards">
      {newslist.map((news) => {
        return <NewsCard {...news} key={news.id} />;
      })}
    </div> */
    <div className="news-cards">
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
        news['results'].map((item) => <NewsCard {...item} key={item.id} />)
      )}
    </div>
  );
}

export default NewsCards;
