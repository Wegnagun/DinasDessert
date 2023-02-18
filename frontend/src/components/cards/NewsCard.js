import './NewsCard.css';
import pic from '../data/1.jpg';

function NewsCard({ pub_date, title, image, text }) {
  return (
    <div className="news-card">
      <img
        className="img"
        src={pic} // для тестов!!!
        /* src={image !== null ? image : null} */
        alt={'news'} /* вставить дефолтное изображение! */
      ></img>
      <p className="news-title">{title}</p>
      <p className="news-text">{`${text.slice(0, 250)}...`}</p>
      <p className="pub-date">дата публикации: {pub_date}</p>
    </div>
  );
}

export default NewsCard;
