function DesertCard({ name, text, image }) {
  return (
    <div>
      {image}
      <h1>{name}</h1>
      <h2>{text}</h2>
    </div>
  );
}

export default DesertCard;
