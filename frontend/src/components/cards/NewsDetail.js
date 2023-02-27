import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import pic from '../data/no_image.png';
import './NewsDetail.css';

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/news/${id}/`, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => setNews(json))
      .catch((error) => setError(error.message));
  });
  console.log(news); // udali
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <div className="news-item">
        <img
          className="img"
          src={news.image !== null ? news.image : pic}
          alt="изображение отсутствует("
        />
        <p className="news-title">{news.name}</p>
        <p className="news-text">{news.text}</p>
        <p className="pub-date">
          дата публикации: {`${news.pub_date.slice(0, 10)}`}
        </p>
      </div>
    </>
  );
}

export default NewsDetail;
