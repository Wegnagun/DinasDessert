function Ingredients(props) {
  const data = Object.values(props);
  return (
    <>
      {data.map((ingredient, index) => {
        return <h1 key={index}>{`- ${ingredient}`}</h1>;
      })}
    </>
  );
}

export default Ingredients;
