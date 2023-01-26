import './DessertCard.css';

function DessertCard({ name, text, image }) {
  return (
    <div className="dessert-card">
      {image}
      <h1>{name}</h1>
      <h2>{text}</h2>
    </div>
  );
}

export default DessertCard;
