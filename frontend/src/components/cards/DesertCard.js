import './DesertCard.css';

function DesertCard({ name, text, image }) {
  return (
    <div className="desert-card">
      {image}
      <h1>{name}</h1>
      <h2>{text}</h2>
    </div>
  );
}

export default DesertCard;
