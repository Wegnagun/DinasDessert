import desserts from '../data/desserts';
import DessertCard from './DessertCard';
import './DessertCards.css';

function DessertCards() {
  return (
    <div className="dessert-cards">
      {desserts.map((person) => {
        return <DessertCard {...person} key={person.id} />;
      })}
    </div>
  );
}

export default DessertCards;
