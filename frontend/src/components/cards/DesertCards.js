import deserts from '../data/deserts';
import DesertCard from './DesertCard';
import './DesertCards.css';

function DesertCards() {
  return (
    <div className="desert-cards">
      {deserts.map((person) => {
        return <DesertCard {...person} key={person.id} />;
      })}
    </div>
  );
}

export default DesertCards;
