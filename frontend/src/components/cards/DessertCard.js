import './DessertCard.css';
import firstFoto from '../data/testimages/1.jpg';
console.log(firstFoto);

function DessertCard({ name, text, image }) {
  const photo = `../data/testimages/${image}`;
  console.log(photo);
  return (
    <div className="dessert-card">
      <img
        className="img"
        src={
          image !== 'empty'
            ? require('../data/testimages/' + image + '.jpg')
            : null
        }
        alt={image} /* вставить дефолтное изображение! */
      />
      <h1>{name}</h1>
      <h2>{text}</h2>
    </div>
  );
}

export default DessertCard;
