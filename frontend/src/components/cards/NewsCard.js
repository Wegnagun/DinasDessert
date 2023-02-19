import './NewsCard.css';
import pic from '../data/no_image.png';

function NewsCard({ pub_date, title, image, text }) {
  return (
    <div className="news-card">
      <img
        className="img"
        src={image !== null ? image : pic}
        alt="изображение отсутствует("
      ></img>
      <p className="news-title">{title}</p>
      <p className="news-text">{`${text.slice(0, 250)}...`}</p>
      <p className="pub-date">дата публикации: {`${pub_date.slice(0, 10)}`}</p>
    </div>
  );
}

export default NewsCard;
