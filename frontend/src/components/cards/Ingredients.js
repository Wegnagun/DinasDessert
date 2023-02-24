import './Ingredients.css';

function Ingredients(props) {
  const data = Object.values(props);
  console.log(props);
  return (
    <>
      {data.map((ingredient, index) => {
        return <p className="ingredient" key={index}>{`- ${ingredient}`}</p>;
      })}
    </>
  );
}

export default Ingredients;
