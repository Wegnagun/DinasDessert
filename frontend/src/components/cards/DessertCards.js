import desserts from '../data/deserts';
import DessertCard from './DesertCard';
import './DesertCards.css';

function DessertCards() {
  return (
    <div className="desert-cards">
      {desserts.map((person) => {
        return <DessertCard {...person} key={person.id} />;
      })}
    </div>
  );
}

export default DessertCards;
