import './NewsCard.css';

function NewsCard({ pub_date, title, image, text }) {
  return (
    <div className="news-card">
      <img
        className="img"
        src={image !== null ? image : null}
        alt={image} /* вставить дефолтное изображение! */
      ></img>
      <h1>{title}</h1>
      <h2>{text}</h2>
      <h3 className="pub-date">дата публикации: {pub_date}</h3>
    </div>
  );
}

export default NewsCard;
