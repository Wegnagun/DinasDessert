import './DessertCard.css';

function DessertCard({ name, text, image }) {
  return (
    <div className="dessert-card">
      <img
        className="img"
        src={image !== null ? image : null}
        alt={image} /* вставить дефолтное изображение! */
      />
      <h1>{name}</h1>
      <h2>{text}</h2>
    </div>
  );
}

export default DessertCard;
