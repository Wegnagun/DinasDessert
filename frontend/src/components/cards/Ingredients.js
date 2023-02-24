import './Ingredients.css';

function Ingredients(props) {
  const data = Object.values(props);
  return (
    <>
      {data.map((ingredient, index) => {
        return (
          <p className="ingredient" key={index}>{`- ${ingredient.name}`}</p>
        );
      })}
    </>
  );
}

export default Ingredients;
