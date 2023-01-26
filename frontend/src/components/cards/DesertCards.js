import deserts from '../data/deserts';
import DesertCard from './DesertCard';

function DesertCards() {
  return (
    <div>
      {deserts.map((person) => {
        return <DesertCard {...person} key={person.id} />;
      })}
    </div>
  );
}

export default DesertCards;
